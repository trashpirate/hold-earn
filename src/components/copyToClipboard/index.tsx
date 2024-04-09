"use client";
import styles from "./copytoclipboard.module.css";
import { BiCopy } from "react-icons/bi";
import { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function CopyToClipboard(props: { text: string; copyText: string }) {
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      setCopied(false);
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [copied]); // Empty dependency array ensures the effect runs only once

  const copylink = async (e: any) => {
    try {
      navigator.clipboard.writeText(props.copyText);
      setCopied(true);
      console.log("copied: " + props.copyText);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.container}>
      <h3 onClick={copylink} >{props.text}</h3>
      <div onClick={copylink} className={styles.copy}>
        <div className={styles.copy_icon}>
          {copied ? <CheckIcon /> : <BiCopy />}
          {/* <BiCopy /> */}
        </div>

        {/* {copied && <div className={styles.notification}><CheckIcon /></div>} */}
      </div>
    </div>
  );
}
