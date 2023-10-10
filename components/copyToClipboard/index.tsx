"use client";
import styles from "./copytoclipboard.module.css";
import { BiCopy } from "react-icons/bi";

export default function CopyToClipboard(props: { text: string; copyText: string }) {
  const copylink = async (e: any) => {
    try {
      navigator.clipboard.writeText(props.copyText);
      console.log("copied: " + props.copyText);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.container}>
      <h3>{props.text}</h3>
      <div onClick={copylink} className={styles.copy}>
        <BiCopy />
      </div>
    </div>
  );
}
