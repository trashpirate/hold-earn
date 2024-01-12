"use client";
import React from "react";
import styles from "./page.module.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/flamelings/navbar/navbar";
import Introduction from "@/components/flamelings/introduction/introduction";

const NFT_NAME="Flameling 0x13";
const NFT_URL="https://opensea.io/assets/ethereum/0x49902747796c2abcc5ea640648551ddbc2c50ba2/13";
const CONTRACT="0x2aC895fEba458B42884DCbCB47D57e44c3a303c8";
const TICKER="0x13";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar contract={CONTRACT} ticker={TICKER}></Navbar>
      <Introduction name={NFT_NAME} nfturl={NFT_NAME}></Introduction>
      <Footer></Footer>
    </main>
  );
}
