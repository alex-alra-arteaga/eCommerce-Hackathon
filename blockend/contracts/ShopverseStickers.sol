// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "erc721l/contracts/ERC721Linkable.sol";
import "@openzeppelin/contracts/contracts/owner/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Linkable.sol";

contract ShopverseStickers is ERC721Linkable {
  using Counters for Counters.Counter;

  Counters.Counter private _tokenIdCounter;
  
  constructor(
    string memory _name,
    string memory _symbol,
    address _parentContract,
    uint256[] memory _tokenIds
  ) ERC721Linkable(_name, _symbol, _parentContract) {
    for (uint256 i = 0; i < _tokenIds.length; i++) {
      tokenIdCounter.increment();
      // not sure of using _safeMint here instead of _mint
      _safeMint(msg.sender, _tokenIds[i]);
    }
  }

  function mint(uint256 tokenId) public {
    tokenIdCounter.increment();
    _safeMint(msg.sender, tokenId);
  }

  function withdraw() public onlyOwner {
        uint256 amount = address(this).balance;
        (bool success, ) = payable(msg.sender).call{value: amount}("");
        if (!success) {
            revert RandomIpfsNft__TransferFailed();
        }
    }

  receive() external payable {}

  fallback() external payable {}
}
