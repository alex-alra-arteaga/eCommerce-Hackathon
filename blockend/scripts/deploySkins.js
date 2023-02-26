const { network, ethers } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config.js")
const { verify } = require("../utils/verify")
require("dotenv").config({ path: ".env" });

async function main() {
  const { log } = deployments
  let shopverseSkins
  const BaseUri = "ipfs://QmWFeCXNLbAjywdauRw9dAg4rNysdKEANbXK2g5j8jh34i/"
  // could be a problem, it works like this?
  let InstaMintTokenIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  if (!developmentChains.includes(network.name)) {
    const ShopverseSkins = await ethers.getContractFactory("ShopverseSkins")
    // args BASE URI, token Ids max
    shopverseSkins = await Shopverse.deploy(BaseUri, InstaMintTokenIds)
    await shopverseSkins.deployed()
    console.log("ShopverseSkins deployed to: ", shopverseSkins.address)
  } else {

  }

  if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await sleep(50000);
    log("Verifying...")
    await verify(shopverseSkins.address)
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
