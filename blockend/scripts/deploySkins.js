const { network, ethers } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config.js")
const { verify } = require("../utils/verify")
require("dotenv").config({ path: ".env" });

async function main() {
  const { log } = deployments
  let shopverseSkins
  const BaseUri = "ipfs://QmWFeCXNLbAjywdauRw9dAg4rNysdKEANbXK2g5j8jh34i/"
  // could be a problem, it works like this?
  const InstaMintTokenIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const PriceTokens =  [11029952448649444000000000000000000, 6131245439886204000000000000000000, 4904996351908963000000000000000000, 5518154729058603000000000000000000, 9810052851659739000000000000000000, 12262566064574674000000000000000000, 9196022413771962000000000000000000, 3678408965508785000000000000000000, 34331817011415326000000000000000000, 61306816091813085000000000000000000, 2145528106418194000000000000000000, 9195120456077975000000000000000000]
  if (!developmentChains.includes(network.name)) {
    const ShopverseSkins = await ethers.getContractFactory("ShopverseSkins")
    // args BASE URI, token Ids max
    shopverseSkins = await ShopverseSkins.deploy(BaseUri, InstaMintTokenIds, PriceTokens)
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
