"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Toggle() {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="form-control w-52 mx-4">
      <label className="cursor-pointer label flex align-center justify-center">
        <input
          type="checkbox"
          className="toggle toggle-primary"
          onClick={() => {
            router.push(
              `${new URL(location.href).pathname}?type=${
                !toggle ? "skins" : "stickers"
              }`,
            );
            setToggle((t) => !t);
          }}
        />
      </label>
    </div>
  );
}
