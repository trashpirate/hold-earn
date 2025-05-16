import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
type Props = {};

export default function Products({ }: Props) {
    return (
        <section id="products" className='mt-36 px-7 flex justify-center scroll-m-36'>
            <div className='max-w-7xl w-full flex justify-center flex-col'>
                <div className='flex justify-center'>
                    <h1 className='mt-4 text-4xl font-bold'>PRODUCTS</h1>
                </div>
                <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-100 animate-pulse" />

                <div className="grid grid-cols auto-rows-fr sm:grid-cols-2 gap-5 w-full my-16 relative">
                    <Link href="#reflections">
                        <div className="transition-all ease-in-out hover:duration-500 hover:text-orange-500 hover:border-orange-500 hover:border-2 h-full flex flex-col items-center gap-5 rounded-3xl border-t-2  bg-white/5 backdrop-blur border-primary hover:bg-orange-500 hover:bg-opacity-10 px-5 py-12 w-full">

                            <div className=' rounded-full bg-black p-2 z-10 shadow-orange-500 shadow-inner'>
                                <Image
                                    className='h-full w-24 justify-self-center z-10 rounded-full'
                                    src="/passive_income.png"
                                    width={605}
                                    height={658}
                                    alt="reflections"

                                /></div>
                            <h1 className='mt-4 text-3xl font-bold text-center z-10'>PASSIVE INCOME</h1>
                            <h1 className='font-bold text-center leading-8 z-10'>EARN REFLECTIONS WITH EACH TRANSACTION</h1>
                        </div>
                    </Link>

                    <Link href="https://app.buyholdearn.com/">
                        <div className="ransition-all ease-in-out hover:duration-500 hover:text-orange-500 hover:border-orange-500 hover:border-2 h-full flex flex-col items-center gap-5 rounded-3xl border-t-2  bg-white/5 backdrop-blur border-primary hover:bg-orange-500 hover:bg-opacity-10 px-5 py-12 w-full">
                            <div className=' rounded-full bg-black p-2 z-10  shadow-orange-500 shadow-inner'>
                                <Image
                                    className='h-full w-24 justify-self-center z-10 rounded-full'
                                    src="/nova_flame.png"
                                    width={658}
                                    height={658}
                                    alt="nft collection"

                                />
                            </div>
                            <h1 className='mt-4 text-3xl font-bold text-center'>FLAME COLLECTION</h1>
                            <h1 className='font-bold text-center leading-8'>MINT LIVE NOW!</h1>
                        </div>
                    </Link>

                    <Link href="https://flame.buyholdearn.com/">
                        <div className="ransition-all ease-in-out hover:duration-500 hover:text-orange-500 hover:border-orange-500 hover:border-2 h-full flex flex-col items-center gap-5 rounded-3xl border-t-2  bg-white/5 backdrop-blur border-primary hover:bg-orange-500 hover:bg-opacity-10 px-5 py-12 w-full">
                            <div className=' rounded-full bg-black p-2 z-10  shadow-orange-500 shadow-inner'>
                                <Image
                                    className='h-full w-24 justify-self-center z-10 rounded-full'
                                    src="/flameling.jpg"
                                    width={658}
                                    height={658}
                                    alt="flameling collection"

                                />
                            </div>
                            <h1 className='mt-4 text-3xl font-bold text-center'>FLAMELING COLLECTION</h1>
                            <h1 className='font-bold text-center leading-8'>MINT LIVE NOW!</h1>
                        </div>
                    </Link>
                    <Link href="https://market.buyholdearn.com">
                        <div className="ransition-all ease-in-out hover:duration-500 hover:text-orange-500 h-full flex flex-col items-center gap-5 rounded-3xl border-t-2  bg-white/5 backdrop-blur border-primary hover:bg-orange-500 hover:bg-opacity-10 px-5 py-12 w-full hover:border-orange-500 hover:border-2">
                            <div className=' rounded-full bg-black p-2 z-10  shadow-orange-500 shadow-inner'>
                                <Image
                                    className='h-full w-24 justify-self-center z-10 rounded-full'
                                    src="/merch.png"
                                    width={658}
                                    height={658}
                                    alt="earn shill tank"

                                />
                            </div>
                            <h1 className='mt-4 text-3xl font-bold text-center'>EARNX</h1>
                            <h1 className='font-bold text-center leading-8'>BECOME A MERCHANT!</h1>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    );
}