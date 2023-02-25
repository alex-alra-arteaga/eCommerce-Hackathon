const { network, ethers } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config.js")
const { verify } = require("../utils/verify")
require("dotenv").config({ path: ".env" });

async function main() {
  const { log } = deployments
  let shopverseStickers

  if (!developmentChains.includes(network.name)) {
    const ShopverseStickers = await ethers.getContractFactory("ShopverseStickers")
    shopverseStickers = await ShopverseStickers.deploy() // with corresponding args
    await shopverseSkins.deployed()
    console.log("shopverseStickers deployed to: ", shopverseStickers.address)
  } else {

  }

  if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await sleep(50000);
    log("Verifying...")
    await verify(shopverseStickers.address)
  }
  log("-------------------------------------------------")
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catches if there are any errors
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
