"use client";
import React from "react";
import styles from "./page.module.css";
import type {Metadata} from "next";

import FlamelingTable from "@/components/flamelingTable/flamelingTable";
import {flamelingTokens, FlamelingToken} from "@/components/flamelingTable/flamelingTokens";

export default function Home() {

  let tokens: FlamelingToken[] = flamelingTokens;

  return (
    <section className={styles.main}>
      {/* <Navbar contract={CONTRACT} ticker={TICKER}></Navbar> */}
      <FlamelingTable tokens={tokens}></FlamelingTable>
    </section>
  );
}
