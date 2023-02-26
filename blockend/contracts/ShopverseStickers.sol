// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "erc721l/contracts/ERC721Linkable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

error Incorrect_Ether_Sent();
error TransferFailed();
error Not_TokenOwner();

contract ShopverseStickers is ERC721Linkable, Ownable {
  using Counters for Counters.Counter;
  using Strings for uint256;

  Counters.Counter public tokenIdCounter;

  string public baseTokenURI;
  
  mapping (uint => uint) public price;

  mapping (uint => bool) public isForSale;

  constructor(
    string memory _baseTokenURI,
    string memory _name,
    string memory _symbol,
    address _parentContract,
    uint numOfTokens
  ) ERC721Linkable(_name, _symbol, _parentContract) {
    baseTokenURI = _baseTokenURI;
    for (uint256 i = 0; i < numOfTokens; i++) {
      _mint(msg.sender, tokenIdCounter.current());
      tokenIdCounter.increment();
    }
  }

  function setPrice(uint256 tokenId, uint256 _price) public {
    if (ownerOf(tokenId) != _msgSender())
      revert Not_TokenOwner();
    price[tokenId] = _price;
  }

  function setIsForSale(uint256 tokenId, bool _isForSale) public {
    if (ownerOf(tokenId) != _msgSender())
      revert Not_TokenOwner();
    isForSale[tokenId] = _isForSale;
  }

  function buyToken(uint256 tokenId) public payable {
    require(ownerOf(tokenId) != _msgSender() && isForSale[tokenId]);
    if (price[tokenId] > msg.value)
      revert Incorrect_Ether_Sent();
    (bool success, ) = payable(ownerOf(tokenId)).call{value: msg.value}("");
    if (!success)
      revert TransferFailed();
    _transfer(ownerOf(tokenId), _msgSender(), tokenId);
    isForSale[tokenId] = false;
  }

  function withdrawAll() public onlyOwner {
    uint256 amount = address(this).balance;
    (bool success, ) = payable(msg.sender).call{value: amount}("");
    if (!success)
      revert TransferFailed();
  }

  function _baseURI() internal view override returns (string memory) {
    return baseTokenURI;
  }

  function tokenURI(uint256 tokenId) public view override returns (string memory) {
    _requireMinted(tokenId);

    string memory baseURI = _baseURI();
    return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json")) : "";
  }

  receive() external payable {}

  fallback() external payable {}
}