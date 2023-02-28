"use client";
import "../../styles/globals.css";
import type { NextPage } from "next";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Gallery from "./gallery";
import Stats from "../../components/Stats";
import Divider from "../../components/Divider";
import Toggle from "../../components/Toggle";
import Modal from "../../components/Modal";
import { useState } from "react";

const Home: NextPage = () => {
  const [sticker, setSticker] = useState<boolean>();
  return (
    <>
      <Navbar itemCount={2} />
      <div className="flex items-center justify-center w-50">
        <h1 className="flex-1 text-end mx-1">Stickers</h1>
        <Toggle toggle={sticker} setToggle={setSticker} />
        <h1 className="flex-1 text-start mx-1">Skins</h1>
      </div>
      <div className="flex items-center justify-center py-5">
        <Modal />
      </div>
      <div className="flex items-center justify-center">
        <Stats />
      </div>
      <Divider />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
