"use client";
import React from "react";
import styles from "./page.module.css";
import type { Metadata } from "next";

import Footer from "@/components/flamelings/footer/footer";
import Navbar from "@/components/flamelings/navbar/navbar";
import FlamelingIntroduction from "@/components/flamelings/introduction/introduction";

const NFT_ID = "222";
const NFT_URL = "https://opensea.io/assets/ethereum/0x49902747796c2abcc5ea640648551ddbc2c50ba2/222";
const IMAGE_URL = "/flamelings/0x222.gif";
const CONTRACT = "0x85063a8c52c81f8c270d10bc2056d5e703157de4";
const TICKER = "0X222";
const SCAN_LINK = "https://bscscan.com/token/0x85063a8c52c81f8c270d10bc2056d5e703157de4#code";
const CHART_LINK = "https://www.dextools.io/app/en/bnb/pair-explorer/0xa1728386594cbfaa9d0a4b533d50346fc98ae6a8";
const LOCK_LINK = "https://app.uncx.network/amm/pancake-v2/pair/0xa1728386594cbfaa9d0a4b533d50346fc98ae6a8";
const TG_LINK = "https://t.me/FLAMELING0X222";
const X_LINK = "https://twitter.com/Rugs0x222";
const HOLDER_PERCENTAGE = "4";

export default function Home() {
  return (
    <section className={styles.main}>
      <Navbar contract={CONTRACT} ticker={TICKER}></Navbar>
      <FlamelingIntroduction id={NFT_ID} holderPercentage={HOLDER_PERCENTAGE} contract={CONTRACT} ticker={TICKER} nftUrl={NFT_URL} imageUrl={IMAGE_URL} scanLink={SCAN_LINK} chartLink={CHART_LINK} lockLink={LOCK_LINK} tgLink={TG_LINK} xLink={X_LINK}></FlamelingIntroduction>
      <Footer scanLink={SCAN_LINK} tgLink={TG_LINK} xLink={X_LINK}></Footer>
    </section>
  );
}
