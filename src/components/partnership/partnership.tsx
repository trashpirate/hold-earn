import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

type Props = {};

export default function Partnership({ }: Props) {
    return (
        <section className='flex justify-center mx-2'>
            <div className='max-w-5xl w-full flex justify-between flex-col md:flex-row mx-4 rounded-2xl border-4 border-primary p-4'>

                {/* <div className='sm:flex flex-col justify-start sm:flex-row my-4 mx-4 md:mx-auto align-middle sm:justify-center  p-4 md:max-h-64'> */}
                <Link className="w-fit flex" href="/partnership">
                    <Image
                        className='rounded-xl md:my-8 lg:my-auto'
                        src="/earn_partnership.jpg"
                        width={700}
                        height={700}
                        alt="earn partnership program"
                        priority
                    />
                </Link>
                <div className='my-8 mx-4 md:mx-8'>
                    <h1 className='uppercase md:text-xl text-primary font-bold leading-6'>Are you an awesome crypto project and looking for partnerhsips?</h1>
                    <div className='flex flex-col justify-between'>
                        <div className='leading-6 my-4 text-sm md:text-lg text-white/50'>
                            The EARN Partnerhsip Program elevates projects in the crypto space by bringing communitites together to share knowledge, support each other, and collaborate. Together, we will maximize the success and growth for everyone!
                        </div>
                        <div className='flex flex-row w-full justify-start align-middle'>
                            <div className='leading-6 text-lg md:text-xl text-primary my-auto'>
                                Become our partner TODAY!
                            </div>
                            <Link className="flex flex-col justify-center align-middle" href="/partnership">
                                <ArrowTopRightOnSquareIcon className='h-5 mx-4 my-auto  text-primary duration-500 hover:scale-125 transform '></ArrowTopRightOnSquareIcon>
                            </Link>


                        </div>

                    </div>

                </div>

                {/* </div> */}
            </div>
        </section>
    );
}