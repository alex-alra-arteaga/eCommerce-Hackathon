// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

error Exeed__Max__Supply();
error Incorrect_Ether_Sent();
error Not__For__Sale();
error Incorrect__Token__Id();

contract ShopverseSkins is ERC721Enumerable, Ownable {
    using Strings for uint256;

    /*
        The base tokenURI we will set the boilerpalte url that will have each token to save gas and not copy every time
    */

    string public _baseTokenURI = "QmWFeCXNLbAjywdauRw9dAg4rNysdKEANbXK2g5j8jh34i/";
    

    /*
        @dev the price is to be defined, just put 0,2 ehters
        payable for special skins more price, so diferent price and diferetns mint functions
    */

    bool isLocked = false;

    uint256 public maxTokenIds = 12;

    // total number of tokenIds minted
    uint256 public tokenIds;
    uint256 public priceIds;

    mapping(uint256 => uint256) public tokenIdToPrice;

    modifier onlyTokenOwner(uint256 tokenId) {
        require(ownerOf(tokenId) == msg.sender, "Not your token");
        _; 
    }

    /*
        In our constructor we set the baseURi and we also init the constructor of the ERC721, we do batch minting
        _tokenIds not grather than 
    */

    constructor (uint256[] memory _tokenIds, uint256[] memory _prices) ERC721("ShopverseSkins", "SVS") {
        require(_tokenIds.length <= maxTokenIds, "_tokenIds exeed the maxToken suply");
        // Batch miniting
        for (uint256 i = 0; i < _tokenIds.length; i++) {
        priceIds += 1;
        tokenIdToPrice[priceIds] = _prices[i];
        }
    }

    function mint(uint256 _tokenId) public payable {
        if (msg.value < tokenIdToPrice[_tokenId]) {
            revert Incorrect_Ether_Sent();
        }
        if (tokenIds >= maxTokenIds) {
            revert Exeed__Max__Supply();
        }
        tokenIds += 1;
        _safeMint(msg.sender, _tokenId);
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
        return string(abi.encodePacked(baseURI, tokenId.toString(), ".json"));
    }

    /* 
        contract set to paused or not paused by the owner only
    */

    function withdraw() public onlyOwner {
        // from ownneable contract
        address owner = owner();
        (bool sent,) = owner.call{value: address(this).balance}("");
        require(sent, "Transaction failed");
    }

    // getters
    function getPrice(uint256 _tokenId) public view returns(uint256) {
        return tokenIdToPrice[_tokenId];
    }

    // recieve function when msg.data is empyt
    receive() external payable {}

    // fallback, when data is not empty
    fallback() external payable {}
}
