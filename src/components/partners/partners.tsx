import React from 'react';
import Image from 'next/image';

type Props = {};

export default function Partners({}: Props) {
    return (
        <section className='my-36 px-7 flex justify-center scroll-m-36'>
            <div className='max-w-7xl w-full flex justify-center flex-col'>
                <div className='flex justify-center'>
                    <h1 className='text-4xl font-bold'>PARTNERS</h1>
                </div>
                <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-100 animate-pulse" />
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-16 my-16 align-middle'>
                    <Image
                        className='h-auto w-36 justify-self-center my-auto'
                        src="/dextools.svg"
                        width={658}
                        height={658}
                        alt="dextools logo"

                    />
                    <Image
                        className='h-auto w-36 justify-self-center my-auto'
                        src="/uniswap.png"
                        width={1280}
                        height={320}
                        alt="coingecko logo"

                    />
                    <Image
                        className='h-auto w-36 justify-self-center my-auto'
                        src="/coingecko.svg"
                        width={1000}
                        height={500}
                        alt="coingecko logo"

                    />
                    <Image
                        className='h-auto w-36 justify-self-center my-auto'
                        src="/rarible.png"
                        width={500}
                        height={155}
                        alt="rarible logo"

                    />
                    <Image
                        className='h-auto w-36 justify-self-center my-auto'
                        src="/flooz.svg"
                        width={658}
                        height={658}
                        alt="flooz logo"

                    />
                </div>
            </div>
        </section>
    );
}