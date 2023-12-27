import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {Fragment, useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
type Props = {}

export default function PopUp({}: Props) {
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white/5 backdrop-blur p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-2 text-primary"
                  >
                    FLAMLING COLLECTION LIVE NOW!
                    </Dialog.Title>
                    <div className='w-full flex justify-center h-fit'>
                      <Image
            src="/flameling_moving.gif"
            width={300}
            height={300}
            style={{borderRadius: "25px", margin: "20px"}}
                      alt="flameling"
                      priority
          />
            
          </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-200">
                      The adorable Flamelings embody the warmth and energy of the fire they are born from. Funny, powerful, brave, patient, and dependable, they reflect the diverse qualities of the EARN community.
                    </p>
                  </div>

                  <div className="mt-4 gap-4 flex">
                    <Link
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-black hover:bg-orange-800 focus:outline-none hover:ring-2 hover:ring-orange-500 hover:ring-offset-2"
                      href="https://flame.buyholdearn.com/"
                    >
                      MINT
                      </Link>
                      <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-black hover:bg-orange-800 focus:outline-none hover:ring-2 hover:ring-orange-500 hover:ring-offset-2"
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