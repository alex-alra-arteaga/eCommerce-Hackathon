// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "erc721l/contracts/ERC721Linkable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

error ShopverseStickers__Incorrect_Ether_Sent();
error ShopverseStickers__TransferFailed();

contract ShopverseStickers is ERC721Linkable, Ownable {
  using Counters for Counters.Counter;

  Counters.Counter public tokenIdCounter;

  string public baseTokenURI;
  
  uint public price = 0.01 ether;

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

  function mint(uint256 tokenId) public payable {
    if (msg.value < price) {
      revert ShopverseStickers__Incorrect_Ether_Sent();
    }
    tokenIdCounter.increment();
    _safeMint(msg.sender, tokenId);
  }
  
  function withdraw() public onlyOwner {
    uint256 amount = address(this).balance;
      (bool success, ) = payable(msg.sender).call{value: amount}("");
      if (!success) {
          revert ShopverseStickers__TransferFailed();
      }
  }

  function _baseURI() internal view override returns (string memory) {
    return baseTokenURI;
  }

  receive() external payable {}

  fallback() external payable {}
}