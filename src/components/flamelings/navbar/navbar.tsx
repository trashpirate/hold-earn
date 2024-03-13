import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import BuyButton from './buyButton';
import Link from 'next/link';

type Props = {
  contract: string;
  ticker: string;
};


export default function Navbar({ contract, ticker }: Props) {
  return (
    <Disclosure as="nav" className="fixed top-0 bg-white/5 backdrop-blur w-full z-20">
      {({ open }) => (
        <>
          <div className="mx-4 md:mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-20 items-center justify-between ">

              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start align-middle">
                <Link href="/" className="flex flex-shrink-0 items-center my-auto">
                  <Image
                    className="h-10 w-auto"
                    width={122}
                    height={122}
                    src="/earn_logo_round_transparent.png"
                    alt={ticker}
                  />
                </Link>

              </div>
              <BuyButton contract={contract} ticker={ticker}></BuyButton>
            </div>
          </div>


        </>
      )}
    </Disclosure>
  );
}