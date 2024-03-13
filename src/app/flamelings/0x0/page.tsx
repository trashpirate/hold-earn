"use client";
import React from "react";
import styles from "./page.module.css";
import Footer from "@/components/flamelings/footer/footer";
import Navbar from "@/components/flamelings/navbar/navbar";
import FlamelingIntroduction from "@/components/flamelings/introduction/introduction";

const NFT_ID = "0";
const NFT_URL = "https://opensea.io/assets/ethereum/0x49902747796c2abcc5ea640648551ddbc2c50ba2/0";
const IMAGE_URL = "/flamelings/0x0.gif";
const CONTRACT = "0x54330fb563baf4ddede51d0b8af6a5c1edf0395d";
const TICKER = "0X0";
const SCAN_LINK = "https://bscscan.com/token/0x54330fb563baf4ddede51d0b8af6a5c1edf0395d#code";
const CHART_LINK = "https://www.dextools.io/app/en/bnb/pair-explorer/0xab631ee05706e012daa9b5e382a6db526cccf297";
const LOCK_LINK = "#";
const TG_LINK = "https://t.me/FLAMELING0X0";
const X_LINK = "https://twitter.com/0x0flameling";
const HOLDER_PERCENTAGE = "1";



export default function Home() {
  return (
    <section className={styles.main}>
      <Navbar contract={CONTRACT} ticker={TICKER}></Navbar>
      <FlamelingIntroduction id={NFT_ID} holderPercentage={HOLDER_PERCENTAGE} contract={CONTRACT} ticker={TICKER} nftUrl={NFT_URL} imageUrl={IMAGE_URL} scanLink={SCAN_LINK} chartLink={CHART_LINK} lockLink={LOCK_LINK} tgLink={TG_LINK} xLink={X_LINK}></FlamelingIntroduction>
      <Footer scanLink={SCAN_LINK} tgLink={TG_LINK} xLink={X_LINK}></Footer>
    </section>
  );
}
