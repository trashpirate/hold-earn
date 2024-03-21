"use client";
import React from "react";
import FlamelingTable from "@/components/flamelings/flamelingTable/flamelingTable";
import Navbar from "@/components/navbar/navbar";

export default function Home() {

    return (
        <section className="justify-center h-screen bg-black pt-28 sm:pt-36">
            <Navbar></Navbar>
            <FlamelingTable></FlamelingTable>
        </section>
    );
}