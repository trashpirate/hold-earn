import Link from 'next/link';
import React from 'react';
import {SocialIcon} from 'react-social-icons';
import Image from 'next/image';

type Props = {
  scan_link: string;
};

export default function Footer({scan_link}: Props) {
  return (
    <footer className=' bg-white/5 backdrop-blur w-full z-10 h-fit flex justify-center'>
      <div className='flex justify-between p-8 max-w-7xl w-full flex-col xs:flex-row'>

        <div className='my-4 flex flex-row w-full h-12 gap-5 align-middle '>
          <Image
            className='w-12 h-auto'
            src="/earn_logo_round_transparent.png"
            width={122}
            height={122}
            alt="earn logo"
          />
          <h1 className='font-bold text-lg text-left align-middle my-auto'>BUY, HOLD, EARN</h1>
        </div>
        <div className='flex flex-col justify-between h-full xs:w-2/4 '>
          
          <div className='my-4 flex gap-4 w-full justify-start xs:justify-end h-12'>
            <SocialIcon network="telegram" url="https://t.me/buyholdearn" bgColor="#FF6B10aa" style={{height: 30, width: 30}} label="Telegram" />
            <SocialIcon network="x" url="https://twitter.com/buyholdearn" bgColor="#FF6B10aa" style={{height: 30, width: 30}} label="X" />
            <Link href={scan_link}>
              <Image
                src="/etherscan.png"
                width={122}
                height={122}
                style={{width: "30px", height: "auto", opacity: "0.8"}}
                alt="etherscan"
              />
            </Link>
          </div>
        </div>


      </div>

    </footer>
  );
}