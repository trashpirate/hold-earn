"use client";
import React from "react";
import styles from "./page.module.css";
import type { Metadata } from "next";

import FlamelingTable from "@/components/flamelings/flamelingTable/flamelingTable";
import { flamelingTokens, FlamelingToken } from "@/assets/flamelingTokens";
import Navbar from "@/components/navbar/navbar";

export default function Home() {

    let tokens: FlamelingToken[] = flamelingTokens;

    return (
        <section className="justify-center h-screen bg-black pt-28 sm:pt-36">
            <Navbar></Navbar>
            <FlamelingTable tokens={tokens}></FlamelingTable>
        </section>
    );
}