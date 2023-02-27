import { BigNumber, ethers } from 'ethers'
export const mintNFT = async (skinsContract, stickersContract, isSkinsContract, tokenID) => {
  if (isSkinsContract) {
    try {
      console.log("skins: ", skinsContract)
      const value = await skinsContract.getPrice(tokenID)
      const Price = BigInt(value);
      const tx = await skinsContract.mint(tokenID, {gasLimit: 3e6, value: Price})
      await tx.wait()
    } catch (err) {
      console.log(err)
    }
  } else {
    try {
      console.log(stickersContract)
      const value = await stickersContract.currentPrice()
      const Price = BigInt(value)
      const tx = await stickersContract.mint(tokenID, {gasLimit: 3e6, value: Price})
      await tx.wait()
    } catch (err) {
      console.log(err)
    }
  }
}