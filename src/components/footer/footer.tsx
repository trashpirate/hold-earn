var classNames = require('classnames');
import Link from 'next/link';
import React from 'react';
import {SocialIcon} from 'react-social-icons';
import Image from 'next/image';

type Props = {};

const navigation = [
  {name: 'Introduction', href: '#introduction', current: true},
  {name: 'Tokenomics', href: '#tokenomics', current: false},
  {name: 'Buy', href: '#buy', current: false},
  {name: 'Products', href: '#products', current: false},
  {name: 'Whitepaper', href: '/EARN_WHITE_PAPER.pdf', current: false},
];

export default function Footer({}: Props) {
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
          <div className="flex flex-col my-4 lg:flex-row gap-5">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-white/50 hover:text-white py-2 text-md leading-4 font-medium text-left xs:text-right'
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className='my-4 flex gap-4 w-full justify-start xs:justify-end h-12'>
            <SocialIcon network="telegram" url="https://t.me/buyholdearn" bgColor="#FF6B10aa" style={{height: 30, width: 30}} label="Telegram" />
            <SocialIcon network="x" url="https://twitter.com/buyholdearn" bgColor="#FF6B10aa" style={{height: 30, width: 30}} label="X" />
            <Link href="https://etherscan.io/address/0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E#code">
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