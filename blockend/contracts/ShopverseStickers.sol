// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "erc721l/contracts/ERC721Linkable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

error Incorrect_Ether_Sent();
error TransferFailed();
error Already_Minted();
error Maximum_Minted();

contract ShopverseStickers is ERC721Linkable, Ownable {
  using Counters for Counters.Counter;
  using Strings for uint256;

  Counters.Counter public tokenIdCounter;
  // centralized storage, not decentralized, but it's ok for this project
  string private constant baseTokenURI = "https://gateway.pinata.cloud/ipfs/QmaKnVv2uTpaFZD1NbNpCbyMUKmCZLRZFRJR4vgKnweTg9/";

  uint public currentPrice =  0.5 ether + 0.04 ether * tokenIdCounter.current();
  
  constructor(
    string memory _name,
    string memory _symbol,
    address _parentContract
  ) ERC721Linkable(_name, _symbol, _parentContract) {}

  function mint(uint256 tokenID) public payable {
    if (tokenIdCounter.current() == 25)
      revert Maximum_Minted();
    if (_exists(tokenID))
      revert Already_Minted();
    if (msg.value < currentPrice)
      revert Incorrect_Ether_Sent();

    payable(owner()).transfer(msg.value);
    tokenIdCounter.increment();
    _safeMint(msg.sender, tokenID);
  }

  function withdrawAll() public onlyOwner {
    uint256 amount = address(this).balance;
    (bool success, ) = payable(msg.sender).call{value: amount}("");
    if (!success)
      revert TransferFailed();
  }

  function tokenURI(uint256 tokenId) public pure override returns (string memory) {
    return string(abi.encodePacked(baseTokenURI, tokenId.toString(), ".json"));
  }

  receive() external payable {}

  fallback() external payable {}
}