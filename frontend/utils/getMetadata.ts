
export const getMetadata = async (
  skinsContract: any,
  stickersContract: any,
  isSkinsContract: boolean,
  tokenID: number
) => {
  const contract = isSkinsContract ? skinsContract : stickersContract;
  console.log("contract: ", contract)
  const uri = await contract.tokenURI(tokenID);
  console.log("uri: ", uri);
  const response = await fetch(uri);
  const metadata = await response.json();
  return metadata;
};