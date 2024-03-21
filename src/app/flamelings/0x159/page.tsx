"use client";
import React from "react";
import styles from "./page.module.css";
import Footer from "@/components/flamelings/footer/footer";
import Navbar from "@/components/flamelings/navbar/navbar";
import FlamelingIntroduction from "@/components/flamelings/introduction/introduction";
import { flamelingTokens } from "@/assets/flamelingTokens";

export default function Home() {
  const tokenData = flamelingTokens.get("0x159");
  return (
    <section className={styles.main}>
      <Navbar metadata={tokenData!}></Navbar>
      <FlamelingIntroduction metadata={tokenData!}></FlamelingIntroduction>
      <Footer metadata={tokenData!}></Footer>
    </section>
  );
}