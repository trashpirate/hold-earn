import React, {useCallback, useState} from 'react';
import Cropper from 'react-easy-crop';
import {Point, Area} from "react-easy-crop";
import HeroFlame from './heroFlame';
import Image from 'next/image';
import {SocialIcon} from 'react-social-icons';
import Link from 'next/link';
import ChartButton from '../buttons/chartButton';
import CopyToClipboard from '../copyToClipboard';
type Props = {};

export default function Introduction({}: Props) {

  return (
    <section id="introduction" className='px-7 mb-16'>
      <div className=" sm:bg-center h-auto w-full grid lg:grid-cols-2 items-center max-w-7xl mx-auto border border-primary mt-24 rounded-2xl relative justify-between">
        <div className='my-8 lg:my-16 mx-4 sm:mx-8 xl:ml-16 col-start-1 row-start-1 z-10 sm:max-w-2xl'>
          <div className='my-4 flex gap-4 w-full'>
            <SocialIcon network="telegram" url="https://t.me/buyholdearn" bgColor="#FF6B10aa" style={{height: 25, width: 25}} label="Telegram" />
            <SocialIcon network="x" url="https://twitter.com/buyholdearn" bgColor="#FF6B10aa" style={{height: 25, width: 25}} label="X" />
            <Link href="https://etherscan.io/address/0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E#code">
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

            <h1 className='text-4xl font-bold'>BUY, HOLD, EARN</h1>
            <h2 className='text-2xl leading-10'>The Best Reflection Token on Ethereum</h2>
            <p className='leading-7 mt-4 text-md'>EARN ($EARN) is a symbol of resilience, a tribute to those who have remained
              steadfast during a prolonged crypto bear market. EARN is not just a token; it's a
              testament to the strength of the crypto community. EARN is dedicated to everyone who
              has kept the flame of hope burning in the crypto world. With a total supply of 1 billion
              tokens, EARN's journey begins with an initial burn of 500 million tokens, making it
              inherently deflationary.
            </p>
            <CopyToClipboard
            text="CA: 0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E"
            copyText="0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E"
          />
            <ChartButton></ChartButton>
            
          </div>
          
        </div>
        <div>
          
        </div>
        {/* <div className='w-1/4 h-full bg-hero-pattern bg-auto sm:bg-auto bg-blend-multiply bg-[#000000aa] bg-origin-border bg-bottom'>
          Hello
        </div> */}
        <div className='col-start-1 row-start-1 z-0 overflow-hidden h-full w-full relative bottom-0 opacity-40 rounded-2xl lg:left-16'>
          <Image
            src="/smoke.gif"
            width={412}
            height={732}
            style={{width: "400px", height: "100%", bottom: "0", position: "absolute", inset: "0"}}
            alt="flame"
            className='object-cover'
          />
        </div>
        <div className='col-start-2 row-start-1 w-full hidden lg:flex rounded-2xl justify-end'>
          <Link href="https://app.buyholdearn.com/" className='w-full flex justify-center'>
            <Image
            src="/logo_hero.jpg"
            width={321}
                height={560}
            style={{width: "40%", height: "auto", margin: ""}}
              alt="flame"
          />
          </Link>
          
  
        </div>
      </div>

    </section>

  );
}