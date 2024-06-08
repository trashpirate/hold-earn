import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
type Props = {}

export default function PopUp({ }: Props) {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>


      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-blue-200/10 backdrop-blur p-8 text-left align-middle shadow-xl transition-all mt-20">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-2 text-cyan-400 text-center"
                  >
                    MINT LIVE NOW!
                  </Dialog.Title>
                  <div className='w-full flex justify-center h-fit'>
                    <Image
                      className='rounded-2xl my-5 h-auto w-full'
                      src="/liquid.jpg"
                      width={300}
                      height={300}
                      alt="liquid"
                      priority
                    />

                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-200 text-justify">
                      LIQUID is a limited NFT collection on Base chain designed to enhance liquidity within the EARN ecosystem and offer holders a stable return over 5 years.
                    </p>
                    <div className='flex justify-between my-4'>
                      <p className='leading-6 text-md'>Price: 500 USDC</p>
                      <p className='text-cyan-400 font-bold leading-6 text-md'>Minimum 30% APY!</p>

                    </div>

                  </div>

                  <div className="mt-2 gap-4 flex justify-between">
                    <Link
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-cyan-400 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-600 focus:outline-none hover:ring-2 hover:ring-cyan-400 hover:ring-offset-2"
                      href="https://liquid.buyholdearn.com/"
                    >
                      Launch App
                    </Link>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-cyan-400 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-600 focus:outline-none hover:ring-2 hover:ring-cyan-400 hover:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}