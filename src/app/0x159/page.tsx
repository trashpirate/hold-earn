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
const CONTRACT = "0x5D18083b1129d41A7f471B1088556e3657877deC";
const TICKER = "0X159";
const SCAN_LINK = "https://bscscan.com/token/0x5D18083b1129d41A7f471B1088556e3657877deC#code";
const CHART_LINK = "";
const LOCK_LINK = "";
const TG_LINK = "https://t.me/FLAMELING0X159";
const X_LINK = "https://twitter.com/Stinger68K";
const HOLDER_PERCENTAGE = "1";



export default function Home() {
  return (
    <section className={styles.main}>
      <Navbar contract={CONTRACT} ticker={TICKER}></Navbar>
      <FlamelingIntroduction id={NFT_ID} holderPercentage={HOLDER_PERCENTAGE} contract={CONTRACT} nftUrl={NFT_URL} imageUrl={IMAGE_URL} scanLink={SCAN_LINK} chartLink={CHART_LINK} lockLink={LOCK_LINK} tgLink={TG_LINK} xLink={X_LINK}></FlamelingIntroduction>
      <Footer scanLink={SCAN_LINK} tgLink={TG_LINK} xLink={X_LINK}></Footer>
    </section>
  );
}
