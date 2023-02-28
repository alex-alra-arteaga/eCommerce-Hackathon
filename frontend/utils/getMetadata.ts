import { Contract } from "ethers";

export const getMetadata = async (
  skinsContract: Contract,
  stickersContract: Contract,
  isSkinsContract: boolean,
  tokenID: number,
) => {
  const contract = isSkinsContract ? skinsContract : stickersContract;
  const uri = await contract.tokenURI(tokenID);
  const response = await fetch(uri);
  const metadata = await response.json();
  return metadata;
};
