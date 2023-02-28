import { useEffect, useState } from "react";
import { mintNFT } from "../utils/mintNFT";
import { getMetadata } from "../utils/getMetadata";
import { getTitle } from "../utils/getTitle";
import { getPrice } from "../utils/getPrice";
import { Contract, ethers } from "ethers";
import {
  SHOPVERSE_SKINS_ABI,
  SHOPVERSE_SKINS_ADDRESS,
  SHOPVERSE_STICKERS_ABI,
  SHOPVERSE_STICKERS_ADDRESS,
} from "../constants/index";
import { useSearchParams } from "next/navigation";

type CardProps = {
  imageURL: string;
  alt: string;
  title: string;
  description: string;
  color: "green" | "yellow" | "purple" | "stone";
  tokenID: number;
  signer: any;
  isSticker: boolean;
};

type Metadata = {
  image: string;
  name: string;
  description: string;
};

export default function Cart(
  { imageURL, alt, title, description, color, tokenID, signer, isSticker }:
    CardProps,
) {
  const params = useSearchParams();
  const [isSkin, setIsSkin] = useState(params.get("type") === "stickers");
  const [stickersContract, setStickersContract] = useState<any>(null);
  const [skinsContract, setSkinsContract] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [NFTTitle, setNFTTitle] = useState("");
  const [NFTImage, setNFTImage] = useState("");
  const [NFTDescription, setNFTDescription] = useState("");
  const [NFTPrice, setNFTPrice] = useState("");

  // (skinsContract, stickersContract, isSkinsContract, tokenID)
  // boolean isSkinsContract how to know if it's a skin or a sticker
  const fetchMetadata = async (...params: Parameters<typeof getMetadata>) => {
    const data: Metadata = await getMetadata.apply(null, params);
    const image = data.image.slice(7);
    setNFTImage(image);
    setNFTTitle(data.name);
    setNFTDescription(data.description);
  };

  const GetSkinPrice = async () => {
    const price = await getPrice(
      skinsContract,
      stickersContract,
      isSticker,
      tokenID,
    );
    setNFTPrice(ethers.utils.formatEther(price));
  };

  useEffect(() => {
    const auxSkinCont = new Contract(
      SHOPVERSE_SKINS_ADDRESS,
      SHOPVERSE_SKINS_ABI,
      signer,
    );
    const auxStickerCont = new Contract(
      SHOPVERSE_STICKERS_ADDRESS,
      SHOPVERSE_STICKERS_ABI,
      signer,
    );
    setSkinsContract(auxSkinCont);
    setStickersContract(auxStickerCont);
  }, []);

  useEffect(() => {
    if (!skinsContract || !stickersContract) return;
    fetchMetadata(
      skinsContract,
      stickersContract,
      !isSticker,
      tokenID,
    ), GetSkinPrice();
  }, [isSkin]);

  useEffect(() => {
    if (!skinsContract || !stickersContract) return;
    fetchMetadata(
      skinsContract,
      stickersContract,
      !isSticker,
      tokenID,
    ), GetSkinPrice();
  }, [skinsContract, stickersContract]);

  const triggerMintNFT = async () => {
    try {
      setLoading(true);
      await mintNFT(skinsContract, stickersContract, isSticker, tokenID);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div
      className={`flex-1 card w-96 bg-base-100 shadow-xl ring-${color}-500 ring-2`}
    >
      <figure>
        <img
          id={NFTImage}
          src={"https://ipfs.io/ipfs/" + NFTImage}
          onError={({ currentTarget }) => {
            currentTarget.src =
              "https://ipfs.io/ipfs/Qmez9BJ9Tzk3nqBghq4osyiBznJHWJmdJzCE6qwqaAWGtm/9.png";
          }}
          alt={alt}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{NFTTitle}</h2>
        <p className="py-5">{NFTDescription} - <code>{NFTPrice}</code> ETH</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary btn-outline">Add to cart</button>
          <button
            className="btn btn-primary"
            disabled={loading}
            onClick={triggerMintNFT}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
