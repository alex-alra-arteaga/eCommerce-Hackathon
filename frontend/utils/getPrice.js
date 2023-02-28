export const getPrice = async (
  skinsContract,
  stickersContract,
  isSkinsContract,
  tokenID,
) => {
  const price = isSkinsContract
    ? await skinsContract.getPrice(tokenID)
    : await stickersContract.currentPrice();
  return price.toString();
};
