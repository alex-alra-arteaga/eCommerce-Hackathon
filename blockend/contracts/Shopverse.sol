// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "erc721l/contracts/ERC721Linkable.sol";

contract E7L is ERC721Linkable {
  constructor(
    string memory _name,
    string memory _symbol,
    address _parentContract
  ) ERC721Linkable(_name, _symbol, _parentContract) {}

  function mint(uint256 tokenId) public {
    _safeMint(msg.sender, tokenId);
  }


}
