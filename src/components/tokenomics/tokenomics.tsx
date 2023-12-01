import React from 'react';
import Image from 'next/image';
import ReflectionChecker from '../reflectionChecker';

type Props = {};

export default function Tokenomics({}: Props) {
    return (
        <section className='mt-16 px-7'>
            <div className='max-w-7xl'>
                <div>
                    <div className='flex justify-center'>
                        <h1 className='text-4xl font-bold'>Tokenomics</h1>
                    </div>
                    <div className='flex justify-center mt-4'><Image
                        src="/featured_image.jpg"
                        width={605}
                        height={658}
                        style={{width: "50px", height: "autp"}}
                        alt="flame"

                    /></div>
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