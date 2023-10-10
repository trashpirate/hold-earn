"use client";
import Image from "next/image";
import styles from "./page.module.css";
import CountdownTimer from "@/components/countdown";
import CopyToClipboard from "@/components/copyToClipboard";
import Link from "next/link";
import TokenInfo from "@/components/tokenInfo";
import ReflectionChecker from "@/components/reflectionChecker";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>BUY, HOLD, EARN</h1>
        <div className={styles.description}></div>

        <div className={styles.center}>
          <Image
            src="/logo_hero.jpg"
            width={321}
            height={560}
            alt="Plot NFTs"
            style={{
              height: "300px",
              width: "auto",
              margin: "10px auto auto auto",
              borderRadius: "10px",
            }}
            priority
          />
        </div>

        <div className={styles.buttons}>
          <Link href="https://t.me/buyholdearn">
            <button>TELEGRAM</button>
          </Link>
          <Link href="https://twitter.com/buyholdearn">
            <button>X</button>
          </Link>

          <Link href="https://opensea.io/collection/tgplots">
            <button>AIRDROP</button>
          </Link>
        </div>
        <div className={styles.countdown}>
          <h3>TOKEN LAUCH: 10/10/2023 9pm CST</h3>
          <CountdownTimer></CountdownTimer>
        </div>

        <div>
          <CopyToClipboard
            text="CA: 0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E"
            copyText="0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E"
          />
        </div>

        <div className={styles.tokenomics}>
          <h3>TOKENOMICS: 1B SUPPLY. 2% REFLECTION TAX TO ALL HOLDERS. 50% BURNED.</h3>
        </div>
        <div>
          <TokenInfo></TokenInfo>
        </div>
        <div>
          <ReflectionChecker></ReflectionChecker>
        </div>
      </div>
    </main>
  );
}
