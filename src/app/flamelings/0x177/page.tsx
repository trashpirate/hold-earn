"use client";
import React from "react";
import styles from "./page.module.css";
import Footer from "@/components/flamelings/footer/footer";
import Navbar from "@/components/flamelings/navbar/navbar";
import FlamelingIntroduction from "@/components/flamelings/introduction/introduction";

const NFT_ID = "177";
const NFT_URL = "https://opensea.io/assets/ethereum/0x49902747796c2abcc5ea640648551ddbc2c50ba2/177";
const IMAGE_URL = "/flamelings/0x177.gif";
const CONTRACT = "0xb0bcb4ede80978f12aa467f7344b9bdbcd2497f3";
const TICKER = "0X177";
const SCAN_LINK = "https://bscscan.com/token/0xb0bcb4ede80978f12aa467f7344b9bdbcd2497f3#code";
const CHART_LINK = "https://www.dextools.io/app/en/bnb/pair-explorer/0x0804f5701f6b33e0d0d6acabbee2f129ff5b4d95";
const LOCK_LINK = "https://app.uncx.network/amm/pancake-v2/pair/0x0804f5701f6b33e0d0d6acabbee2f129ff5b4d95";
const TG_LINK = "https://t.me/FLAMELING0X177";
const X_LINK = "https://twitter.com/flameling0x177";
const HOLDER_PERCENTAGE = "3";

export default function Home() {
  return (
    <section className={styles.main}>
      <Navbar contract={CONTRACT} ticker={TICKER}></Navbar>
      <FlamelingIntroduction id={NFT_ID} holderPercentage={HOLDER_PERCENTAGE} contract={CONTRACT} ticker={TICKER} nftUrl={NFT_URL} imageUrl={IMAGE_URL} scanLink={SCAN_LINK} chartLink={CHART_LINK} lockLink={LOCK_LINK} tgLink={TG_LINK} xLink={X_LINK}></FlamelingIntroduction>
      <Footer scanLink={SCAN_LINK} tgLink={TG_LINK} xLink={X_LINK}></Footer>
    </section>
  );
}
