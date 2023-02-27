import { SHOPVERSE_STICKERS_ADDRESS, SHOPVERSE_STICKERS_ABI } from "../constants"
import { Contract } from "ethers"

export const linkNFT = async (signer, tokenID, parentTokenId) => {
  const stickersContract = new Contract(
      SHOPVERSE_STICKERS_ADDRESS,
      SHOPVERSE_STICKERS_ABI,
      signer,
    )
  try {
    const tx = await stickersContract.linkToken(tokenID, parentTokenId, { gasLimit: 3e6 })
    await tx.wait()
  } catch (err) {
    console.log(err)
  }
}