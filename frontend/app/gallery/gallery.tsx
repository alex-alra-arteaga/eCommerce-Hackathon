import "../../styles/globals.css";
import Card from "../../components/Card";
import { useSearchParams } from "next/navigation";
import { useSigner } from "wagmi"
import { useEffect, useState } from "react";
import { ethers } from "ethers";


const rarities = [
  { weigh: "common", color: "stone" },
  {
    weigh: "rare",
    color: "green",
  },
  { weigh: "epic", color: "purple" },
  { weigh: "legendary", color: "yellow" },
] as const;

const stickers = Array.from(
  { length: 10 },
  (_, i) =>
    [
      {
        key: "Red Bull",
        rarity: rarities[Math.floor(Math.random() * rarities.length)],
        path: "/rb.png",
        cost: "999$",
        description:
          "Introducing the ultimate accessory for any Counter Strike enthusiast - the Red Bull sticker! This eye-catching sticker features the iconic Red Bull logo in all its glory, sure to make your gaming setup stand out from the rest.",
      },
      {
        key: "Vox Eminor",
        rarity: rarities[Math.floor(Math.random() * rarities.length)],
        path: "/vx.png",
        cost: "2250$",
        description:
          "Introducing the Vox Eminor sticker - the must-have accessory for any true Counter Strike fan! This stunning sticker features the iconic Vox Eminor logo, showcasing your support for one of the most legendary teams in the game.",
      },
    ][i % 2],
);

const skins = Array.from(
  { length: 10 },
  (_, i) =>
    [
      {
        key: "Girl",
        rarity: rarities[Math.floor(Math.random() * rarities.length)],
        path: "/wf.png",
        cost: "5000$",
        description:
          "The Red Head Girl CS:GO sticker is a rare and highly desirable in-game item for players of the popular first-person shooter game Counter-Strike: Global Offensive (CS:GO). This sticker features an eye-catching and striking design of a red-haired girl lying down with two knives, conveying a sense of danger and edginess.",
      },
      {
        key: "Lion",
        rarity: rarities[Math.floor(Math.random() * rarities.length)],
        path: "/li.png",
        cost: "750$",
        description:
          "The Antwerp 2022 Lion CS:GO sticker is a rare and highly sought-after in-game item for players of the popular first-person shooter game Counter-Strike: Global Offensive (CS:GO). This sticker features a beautifully designed image of a lion, with intricate details and vibrant colors that make it a standout item in any collection.",
      },
    ][i % 2],
);

export default function Gallery() {
  let isStickers = true;
  const params = useSearchParams();
  const { data: signer, isLoading } = useSigner()

  return (
    <div className="flex items-center justify-center mb-5">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {(params.get("type") === "stickers" ? stickers : skins).map((
          { path, key, description, rarity },
          i,
        ) => (
          <div key={i} className="p-4">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <Card
                imageURL={path}
                alt={key}
                title={key}
                description={description}
                color={rarity.color}
                tokenID={i + 1}
                signer={signer}
                isSticker={params.get("type") === "stickers"}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
