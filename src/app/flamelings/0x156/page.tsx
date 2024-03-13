"use client";
import React from "react";
import styles from "./page.module.css";
import Footer from "@/components/flamelings/footer/footer";
import Navbar from "@/components/flamelings/navbar/navbar";
import FlamelingIntroduction from "@/components/flamelings/introduction/introduction";

const NFT_ID = "156";
const NFT_URL = "https://opensea.io/assets/ethereum/0x49902747796c2abcc5ea640648551ddbc2c50ba2/156";
const IMAGE_URL = "/flamelings/0x156.gif";
const CONTRACT = "0xe9782BaDC7640BFC2D1ED94346F89dF1617AB4c0";
const TICKER = "0X156";
const SCAN_LINK = "https://bscscan.com/token/0xe9782badc7640bfc2d1ed94346f89df1617ab4c0#code";
const CHART_LINK = "https://www.dextools.io/app/en/bnb/pair-explorer/0x990706345adef4368d3603bf1a5e471ffb400e4a?t=1709581183587";
const LOCK_LINK = "https://app.uncx.network/amm/pancake-v2/pair/0x990706345adef4368d3603bf1a5e471ffb400e4a";
const TG_LINK = "https://t.me/FLAMELING0X156";
const X_LINK = "https://twitter.com/0x156flameling";
const HOLDER_PERCENTAGE = "2";



export default function Home() {
  return (
    <section className={styles.main}>
      <Navbar contract={CONTRACT} ticker={TICKER}></Navbar>
      <FlamelingIntroduction id={NFT_ID} holderPercentage={HOLDER_PERCENTAGE} contract={CONTRACT} ticker={TICKER} nftUrl={NFT_URL} imageUrl={IMAGE_URL} scanLink={SCAN_LINK} chartLink={CHART_LINK} lockLink={LOCK_LINK} tgLink={TG_LINK} xLink={X_LINK}></FlamelingIntroduction>
      <Footer scanLink={SCAN_LINK} tgLink={TG_LINK} xLink={X_LINK}></Footer>
    </section>
  );
}
