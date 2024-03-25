"use client";
import React from "react";
import Navbar from "@/components/navbar/navbar";
import Partnership from "@/components/partnership/partnership";
import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Footer from "@/components/footer/footer";

export default function Home() {

    return (
        <section className="flex flex-col justify-start h-screen pt-28 sm:pt-36">
            <Navbar></Navbar>
            <div className="flex flex-col justify-start mx-4">
                <div className="flex mx-auto w-full justify-center">

                </div>

                <div className="flex flex-col mx-auto rounded-2xl border-2 border-primary p-6 sm:p-8 w-full max-w-3xl mt-4 mb-16">
                    <Link className="w-full max-w-3xl rounded-2xl mb-4 sm:mb-8" href="https://forms.gle/tdLTVhWPGAES97nL9">
                        <Image
                            className='rounded-xl w-full  hidden sm:block'
                            src="/earn_partnership_banner.jpg"
                            width={700}
                            height={700}
                            alt="earn partnership program"
                            priority
                        />
                        <Image
                            className='rounded-xl w-full sm:hidden'
                            src="/earn_partnership.jpg"
                            width={700}
                            height={700}
                            alt="earn partnership program"
                            priority
                        />
                    </Link>
                    <h1 className='uppercase md:text-3xl text-primary font-bold leading-6 py-4'>Are you an awesome crypto project and looking for partnerhsips?</h1>
                    <div className='leading-6 my-2 text-sm md:text-lg text-white/50 font-thin'>
                        The EARN Partnerhsip Program elevates projects in the crypto space by bringing communitites together to share knowledge, support each other, and collaborate. Together, we will maximize the success and growth for everyone!
                    </div>
                    <div className='leading-6 mb-2 mt-8 text-sm md:text-xl text-primary/80 italic'>What does this mean for projects looking to partner with us?</div>
                    <div className='leading-6 text-sm md:text-lg text-white/50  font-thin'>It means we will help them with <i className="text-primary/70">shoutouts on our social media accounts</i> and give them the opportunity to <i className="text-primary/70">shill their project on our EARN X Spaces</i>!</div>

                    <div className="leading-6 mb-2 mt-8 text-sm md:text-xl text-primary/80 italic">Requirements for partnership is as follows:</div>
                    <ol className="list-decimal  text-white/50 font-thin list-outside ml-8 sm:ml-10 text-sm md:text-lg">
                        <li className="leading-7">
                            Project must have over 200 holders.
                        </li>
                        <li className="leading-7">The contract renounced for safety with LP burned or locked.</li>
                        <li className="leading-7">You must give us at least 0.5 ETH worth of tokens or 0.5% of the supply to be airdropped to our <a href="https://app.buyholdearn.com/" className="text-primary/70 hover:text-primary">Flame NFT</a> holders.</li>
                        <li className="leading-7">Projects must post weekly updates about the $EARN partnership on X tagging <a href="https://twitter.com/buyholdearn" className="text-primary/70 hover:text-primary">@buyholdearn</a> to help spread the word.</li>
                    </ol>
                    <div className='flex flex-row w-full justify-center align-middle mt-8 mb-4'>
                        <Link href="https://forms.gle/tdLTVhWPGAES97nL9" className='leading-6 text-md md:text-lg text-black bg-primary px-4 py-2 cursor-pointer rounded-xl font-bold my-auto duration-500 hover:scale-110 transform'>
                            Become our partner TODAY!
                        </Link>
                        {/* <Link className="flex flex-col justify-center align-middle " >
                        <ArrowTopRightOnSquareIcon className='h-5 mx-4 my-auto  text-primary '></ArrowTopRightOnSquareIcon>
                    </Link> */}
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </section>
    );
}