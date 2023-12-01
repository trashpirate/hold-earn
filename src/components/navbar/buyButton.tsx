import {Menu, Transition} from '@headlessui/react';
import {PlusIcon} from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, {Fragment} from 'react'
var classNames = require('classnames');

export default function BuyButton() {
  return (
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-900 text-sm">
                      <div className="px-3 py-2 w-max flex items-center gap-2 bg-slate-800 rounded-md xxs:border-l-orange-500 xxs:border-l-2">
                        <Link className="font-bold hidden xxs:inline" href="#">BUY $EARN</Link>
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-900' : '', 'block px-4 py-2 text-sm text-gray-300')}
                          >
                            Buy on Uniswap
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-900' : '', 'block px-4 py-2 text-sm text-gray-300')}
                          >
                            Buy on Fooz
                          </a>
                        )}
                      </Menu.Item>
              
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
  )
}