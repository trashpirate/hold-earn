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


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <Introduction></Introduction>
      <Tokenomics></Tokenomics>
      <Buy></Buy>
      <Products></Products>
      <Exchanges></Exchanges>
      <Partners></Partners>
      <Footer></Footer>
    </main>
  );
}
