export const SHOPVERSE_SKINS_ADDRESS =
  "0xbCd8FCF26b0da61C1A66F9E165Aa569a614DE1F2";
export const SHOPVERSE_STICKERS_ADDRESS =
  "0x27f1B6A8b7347567b6e657ebD3E38d814F46c657";
export const API_URL = "the graph";
export const SHOPVERSE_SKINS_ABI = [
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "_tokenIds",
        "type": "uint256[]",
      },
      {
        "internalType": "uint256[]",
        "name": "_prices",
        "type": "uint256[]",
      },
    ],
    "stateMutability": "nonpayable",
    "type": "constructor",
  },
  {
    "inputs": [],
    "name": "Exeed__Max__Supply",
    "type": "error",
  },
  {
    "inputs": [],
    "name": "Incorrect_Ether_Sent",
    "type": "error",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "Approval",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address",
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool",
      },
    ],
    "name": "ApprovalForAll",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address",
      },
    ],
    "name": "OwnershipTransferred",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "Transfer",
    "type": "event",
  },
  {
    "stateMutability": "payable",
    "type": "fallback",
  },
  {
    "inputs": [],
    "name": "_baseTokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256",
      },
    ],
    "name": "getPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address",
      },
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "maxTokenIds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256",
      },
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "priceIds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address",
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address",
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes",
      },
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address",
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool",
      },
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4",
      },
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256",
      },
    ],
    "name": "tokenByIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "name": "tokenIdToPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "tokenIds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256",
      },
    ],
    "name": "tokenOfOwnerByIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address",
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address",
      },
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "stateMutability": "payable",
    "type": "receive",
  },
];
export const SHOPVERSE_STICKERS_ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string",
      },
      {
        "internalType": "string",
        "name": "_symbol",
        "type": "string",
      },
      {
        "internalType": "address",
        "name": "_parentContract",
        "type": "address",
      },
    ],
    "stateMutability": "nonpayable",
    "type": "constructor",
  },
  {
    "inputs": [],
    "name": "Already_Minted",
    "type": "error",
  },
  {
    "inputs": [],
    "name": "Incorrect_Ether_Sent",
    "type": "error",
  },
  {
    "inputs": [],
    "name": "Maximum_Minted",
    "type": "error",
  },
  {
    "inputs": [],
    "name": "TransferFailed",
    "type": "error",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "Approval",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address",
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool",
      },
    ],
    "name": "ApprovalForAll",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "parentTokenId",
        "type": "uint256",
      },
    ],
    "name": "Link",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address",
      },
    ],
    "name": "OwnershipTransferred",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "Transfer",
    "type": "event",
  },
  {
    "stateMutability": "payable",
    "type": "fallback",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "currentPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address",
      },
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
      {
        "internalType": "uint256",
        "name": "parentTokenId",
        "type": "uint256",
      },
    ],
    "name": "linkToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenID",
        "type": "uint256",
      },
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "parentContract",
    "outputs": [
      {
        "internalType": "contract IERC721",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address",
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address",
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes",
      },
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address",
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool",
      },
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4",
      },
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "syncToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "tokenIdCounter",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "tokenInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "linked",
            "type": "bool",
          },
          {
            "internalType": "uint256",
            "name": "parentTokenId",
            "type": "uint256",
          },
        ],
        "internalType": "struct LinkableToken",
        "name": "",
        "type": "tuple",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
    ],
    "stateMutability": "pure",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address",
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address",
      },
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "withdrawAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "stateMutability": "payable",
    "type": "receive",
  },
];
