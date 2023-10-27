"use client";

import React, { useEffect, useState } from "react";
import { useContractRead, useNetwork } from "wagmi";

import Image from "next/image";
import CopyToClipboard from "../copyToClipboard";
import { nftABI } from "@/assets/nftABI";
import styles from "./nfts.module.module.css";
import { BiBorderRadius } from "react-icons/bi";

const NFT_CONTRACT = process.env.NEXT_PUBLIC_NFT_CONTRACT as `0x${string}`;

type Props = {};

export default function CollectionInfo({}: Props) {
  const [totalSupply, setTotalSupply] = useState<number | undefined>(undefined);

  // get chain
  const { chain } = useNetwork();

  // define token contract config
  const nftContract = {
    address: NFT_CONTRACT,
    abi: nftABI,
    chainId: chain?.id,
  };

  // read current limits
  const { data, isSuccess, isError, isLoading } = useContractRead({
    ...nftContract,
    functionName: "totalSupply",
    watch: true,
    cacheTime: 1000,
  });

  useEffect(() => {
    if (data != undefined) {
      setTotalSupply(Number(data));
    }
  }, [data]);

  function getTotalSupplyString() {
    let text: string = "---";
    if (isLoading) {
      text = "Loading...";
    } else if (isSuccess && totalSupply != undefined) {
      text = `${totalSupply}`;
    } else {
      text = "---";
    }
    return text;
  }

  function getNftsRemainingString() {
    let text: string = "---";
    if (isLoading) {
      text = "Loading...";
    } else if (isSuccess && totalSupply != undefined) {
      text = `${1000 - totalSupply}`;
    } else {
      text = "---";
    }
    return text;
  }

  return (
    <div className="mx-auto w-full pb-8 md:mr-0">
      <div className="mx-auto max-w-sm rounded-md bg-black p-8 ">
        <h2 className="mb-4 border-b-2 border-yellow-500 pb-2 text-xl">FLAMES COLLECTION</h2>
        <div className={styles.description}>
          <Image
            className="mb-4 h-20 w-full overflow-hidden object-cover sm:h-28"
            src={"/nftAnimation.gif"}
            width={300}
            height={300}
            alt="Flame NFTs"
            style={{
              borderRadius: "10px",
            }}
          />
          <p>
            An NFT collection dedicated to everyone who kept their flame burning during a long
            crypto bear market! Your FLAME doubles as your membership card, and grants access to
            members-only benefits.
          </p>
          <div className={styles.container_traits}>
            <h3>Available Traits:</h3>
            <div className={styles.traits}>
              <p>WHITE</p>
              <p>795</p>
            </div>
            <div className={styles.traits}>
              <p>BLUE</p>
              <p>100</p>
            </div>
            <div className={styles.traits}>
              <p>YELLOW</p>
              <p>80</p>
            </div>
            <div className={styles.traits}>
              <p>RED</p>
              <p>20</p>
            </div>
            <div className={styles.traits}>
              <p>MYSTERY</p>
              <p>5</p>
            </div>
          </div>
        </div>

        <div className={styles.numbers}>
          <p>Contract:</p>
          <CopyToClipboard text={NFT_CONTRACT} copyText={NFT_CONTRACT} />
        </div>
        <div className={styles.container_stats}>
          <h3>NFTs minted: </h3>
          <h3>{getTotalSupplyString()}</h3>
        </div>
        <div className={styles.container_stats}>
          <h3>NFTs remaining: </h3>
          <h3>{getNftsRemainingString()}</h3>
        </div>
      </div>
    </div>
  );
}
