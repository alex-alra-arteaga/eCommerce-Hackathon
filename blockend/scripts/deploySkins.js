const { network, ethers } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config.js")
const BigNumber = require('bignumber.js');
const { verify } = require("../utils/verify")
require("dotenv").config({ path: ".env" });

async function main() {
  const { log } = deployments
  let shopverseSkins
  // could be a problem, it works like this?
  const InstaMintTokenIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const PriceTokens = [ethers.utils.parseEther("0.050470700834920806"), ethers.utils.parseEther("1.2309927032907513"), ethers.utils.parseEther("5.416367894479306"), ethers.utils.parseEther("6.154963516453757"), ethers.utils.parseEther("5.53946716480838"), ethers.utils.parseEther("1.846489054936127"), ethers.utils.parseEther("0.09232445274680635"), ethers.utils.parseEther("0.03692978109872254"), ethers.utils.parseEther("3.0774817582268783"), ethers.utils.parseEther("0.07385956219744508"), ethers.utils.parseEther("0.021542372307588147"), ethers.utils.parseEther("0.10463437977971386")]
  if (!developmentChains.includes(network.name)) {
    const ShopverseSkins = await ethers.getContractFactory("ShopverseSkins")
    // args BASE URI, token Ids max
    shopverseSkins = await ShopverseSkins.deploy(InstaMintTokenIds, PriceTokens)
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
