import React from 'react';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import ChartButton from '../../buttons/chartButton';
import CopyToClipboard from '../../copyToClipboard';
import CustomButton from '@/components/buttons/customButton';
import { FlamelingToken } from "@/assets/flamelingTokens";

type Props = {
  metadata: FlamelingToken;
}

export default function FlamlingIntroduction({ metadata }: Props) {

  return (
    <section className='px-7 my-20 scroll-m-36'>
      <div className=" sm:bg-center h-auto w-full flex flex-col-reverse md:grid md:grid-rows-1 md:grid-cols-2 items-center max-w-7xl mx-auto border border-primary my-24 rounded-2xl relative justify-between">
        <div className='my-8 md:my-16 mx-4 sm:mx-8 xl:ml-16 col-start-1 row-start-1 z-10 sm:max-w-2xl'>
          <div className='my-4 flex gap-4 w-full pl-1'>
            <SocialIcon network="telegram" url={metadata.tgLink} bgColor="#FF6B10aa" style={{ height: 25, width: 25 }} label="Telegram" />
            <SocialIcon network="x" url={metadata.xLink} bgColor="#FF6B10aa" style={{ height: 25, width: 25 }} label="X" />
            <Link href={metadata.scanLink}>
              <Image
                src="/etherscan.png"
                width={122}
                height={122}
                style={{ width: "25px", height: "auto", opacity: "0.8" }}
                alt="etherscan"
              />
            </Link>

          </div>

          <div className='w-full h-auto p-1'>

            <h1 className='text-4xl font-bold mb-2'>{`FLAMELING ${metadata.ticker}`}</h1>
            <h2 className='text-2xl leading-10'>{`A Flameling Dividend Token`}</h2>
            <p className='leading-7 mt-4 text-md'>
              FLAMELING {metadata.ticker} is a BEP-20 dividend token associated with the <a className="text-primary hover:opacity-100 opacity-60 hover:underline underline-offset-2 font-medium" href={metadata.nftUrl}>FLAMELING NFT #{metadata.id}</a>. The dividends are collected by a 2% transaction tax and redistributed to holders in $EARN. An additional 2% tax is collected for initial launch costs (development, listing, initial liquidity, and operations). The total supply is 1 Billion tokens while {metadata.holderPercentage}% of the supply is airdropped to the holder of <a className="text-primary hover:opacity-100 opacity-60 hover:underline underline-offset-2 font-medium" href={metadata.nftUrl}>FLAMELING NFT #{metadata.id}</a>. After launch, ownership is renounced and liquidity locked for 3 months on <a className="text-primary hover:opacity-100 opacity-60 hover:underline underline-offset-2 font-medium" href={metadata.lockLink}>UNCX</a>.
            </p>

            <div className='mt-4'>
              <CopyToClipboard
                text={`CA: ${metadata.contract}`}
                copyText={metadata.contract}
              />
            </div>

            <div className='flex gap-5 flex-wrap pt-4'>
              <ChartButton url={metadata.chartLink}></ChartButton>
              <CustomButton url="https://flame.buyholdearn.com/" name="Flamelings" ></CustomButton>
              {metadata.customButtons !== undefined ?
                metadata.customButtons.map((cbutton) => {
                  return <CustomButton key={cbutton.id} url={cbutton.link} name={cbutton.name} ></CustomButton>
                }) : <div></div>}
            </div>

          </div>

        </div>

        <div className='md:col-start-2 md:row-start-1 w-full flex rounded-2xl justify-end'>
          <Link href={metadata.nftUrl} className='w-full flex justify-center p-4 md:p-8'>
            <Image
              className='rounded-2xl'
              src={metadata.imageUrl}
              width={1024}
              height={1024}
              style={{ width: "100%", height: "auto", margin: "" }}
              alt="flameling"
              priority
            />
          </Link>


        </div>
      </div>
    </section>

  );
}