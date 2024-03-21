import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import BuyButton from './buyButton';
import Link from 'next/link';

import { FlamelingToken } from "@/assets/flamelingTokens";

type Props = {
  metadata: FlamelingToken;
}


export default function Navbar({ metadata }: Props) {
  return (
    <Disclosure as="nav" className="fixed top-0 bg-white/5 backdrop-blur w-full z-20">
      {({ open }) => (
        <>
          <div className="mx-4 md:mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-20 items-center justify-between ">

              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start align-middle">
                <Link href="/" className="flex flex-shrink-0 items-center my-auto">
                  <Image
                    className="h-10 w-auto"
                    width={122}
                    height={122}
                    src="/earn_logo_round_transparent.png"
                    alt={metadata.ticker}
                  />
                </Link>
                <div className="flex my-auto h-full mx-2 sm:mx-8 justify-start">
                  <a
                    href="/flamelings"
                    className='text-gray-300 hover:bg-white/5 hover:text-white rounded-md px-3 py-2 text-md leading-4 align-middle font-medium my-auto'

                  >
                    Flameling Tokens
                  </a>

                  {/* <TokenButton></TokenButton> */}
                </div>
              </div>
              <BuyButton metadata={metadata}></BuyButton>
            </div>
          </div>


        </>
      )}
    </Disclosure>
  );
}