"use client";
import type { NextPage } from "next";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

const Home: NextPage = () => {
  return (
    <>
      <Navbar itemCount={2} />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
