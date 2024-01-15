"use client";
import React from "react";
import styles from "./page.module.css";
import type { Metadata } from "next";

import Footer from "@/components/flamelings/footer/footer";
import Navbar from "@/components/flamelings/navbar/navbar";
import FlamelingIntroduction from "@/components/flamelings/introduction/introduction";

const NFT_ID = "21";
const NFT_URL = "https://opensea.io/assets/ethereum/0x49902747796c2abcc5ea640648551ddbc2c50ba2/21";
const IMAGE_URL = "/flamelings/0x21.gif"
const CONTRACT = "0x96261e8Ed04FfDB190125FC48649eF106dD57886";
const TICKER = "0x21";
const SCAN_LINK = "#"
const CHART_LINK = "#"
const TG_LINK = "https://t.me/buyholdearn"
const X_LINK = "https://twitter.com/buyholdearn"



export default function Home() {
  return (
    <section className={styles.main}>
      <Navbar contract={CONTRACT} ticker={TICKER}></Navbar>
      <FlamelingIntroduction id={NFT_ID} contract={CONTRACT} nftUrl={NFT_URL} imageUrl={IMAGE_URL} scanLink={SCAN_LINK} chartLink={CHART_LINK} tgLink={TG_LINK} xLink={X_LINK}></FlamelingIntroduction>
      <Footer scanLink={SCAN_LINK} tgLink={TG_LINK} xLink={X_LINK}></Footer>
    </section>
  );
}
