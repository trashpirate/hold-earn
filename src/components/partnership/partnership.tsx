import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

type Props = {};

export default function Partnership({ }: Props) {
    return (
        <section className='flex justify-center'>
            <div className='max-w-7xl w-full flex justify-center flex-col mx-4'>

                <div className='sm:flex flex-col justify-start sm:flex-row my-16 mx-4 md:mx-auto align-middle sm:justify-center rounded-xl border-4 border-primary p-4 h-fit md:max-h-64'>
                    <Link className="md:m-auto mt-4 md:h-full" href="https://forms.gle/N1RFtESwo8ZeXZ2KA">
                        <Image
                            className='sm:h-full w-full sm:w-auto justify-self-center my-auto rounded-xl '
                            src="/earn_partnership.png"
                            width={1024}
                            height={1024}
                            alt="earn partnership program"
                            priority
                        />
                    </Link>
                    <div className='my-8 md:my-4 max-w-3xl mx-8'>
                        <h1 className='uppercase md:text-xl text-primary font-bold leading-6'>Are you an awesome crypto project and looking for partnerhsips?</h1>
                        <div className='flex flex-col justify-between'>
                            <div className='leading-6 my-4 text-sm md:text-lg text-white/50'>
                                The EARN Partnerhsip Program elevates projects in the crypto space by bringing communitites together to share knowledge, support each other, and collaborate. Together, we will maximize the success and growth for everyone!
                            </div>
                            <div className='flex flex-row h-fit w-full justify-start align-middle'>
                                <div className='leading-4 text-lg md:text-xl text-primary my-auto'>
                                    Become our partner TODAY!
                                </div>
                                <Link className="flex flex-col justify-center align-middle" href="https://forms.gle/N1RFtESwo8ZeXZ2KA">
                                    <ArrowTopRightOnSquareIcon className='h-6 mx-2 my-auto  text-primary duration-500 hover:scale-125 transform '></ArrowTopRightOnSquareIcon>
                                </Link>


                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}