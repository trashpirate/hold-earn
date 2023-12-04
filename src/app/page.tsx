"use client";
import Image from "next/image";
import styles from "./page.module.css";
import CountdownTimer from "../components/countdown";
import CopyToClipboard from "../components/copyToClipboard";
import Link from "next/link";
import TokenInfo from "../components/__@tokenInfo";
import ReflectionChecker from "../components/reflectionChecker";
import Fooz from "../components/fooz";
import Navbar from "@/components/navbar/navbar";
import Introduction from "@/components/introduction/introduction";
import Tokenomics from "@/components/tokenomics/tokenomics";
import Buy from "@/components/buy/buy";
import Products from "@/components/products/products";
import Partners from "@/components/partners/partners";
import Whitepaper from "@/components/whitepaper/whitepaper";
import Footer from "@/components/footer/footer";


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <Introduction></Introduction>
      <Tokenomics></Tokenomics>
      <Buy></Buy>
      <Products></Products>
      <Partners></Partners>
      <Footer></Footer>
    </main>
  );
}
