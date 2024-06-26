import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

export default function Exchanges({ }: Props) {
    return (
        <section id="exchanges" className='mt-36 px-7 flex justify-center scroll-m-36'>
            <div className='max-w-7xl w-full flex justify-center flex-col'>
                <div className='flex justify-center'>
                    <h1 className='text-4xl font-bold'>EXCHANGES</h1>
                </div>
                <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-100 animate-pulse" />
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 my-16 justify-between align-top'>

                    <Link className="mt-0 mb-auto mx-auto min-w-32 max-w-sm" href="https://app.uniswap.org/swap?outputCurrency=0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E">
                        <Image
                            className='object-cover rounded-lg'
                            src="/uniswap_large.png"
                            width={1280}
                            height={320}
                            alt="uniswap logo"

                        />

                    </Link>
                    <Link className="mt-0 mb-auto mx-auto min-w-32 max-w-sm" href="https://pancakeswap.finance/swap?chain=bsc&outputCurrency=0x2aC895fEba458B42884DCbCB47D57e44c3a303c8">
                        <Image
                            className='object-cover rounded-lg'
                            src="/pancakeswap.png"
                            width={500}
                            height={155}
                            alt="pancakeswap logo"

                        />
                        {/*  <div className='text-center text-slate-400 mt-1 uppercase'>Listing on Jan 5th!</div> */}
                    </Link>
                    <Link className="mt-0 mb-auto mx-auto min-w-32 max-w-sm" href="https://www.sushi.com/swap?chainId=8453&token0=NATIVE&token1=0x803b629C339941e2b77D2dC499DAc9e1fD9eAC66">
                        <Image
                            className='object-cover rounded-lg'
                            src="/sushiswap.jpg"
                            width={500}
                            height={155}
                            alt="sushiswap logo"

                        />
                        {/*  <div className='text-center text-slate-400 mt-1 uppercase'>Listing on Jan 5th!</div> */}
                    </Link>
                    <Link className="mt-0 mb-auto mx-auto min-w-32 max-w-sm" href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=8CuPzHKuZQUyYbear8fi3u6iuTY652WVZT2cHZ2yeNbE&fixed=in">
                        <Image
                            className='object-cover rounded-lg'
                            src="/raydium.png"
                            width={1000}
                            height={500}
                            alt="raydium logo"

                        />
                    </Link>

                    <Link className="mt-0 mb-auto mx-auto min-w-32 max-w-sm" href="https://traderjoexyz.com/avalanche/trade">
                        <Image
                            className='object-cover rounded-lg'
                            src="/trader_joe.png"
                            width={500}
                            height={155}
                            alt="trader joe logo"

                        />
                    </Link>

                </div>
            </div>
        </section>
    );
}