"use client";
import Image from "next/image";
import styles from "./page.module.css";
import CountdownTimer from "@/components/countdown";
import CopyToClipboard from "@/components/copyToClipboard";
import Link from "next/link";
import TokenInfo from "@/components/tokenInfo";
import ReflectionChecker from "@/components/reflectionChecker";
import Fooz from "@/components/fooz";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>BUY, HOLD, EARN</h1>
        <div className={styles.description}></div>
        <div className={styles.home}>
          <div className={styles.left}>
            <div className={styles.center}>
              <Image
                src="/logo_hero.jpg"
                width={321}
                height={560}
                alt="Buy Hold Earn Burn"
                style={{
                  height: "300px",
                  width: "auto",
                  // margin: "10px auto 0PX auto",
                  borderRadius: "10px",
                }}
                priority
              />
              <div>
                <TokenInfo></TokenInfo>
              </div>
            </div>
            <div className={styles.reflections}>
              <div>
                <ReflectionChecker></ReflectionChecker>
              </div>
            </div>

            <div className={styles.buttons}>
              <Link href="/EARN_WHITE_PAPER.pdf">
                <button>WHITE PAPER</button>
              </Link>
              <Link href="https://t.me/buyholdearn">
                <button>TELEGRAM</button>
              </Link>
              <Link href="https://twitter.com/buyholdearn">
                <button>X</button>
              </Link>

              <Link href="https://www.dextools.io/app/en/ether/pair-explorer/0x32558f1214bd874c6cbc1ab545b28a18990ff7ee">
                <button>DEXTOOLS</button>
              </Link>
              <Link href="https://app.buyholdearn.com/">
                <button>MINT</button>
              </Link>
            </div>
          </div>
          <div className={styles.right}>
            <Fooz></Fooz>
          </div>

          {/* <div className={styles.countdown}>
          <h3>TOKEN LAUNCH: 10/10/2023 9pm CST</h3>
          <CountdownTimer></CountdownTimer>
        </div> */}
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
      </div>
    </main>
  );
}
