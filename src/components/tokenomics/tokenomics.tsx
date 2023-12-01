import React from 'react';
import Image from 'next/image';
import ReflectionChecker from '../reflectionChecker';
import CopyToClipboard from '../copyToClipboard';
import TokenInfo from '../tokenInfo';

type Props = {};

export default function Tokenomics({}: Props) {
    return (
        <section className='mt-16 px-7'>
            <div className='max-w-7xl'>
                <div>
                    <div className='flex justify-center'>
                        <h1 className='text-4xl font-bold'>Tokenomics</h1>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <Image
                            src="/featured_image.jpg"
                            width={605}
                            height={658}
                            style={{width: "50px", height: "auto"}}
                            alt="flame"

                        /></div>
                </div>

                <div className='flex justify-center mt-8'>
                <TokenInfo></TokenInfo>
              </div>
                <div className='relative flex justify-center'>
                    <Image
                        className='absolute opacity-50 h-96 w-96 top-1/4'
                        src="/featured_image.jpg"
                        width={605}
                        height={658}
                        style={{width: "200px", height: "auto"}}
                        alt="flame"

                    />
                    <div className='flex flex-col items-start w-full gap-5 mt-5'>
                        <div className="h-16 flex flex-wrap items-center gap-3 rounded-md border-l-2 border-primary bg-white/5 backdrop-blur px-5 w-full">
                            <h1 className='text-gray-300'>Contract Address:</h1>
                            <h1 className='font-bold'>0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E</h1>
                        </div>
                        <div className="grid grid-cols sm:grid-cols-2 gap-5 w-full">
                            <div className="h-16 flex items-center gap-3 rounded-md border-l-2 border-primary bg-white/5 backdrop-blur px-5 w-full">
                                <h1 className='text-gray-300'>Symbol:</h1><h1 className='font-bold'>EARN</h1>
                            </div>
                            <div className="h-16 flex items-center gap-3 rounded-md border-l-2 border-primary bg-white/5 backdrop-blur px-5 w-full">
                                <h1 className='text-gray-300'>Decimals:</h1><h1 className='font-bold'>18</h1>
                            </div>
                            <div className="h-16 flex items-center gap-3 rounded-md border-l-2 border-primary bg-white/5 backdrop-blur px-5 w-full">
                                <h1 className='text-gray-300'>Network:</h1><h1 className='font-bold'>Ethereum</h1>
                            </div>
                            <div className="h-16 flex items-center gap-3 rounded-md border-l-2 border-primary bg-white/5 backdrop-blur px-5 w-full">
                                <h1 className='text-gray-300'>Total Supply:</h1><h1 className='font-bold'>1,000,000</h1>
                            </div>
                            <div className="h-16 flex items-center gap-3 rounded-md border-l-2 border-primary bg-white/5 backdrop-blur px-5 w-full">
                                <h1 className='text-gray-300'>Transaction Tax:</h1><h1 className='font-bold'>2%</h1>
                            </div>
                            <div className="h-16 flex items-center gap-3 rounded-md border-l-2 border-primary bg-white/5 backdrop-blur px-5 w-full">
                                <h1 className='text-gray-300'>Reflections:</h1><h1 className='font-bold'>2%</h1>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='flex justify-center my-16 w-full'>
                    <div className='w-full max-w-lg'>
                        <ReflectionChecker></ReflectionChecker>
                    </div>
                </div>


            </div>

        </section>
    );
}