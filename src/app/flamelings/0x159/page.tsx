"use client";
import React from "react";
import styles from "./page.module.css";
import type {Metadata} from "next";

import Footer from "@/components/flamelings/footer/footer";
import Navbar from "@/components/flamelings/navbar/navbar";
import FlamelingIntroduction from "@/components/flamelings/introduction/introduction";

const NFT_ID = "159";
const NFT_URL = "https://opensea.io/assets/ethereum/0x49902747796c2abcc5ea640648551ddbc2c50ba2/159";
const IMAGE_URL = "/flamelings/0x159.gif";
const CONTRACT = "0x7424e6d7288aff9a99c58560b64bab0ac2730027";
const TICKER = "0X159";
const SCAN_LINK = "https://bscscan.com/token/0x7424e6d7288aff9a99c58560b64bab0ac2730027#code";
const CHART_LINK = "https://www.dextools.io/app/en/bnb/pair-explorer/0x12983b8278a58b77fcb21ac4dc672aa333da3adc?t=1706891959813";
const LOCK_LINK = "https://app.uncx.network/amm/pancake-v2/pair/0x12983b8278a58b77fcb21ac4dc672aa333da3adc";
const TG_LINK = "https://t.me/FLAMELING0X159";
const X_LINK = "https://twitter.com/Stinger68K";
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
