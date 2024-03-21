var classNames = require('classnames');
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import BuyButton from './buyButton';
import Link from 'next/link';
import TokenButton from './tokenButton';
import useHash from './useHash';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Introduction', href: '../#introduction', current: true },
  { name: 'Tokenomics', href: '../#tokenomics', current: false },
  { name: 'Buy', href: '../#buy', current: false },
  { name: 'Products', href: '../#products', current: false },
  { name: 'Exchanges', href: '../#exchanges', current: false },
  { name: 'Whitepaper', href: '../EARN_WHITE_PAPER.pdf', current: false },
  { name: 'Bridge', href: 'https://app.debridge.finance/deport?inputChain=1&outputChain=56&inputCurrency=0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E&outputCurrency=', current: false },
  { name: 'Flameling Tokens', href: "../flamelings" }
];

export default function Navbar() {

  const pathname = usePathname();
  const hash = useHash();

  function isActive(ref: string) {
    const path = ref.replace('..', '');



    if (hash && hash.length > 0) {
      const currentPath = `${pathname}#${hash}`;
      return currentPath === path;
    }
    else {
      return pathname === path;
    }

  }


  return (
    <Disclosure as="nav" className="fixed top-0 bg-white/5 backdrop-blur w-full z-20">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-20 items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 backdrop-blur hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start align-middle">
                <Link href="#introduction" className="flex flex-shrink-0 items-center my-auto">
                  <Image
                    className="h-10 w-auto"
                    width={122}
                    height={122}
                    src="/earn_logo_round_transparent.png"
                    alt="EARN"
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 my-auto h-full">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          isActive(item.href) ? 'bg-white/5 backdrop-blur text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                          'rounded-md px-3 py-2 text-md leading-4 align-middle font-medium my-auto'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    {/* <TokenButton></TokenButton> */}
                  </div>
                </div>
              </div>

              <BuyButton></BuyButton>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-white/5 backdrop-blur text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>

              ))}
              {/* <TokenButton></TokenButton> */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}