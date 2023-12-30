import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

export default function Partners({}: Props) {
    return (
        <section className='my-36 px-7 flex justify-center scroll-m-36'>
            <div className='max-w-7xl w-full flex justify-center flex-col'>
                <div className='flex justify-center'>
                    <h1 className='text-4xl font-bold'>PARTNERS</h1>
                </div>
                <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-100 animate-pulse" />
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-16 my-16 align-middle justify-center'>
                    <Link className="m-auto" href="https://www.dextools.io/app/en/ether/pair-explorer/0x32558f1214bd874c6cbc1ab545b28a18990ff7ee">
                        <Image
                            className='h-auto w-36 justify-self-center my-auto'
                            src="/dextools.svg"
                            width={658}
                            height={658}
                            alt="dextools logo"

                        />
                    </Link>

                    <Link className="m-auto" href="https://www.coingecko.com/en/coins/hold-2">
                        <Image
                            className='h-auto w-36 justify-self-center my-auto'
                            src="/coingecko.svg"
                            width={1000}
                            height={500}
                            alt="coingecko logo"

                        />
                    </Link>
                    <Link className="m-auto" href="https://opensea.io/collection/flamelings">
                        <Image
                            className='h-auto w-36 justify-self-center my-auto'
                            src="/opensea.png"
                            width={500}
                            height={155}
                            alt="opensea logo"

                        />
                    </Link>
                    <Link className="m-auto" href="https://rarible.com/collection/0x12a961e8cc6c94ffd0ac08deb9cde798739cf775/items">
                        <Image
                            className='h-auto w-36 justify-self-center my-auto'
                            src="/rarible.png"
                            width={500}
                            height={155}
                            alt="rarible logo"

                        />
                    </Link>
                    <Link className="m-auto" href="https://flooz.xyz/trade/0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E?network=eth">
                        <Image
                            className='h-auto w-36 justify-self-center my-auto'
                            src="/flooz.svg"
                            width={658}
                            height={658}
                            alt="flooz logo"

                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}