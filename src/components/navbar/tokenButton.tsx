import { Menu, Transition } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, { Fragment } from 'react';
var classNames = require('classnames');

export default function TokenButton() {
    return (
        <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 z-50">

            {/* dropdown */}
            <Menu as="div" className="relative">
                <div>
                    <Menu.Button className="relative flex rounded-md text-md leading-5 hover:bg-white/10">
                        <div className="px-3 py-2 w-max flex items-center gap-1 rounded-md ">
                            <div className="font-bold">Flameling Tokens</div>
                            <PlusIcon className="h-4 xs:h-4 w-4 xs:w-4 text-orange-500" aria-hidden="true" />
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
                    <Menu.Items className="absolute right-0 mt-2 w-fit origin-top-right rounded-md bg-orange-700/95 backdrop-blur-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/flamelings/0x0"
                                    className={classNames(active ? 'bg-white/5' : '', 'block px-4 py-2 text-sm text-gray-300 font-bold')}
                                >
                                    0x0
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/flamelings/0x13"
                                    className={classNames(active ? 'bg-white/5' : '', 'block px-4 py-2 text-sm text-gray-300 font-bold')}
                                >
                                    0x13
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/flamelings/0x21"
                                    className={classNames(active ? 'bg-white/5' : '', 'block px-4 py-2 text-sm text-gray-300 font-bold')}
                                >
                                    0x21
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/flamelings/0x52"
                                    className={classNames(active ? 'bg-white/5' : '', 'block px-4 py-2 text-sm text-gray-300 font-bold')}
                                >
                                    0x52
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/flamelings/0x156"
                                    className={classNames(active ? 'bg-white/5' : '', 'block px-4 py-2 text-sm text-gray-300 font-bold')}
                                >
                                    0x156
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/flamelings/0x159"
                                    className={classNames(active ? 'bg-white/5' : '', 'block px-4 py-2 text-sm text-gray-300 font-bold')}
                                >
                                    0x159
                                </a>
                            )}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/flamelings/0x177"
                                    className={classNames(active ? 'bg-white/5' : '', 'block px-4 py-2 text-sm text-gray-300 font-bold')}
                                >
                                    0x177
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/flamelings/0x222"
                                    className={classNames(active ? 'bg-white/5' : '', 'block px-4 py-2 text-sm text-gray-300 font-bold')}
                                >
                                    0x222
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/flamelings/0x237"
                                    className={classNames(active ? 'bg-white/5' : '', 'block px-4 py-2 text-sm text-gray-300 font-bold')}
                                >
                                    0x237
                                </a>
                            )}
                        </Menu.Item>


                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}