import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
type Props = {};

export default function Products({}: Props) {
    return (
        <section id="products" className='mt-16 px-7 flex justify-center'>
            <div className='max-w-7xl w-full flex justify-center flex-col'>
                <div className='flex justify-center'>
                    <h1 className='text-4xl font-bold'>PRODUCTS</h1>
                </div>
                <div className='flexjustify-center mt-8 mx-auto'>
                    <Image
                        src="/smoke_spiral.png"
                        width={658}
                        height={658}
                        style={{width: "100px", height: "auto"}}
                        alt="flame"

                    />
                </div>

                <div className="grid grid-cols sm:grid-cols-2 gap-5 w-full my-8 relative">
                    <Link href="#reflections">
                        <div className="h-fit flex flex-col items-center gap-5 rounded-3xl border-t-2 border-x-2 border-primary bg-card bg-cover bg-center hover:bg-orange-500 hover:bg-opacity-10 px-5 py-12 w-full">
                            <h1 className='text-4xl font-bold'>PASSIVE INCOME</h1>
                            <h1 className='font-bold text-center leading-5'>EARN REFLECTIONS WITH EACH TRANSACTION</h1>
                        </div>
                    </Link>

                    <Link href="https://app.buyholdearn.com/">
                        <div className="h-fit flex flex-col items-center gap-5 rounded-3xl border-t-2 border-x-2 border-primary bg-card bg-cover bg-center hover:bg-orange-500 hover:bg-opacity-10 px-5 py-12 w-full">
                            <h1 className='text-4xl font-bold'>NFT Collection</h1>
                            <h1 className='font-bold'>MINT LIVE NOW!</h1>
                        </div>
                    </Link>

                    <div className="h-fit flex flex-col items-center gap-5 rounded-3xl border-t-2 border-x-2 border-primary bg-card bg-cover bg-center hover:bg-orange-500 hover:bg-opacity-10 px-5 py-12 w-full">
                        <h1 className='text-4xl font-bold'>SHILL TANK</h1>
                        <h1 className='font-bold'>COMING SOON</h1>
                    </div>
                    <div className="h-fit flex flex-col items-center gap-5 rounded-3xl border-t-2 border-x-2 border-primary bg-card bg-cover bg-center hover:bg-orange-500 hover:bg-opacity-10 px-5 py-12 w-full">
                        <h1 className='text-4xl font-bold'>MERCH</h1>
                        <h1 className='font-bold'>COMING SOON</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}