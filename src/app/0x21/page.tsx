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
const CONTRACT = "0x3984e3807BC8ac705C9ED612Ad4BB7A7c4028f01";
const TICKER = "0x21";
const SCAN_LINK = "https://bscscan.com/token/0x3984e3807BC8ac705C9ED612Ad4BB7A7c4028f01"
const CHART_LINK = "https://www.dextools.io/app/en/bnb/pair-explorer/0x88386f86ee2a2248a7803029226818faf276e0bb"
const TG_LINK = "https://t.me/FLAMELING0X21"
const X_LINK = "https://twitter.com/0X21Flameling"
const HOLDER_PERCENTAGE = "3"

export default function Home() {
  return (
    <section className={styles.main}>
      <Navbar contract={CONTRACT} ticker={TICKER}></Navbar>
      <FlamelingIntroduction id={NFT_ID} holderPercentage={HOLDER_PERCENTAGE} contract={CONTRACT} nftUrl={NFT_URL} imageUrl={IMAGE_URL} scanLink={SCAN_LINK} chartLink={CHART_LINK} tgLink={TG_LINK} xLink={X_LINK}></FlamelingIntroduction>
      <Footer scanLink={SCAN_LINK} tgLink={TG_LINK} xLink={X_LINK}></Footer>
    </section>
  );
}
