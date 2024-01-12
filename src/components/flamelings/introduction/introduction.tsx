import React from 'react';
import Image from 'next/image';
import {SocialIcon} from 'react-social-icons';
import Link from 'next/link';
import ChartButton from '../../buttons/chartButton';
import CopyToClipboard from '../../copyToClipboard';
import NftButton from '../../buttons/nftButton';

type Props = {
  name: string;
  contract: string;
  nftUrl: string;
  scanLink: string;
  chartLink: string;
};


export default function Introduction({name, contract, nftUrl, scanLink, chartLink}: Props) {

  return (
    <section className='px-7 my-8 scroll-m-36'>
      <div className=" sm:bg-center h-auto w-full grid lg:grid-cols-2 items-center max-w-7xl mx-auto border border-primary my-24 rounded-2xl relative justify-between">
        <div className='my-8 lg:my-16 mx-4 sm:mx-8 xl:ml-16 col-start-1 row-start-1 z-10 sm:max-w-2xl'>
          <div className='my-4 flex gap-4 w-full pl-1'>
            <SocialIcon network="telegram" url="https://t.me/buyholdearn" bgColor="#FF6B10aa" style={{height: 25, width: 25}} label="Telegram" />
            <SocialIcon network="x" url="https://twitter.com/buyholdearn" bgColor="#FF6B10aa" style={{height: 25, width: 25}} label="X" />
            <Link href={scanLink}>
              <Image
                src="/etherscan.png"
                width={122}
                height={122}
                style={{width: "25px", height: "auto", opacity: "0.8"}}
                alt="etherscan"
              />
            </Link>

          </div>

          <div className='w-full h-auto p-1'>

            <h1 className='text-4xl font-bold'>{name}</h1>
            <h2 className='text-2xl leading-10'>{`A Flameling Dividend Token`}</h2>
            <p className='leading-7 mt-4 text-md'>
              {`Flameling ($0x13) is a BEP-20 dividend token associated with the FLAMELING NFT #13. The dividends are collected by a 2% transaction tax and redistributed to holders in $EARN. An additional tax will be collected for initial launch costs (development, listing, and initial liquidity). The total supply is 1 Billion tokens while 1% of the supply is airdropped to the holder of FAMELING NFT #13.`}
            </p>

            <div className='mt-4'>
              <CopyToClipboard
                text={`CA: ${contract}`}
                copyText={contract}
              />
            </div>

            <div className='flex gap-5 flex-wrap'>
              <ChartButton url={chartLink}></ChartButton>
              <NftButton url="https://flame.buyholdearn.com/" name="Flamelings"></NftButton>
            </div>

          </div>

        </div>
        <div>

        </div>
        {/* <div className='w-1/4 h-full bg-hero-pattern bg-auto sm:bg-auto bg-blend-multiply bg-[#000000aa] bg-origin-border bg-bottom'>
          Hello
        </div> */}
        <div className='col-start-1 row-start-1 z-0 overflow-hidden h-full w-full relative bottom-0 opacity-40 rounded-2xl lg:left-16'>
          {/* <Image
            src="/smoke.gif"
            width={412}
            height={732}
            style={{width: "400px", height: "100%", bottom: "0", position: "absolute", inset: "0"}}
            alt="flame"
            className='object-cover'
          /> */}
        </div>
        <div className='col-start-2 row-start-1 w-full hidden lg:flex rounded-2xl justify-end'>
          <Link href={nftUrl} className='w-full flex justify-center'>
            <Image
            className='rounded-2xl m-4'
              src="/flameling_moving.gif"
              width={321}
              height={560}
              style={{width: "100%", height: "auto", margin: ""}}
              alt="flame"
            />
          </Link>


        </div>
      </div>
    </section>

  );
}