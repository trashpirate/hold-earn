import { Menu, Transition } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, { Fragment } from 'react';
var classNames = require('classnames');

export default function BuyButton() {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 z-50">

      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="relative flex rounded-md bg-white/5 text-sm hover:bg-white/10">
            <div className="px-3 py-2 w-max flex items-center gap-2 bg-white/5 rounded-md xxs:border-l-orange-500 xxs:border-l-2">
              <div className="font-bold hidden xxs:inline">BUY $EARN</div>
              <PlusIcon className="h-4 xs:h-6 w-4 xs:w-6 text-orange-500" aria-hidden="true" />
            </div>
            <span className="sr-only"></span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right rounded-md backdrop-blur-lg bg-orange-500/90 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://app.uniswap.org/swap?outputCurrency=0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E"
                  className={classNames(active ? 'bg-white/5 ' : '', 'block px-4 py-2 text-sm text-gray-300 font-bold ')}
                >
                  Buy ETH-EARN (Uniswap)
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://app.uniswap.org/swap?chain=avalanche&outputCurrency=0x806cc7a21bd85e960857ac1e097802fabad6f594"
                  className={classNames(active ? 'bg-white/5' : '', 'block px-4 py-2 text-sm text-gray-300 font-bold')}
                >
                  Buy AVAX-EARN (Uniswap)
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://pancakeswap.finance/swap?chain=bsc&outputCurrency=0x2aC895fEba458B42884DCbCB47D57e44c3a303c8"
                  className={classNames(active ? 'bg-white/5' : '', 'block px-4 py-2 text-sm text-gray-300 font-bold')}
                >
                  Buy BNB-EARN (PancakeSwap)
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://www.sushi.com/swap?chainId=8453&token0=NATIVE&token1=0x803b629C339941e2b77D2dC499DAc9e1fD9eAC66"
                  className={classNames(active ? 'bg-white/5' : '', 'block px-4 py-2 text-sm text-gray-300 font-bold')}
                >
                  Buy BASE-EARN (SushiSwap)
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=8CuPzHKuZQUyYbear8fi3u6iuTY652WVZT2cHZ2yeNbE&fixed=in"
                  className={classNames(active ? 'bg-white/5' : '', 'block px-4 py-2 text-sm text-gray-300 font-bold')}
                >
                  Buy SOL-EARN (Raydium)
                </a>
              )}
            </Menu.Item>

          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}