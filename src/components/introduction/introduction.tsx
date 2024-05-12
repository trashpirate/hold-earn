import React from 'react';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import ChartButton from '../buttons/chartButton';
import CopyToClipboard from '../copyToClipboard';
import CustomButton from '../buttons/customButton';
import PopUp from './popup';

type Props = {};


export default function Introduction({ }: Props) {

  return (
    <section id="introduction" className='px-7 my-32 scroll-m-36'>
      <div className='flex justify-center w-full sm:hidden'>
        <Link href="/partnership" className=' bg-primary text-black uppercase font-bold rounded-xl py-2 px-4 leading-6 mx-auto duration-500 hover:scale-110 transform hover:bg-primary/80'>Partner with us!</Link>

      </div>

      <div className=" sm:bg-center h-auto w-full grid lg:grid-cols-2 items-center max-w-7xl mx-auto border border-primary mt-4 rounded-2xl relative justify-between">
        <Link href="/partnership" className='hidden sm:block bg-primary text-black top-8 absolute right-8 uppercase font-bold rounded-xl py-2 px-4 leading-6  duration-500 hover:scale-110 transform hover:bg-primary/80'>Partner with us!</Link>
        <div className='my-8 lg:my-16 mx-4 sm:mx-8 xl:ml-16 col-start-1 row-start-1 z-10 sm:max-w-2xl'>
          <div className='my-4 flex gap-4 w-full pl-1'>
            <SocialIcon network="telegram" url="https://t.me/buyholdearn" bgColor="#FF6B10aa" style={{ height: 25, width: 25 }} label="Telegram" />
            <SocialIcon network="x" url="https://twitter.com/buyholdearn" bgColor="#FF6B10aa" style={{ height: 25, width: 25 }} label="X" />
            <SocialIcon network="linkedin" url="https://www.linkedin.com/company/earnecosystem" bgColor="#FF6B10aa" style={{ height: 25, width: 25 }} label="LinkedIn" />
            <Link href="https://etherscan.io/address/0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E#code">
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

            <h1 className='text-4xl font-bold'>BUY, HOLD, EARN</h1>
            <h2 className='text-2xl leading-10'>The True and Best Reflection Token</h2>
            <p className='leading-7 mt-4 text-md'>HOLD (EARN) is a symbol of resilience, a tribute to those who have remained
              steadfast during a prolonged crypto bear market. EARN is not just a token; it&apos;s a
              testament to the strength of the crypto community. EARN is dedicated to everyone who
              has kept the flame of hope burning in the crypto world. With a total supply of 1 billion
              tokens, EARN&apos;s journey begins with an initial burn of 500 million tokens, making it
              inherently deflationary.
            </p>

            <div className='mt-4'>
              <CopyToClipboard
                text="ETH-CA: 0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E"
                copyText="0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E"
              />
              <CopyToClipboard
                text="SOL-CA: 8CuPzHKuZQUyYbear8fi3u6iuTY652WVZT2cHZ2yeNbE"
                copyText="8CuPzHKuZQUyYbear8fi3u6iuTY652WVZT2cHZ2yeNbE"
              />
              <CopyToClipboard
                text="BNB-CA: 0x2ac895feba458b42884dcbcb47d57e44c3a303c8"
                copyText="0x2ac895feba458b42884dcbcb47d57e44c3a303c8"
              />
              <CopyToClipboard
                text="BASE-CA: 0x803b629C339941e2b77D2dC499DAc9e1fD9eAC66"
                copyText="0x803b629C339941e2b77D2dC499DAc9e1fD9eAC66"
              />
              <CopyToClipboard
                text="AVAX-CA: 0x806cc7a21bd85e960857ac1e097802fabad6f594"
                copyText="0x806cc7a21bd85e960857ac1e097802fabad6f594"
              />
            </div>

            <div className='flex gap-5 flex-wrap pt-4'>
              <ChartButton url="https://www.dextools.io/app/en/ether/pair-explorer/0x32558f1214bd874c6cbc1ab545b28a18990ff7ee"></ChartButton>
              <CustomButton url="https://flames.buyholdearn.com/" name="Flames"></CustomButton>
              <CustomButton url="https://flamelings.buyholdearn.com/" name="Flamelings"></CustomButton>
              <CustomButton url="https://liquid.buyholdearn.com/" name="Liquid"></CustomButton>
            </div>

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
            style={{ width: "400px", height: "100%", bottom: "0", position: "absolute", inset: "0" }}
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
              style={{ width: "40%", height: "auto", margin: "" }}
              alt="flame"
            />
          </Link>


        </div>
      </div>
      <PopUp></PopUp>
    </section>

  );
}