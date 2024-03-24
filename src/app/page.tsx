"use client";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import Introduction from "@/components/introduction/introduction";
import Tokenomics from "@/components/tokenomics/tokenomics";
import Buy from "@/components/buy/buy";
import Products from "@/components/products/products";
import Partners from "@/components/partners/partners";
import Footer from "@/components/footer/footer";
import Exchanges from "@/components/exchanges/exchanges";
import Partnership from "@/components/partnership/partnership";


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <Introduction></Introduction>
      <Partnership></Partnership>
      <Tokenomics></Tokenomics>
      <Buy></Buy>
      <Products></Products>
      {/* <NFTLoans></NFTLoans> */}
      <Exchanges></Exchanges>
      <Partners></Partners>
      <Footer></Footer>
    </main>
  );
}
