// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

error Exeed__Max__Supply();
error Incorrect_Ether_Sent();
error Not__For__Sale();

contract ShopverseSkins is ERC721Enumerable, Ownable {
    using Strings for uint256;

    /*
        The base tokenURI we will set the boilerpalte url that will have each token to save gas and not copy every time
    */

    string _baseTokenURI;

    /*
        @dev the price is to be defined, just put 0,2 ehters
        payable for special skins more price, so diferent price and diferetns mint functions
    */
    uint public price = 0.05 ether;

    bool public _paused;

    uint256 public maxTokenIds = 12;

    // total number of tokenIds minted
    uint256 public tokenIds;

    mapping(uint256 => bool) public isForSale;

    modifier onlyWhenActive {
        require(!_paused, "Contract not Active");
        _;
    }

    modifier onlyTokenOwner(uint256 tokenId) {
        require(ownerOf(tokenId) == msg.sender, "Not your token");
        _; 
    }

    /*
        In our constructor we set the baseURi and we also init the constructor of the ERC721, we do batch minting
        _tokenIds not grather than 
    */

    constructor (string memory baseURI, uint256[] memory _tokenIds) ERC721("ShopverseSkins", "SVS") {
        _baseTokenURI = baseURI;
        require(_tokenIds.length <= maxTokenIds, "_tokenIds exeed the maxToken suply");
        // Batch miniting
        for (uint256 i = 0; i < _tokenIds.length; i++) {
        tokenIds += 1;
        _safeMint(msg.sender, _tokenIds[i]);
        }
    }


    function mint() public payable onlyWhenActive {
        if (msg.value != price) {
            revert Exeed__Max__Supply();
        }
        if (tokenIds == maxTokenIds) {
            revert Incorrect_Ether_Sent();
        }
        tokenIds += 1;
        _safeMint(msg.sender, tokenIds);
    }

    /*
        set or unset your token to sell
    */
    function toSell(uint256 tokenId, bool val) public onlyTokenOwner(tokenId) {
        isForSale[tokenId] = val;
    }

    // need for a mutex?

    function buy(uint256 _tokenId) public payable {
        if (!isForSale[_tokenId]) {
            revert Not__For__Sale();
        }
        // Verify that the buyer has sent enough Ether to purchase the token
        require(msg.value >= price, "Insufficient Ether sent");

        // Get the current owner of the token
        address payable currentOwner = payable(ownerOf(_tokenId));

        // Calculate the amount to be paid to the current owner
        uint256 payment = (price / 100 ) * 95; // 95% of the token price

        // Transfer the payment to the current owner
        currentOwner.transfer(payment);
        (bool sent,) = currentOwner.call{value: payment}("");
        require(sent, "Transaction failed");

        // Transfer the token to the buyer
        _transfer(currentOwner, msg.sender, _tokenId);

        // Refund any excess Ether sent by the buyer
        if (msg.value > price) {
            uint256 excess = msg.value - price;
            payable(msg.sender).transfer(excess);
        }

        // reset for sale
        isForSale[_tokenId] == false;
    }

    /*
        override the ERC721 OpenZeppelin implementation that by defalut return an empty string.
    */

    function _baseURI() internal view virtual override returns(string memory) {
        return(_baseTokenURI);
    }

    /*
        override the ERC721 OpenZeppelin implementation that by defalut return an the specific token URI to look up the metadata
    */

    function tokenURI(uint256 tokenId) public view virtual override returns(string memory) {
        string memory baseURI = _baseURI();
        // token id should not be that should be name
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json")) : "";
    }

    /* 
        contract set to paused or not paused by the owner only
    */

    function setPaused(bool val) public onlyOwner {
        _paused = val;
    }

    function withdraw() public onlyOwner {
        // from ownneable contract
        address owner = owner();
        (bool sent,) = owner.call{value: address(this).balance}("");
        require(sent, "Transaction failed");
    }

    // recieve function when msg.data is empyt
    receive() external payable {}

    // fallback, when data is not empty
    fallback() external payable {}
}