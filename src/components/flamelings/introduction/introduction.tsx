import React from 'react';
import Image from 'next/image';
import {SocialIcon} from 'react-social-icons';
import Link from 'next/link';
import ChartButton from '../../buttons/chartButton';
import CopyToClipboard from '../../copyToClipboard';
import NftButton from '../../buttons/nftButton';

type Props = {
  id: string;
  holderPercentage: string;
  contract: string;
  nftUrl: string;
  imageUrl: string;
  scanLink: string;
  chartLink: string;
  lockLink: string;
  tgLink: string;
  xLink: string;
};

export default function FlamlingIntroduction({id, holderPercentage, contract, nftUrl, imageUrl, scanLink, chartLink, lockLink, tgLink, xLink}: Props) {

  return (
    <section className='px-7 my-8 scroll-m-24'>
      <div className=" sm:bg-center h-auto w-full flex flex-col-reverse md:grid md:grid-rows-1 md:grid-cols-2 items-center max-w-7xl mx-auto border border-primary my-24 rounded-2xl relative justify-between">
        <div className='my-8 md:my-16 mx-4 sm:mx-8 xl:ml-16 col-start-1 row-start-1 z-10 sm:max-w-2xl'>
          <div className='my-4 flex gap-4 w-full pl-1'>
            <SocialIcon network="telegram" url={tgLink} bgColor="#FF6B10aa" style={{height: 25, width: 25}} label="Telegram" />
            <SocialIcon network="x" url={xLink} bgColor="#FF6B10aa" style={{height: 25, width: 25}} label="X" />
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

            <h1 className='text-4xl font-bold mb-2'>{`Flameling Ox${ id }`}</h1>
            <h2 className='text-2xl leading-10'>{`A Flameling Dividend Token`}</h2>
            <p className='leading-7 mt-4 text-md'>
              Flameling Ox{id} is a BEP-20 dividend token associated with the <a className="text-primary hover:opacity-100 opacity-60 hover:underline underline-offset-2 font-medium" href={nftUrl}>FLAMELING NFT #{id}</a>. The dividends are collected by a 2% transaction tax and redistributed to holders in $EARN. An additional 2% tax is collected for initial launch costs (development, listing, initial liquidity, and operations). The total supply is 1 Billion tokens while {holderPercentage}% of the supply is airdropped to the holder of <a className="text-primary hover:opacity-100 opacity-60 hover:underline underline-offset-2 font-medium" href={nftUrl}>FLAMELING NFT #{id}</a>. After launch, ownership is renounced and liquidty locked for 3 months on <a className="text-primary hover:opacity-100 opacity-60 hover:underline underline-offset-2 font-medium" href={lockLink}>UNCX</a>.
            </p>

            <div className='mt-4'>
              <CopyToClipboard
                text={`CA: ${ contract }`}
                copyText={contract}
              />
            </div>

            <div className='flex gap-5 flex-wrap'>
              <ChartButton url={chartLink}></ChartButton>
              <NftButton url="https://flame.buyholdearn.com/" name="Flamelings"></NftButton>
            </div>

          </div>

        </div>

        <div className='md:col-start-2 md:row-start-1 w-full flex rounded-2xl justify-end'>
          <Link href={nftUrl} className='w-full flex justify-center p-4 md:p-8'>
            <Image
              className='rounded-2xl'
              src={imageUrl}
              width={321}
              height={560}
              style={{width: "100%", height: "auto", margin: ""}}
              alt="flameling"
              priority
            />
          </Link>


        </div>
      </div>
    </section>

  );
}