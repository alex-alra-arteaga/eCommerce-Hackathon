export const getTitle = async (
  skinsContract,
  stickersContract,
  isSkinsContract,
  tokenID,
) => {
  const contract = isSkinsContract ? skinsContract : stickersContract;
  const uri = await contract.tokenURI(tokenID);
  const response = await fetch(uri);
  response.json().then((data) => {
    return data.name;
  });
};
