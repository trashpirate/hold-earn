'use client';
import React from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {Fragment, useState} from 'react';
import {useForm as useHookForm} from "react-hook-form";
import {sendEmail, FormData} from '../../utils/sendEmail';
import TraitList from './traitSelection';

type Props = {
  isOpen: boolean;
  closeModal: any;
};

const traits = [

  {id: 3, name: 'YELLOW', unavailable: false},
  {id: 4, name: 'RED', unavailable: true},
  {id: 5, name: 'NOVA', unavailable: false},
];

export default function EmailForm({isOpen, closeModal}: Props) {

  const [selectedTrait, setSelectedTrait] = useState(traits[0]);
  const {register, handleSubmit} = useHookForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white/5 backdrop-blur p-12 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-normal leading-2 text-primary mb-4"
                  >
                    Application Form
                  </Dialog.Title>
                  <div className='w-full flex justify-center h-fit'>
                    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                      <div className='mb-3 text-md'>
                        <label
                          htmlFor='email'
                          className='mb-0 block text-sm font-normal text-primary'
                        >
                          Email Address
                        </label>
                        <input
                          type='email'
                          placeholder='example@domain.com'
                          className='w-full rounded-md border border-gray-300 bg-white py-1 px-3 text-sm font-normal text-gray-700 outline-none focus:border-primary focus:shadow-md'
                          {...register('email', {required: true})}
                        />
                      </div>
                      <div className='mb-3 text-md'>
                        <label
                          htmlFor='telegram'
                          className='mb-0 block text-sm font-normal text-primary'
                        >
                          Telegram Handle
                        </label>
                        <input
                          type='text'
                          placeholder='Telegram Handle'
                          className='w-full rounded-md border border-gray-300 bg-white py-1 px-3 text-sm font-normal text-gray-700 outline-none focus:border-primary focus:shadow-md'
                          {...register('telegram', {required: true})}
                        />
                      </div>
                      <div className='mb-3 text-md'>
                        <label
                          htmlFor='twitter'
                          className='mb-0 block text-sm font-normal text-primary'
                        >
                          Twitter Handle
                        </label>
                        <input
                          type='text'
                          placeholder='Twitter Handle'
                          className='w-full rounded-md border border-gray-300 bg-white py-1 px-3 text-sm font-normal text-gray-700 outline-none focus:border-primary focus:shadow-md'
                          {...register('twitter', {required: true})}
                        />
                      </div>

                      <div className='mb-3 text-md'>
                        <label
                          htmlFor='address'
                          className='mb-0 block text-sm font-normal text-primary'
                        >
                          Wallet Address
                        </label>
                        <input
                          type='text'
                          placeholder='Your Wallet address'
                          className='w-full resize-none rounded-md border border-gray-300 bg-white py-1 px-3 text-sm font-normal text-gray-700 outline-none focus:border-primary focus:shadow-md'
                          {...register('address', {required: true})}
                        ></input>
                      </div>
                      <div className='mb-3 text-md'>
                        <label
                          htmlFor='address'
                          className='mb-0 block text-sm font-normal text-primary'
                        >
                          Token ID
                        </label>
                        <input
                          type='number'
                          placeholder='0'
                          className='w-24 resize-none rounded-md border border-gray-300 bg-white py-1 px-3 text-sm font-normal text-gray-700 outline-none focus:border-primary focus:shadow-md'
                          {...register('tokenId', {required: true})}
                        ></input>
                      </div>

                      <div className="mt-4 gap-4 flex">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-md leading-snug font-bold text-black hover:bg-orange-800 focus:outline-none hover:ring-2 hover:ring-orange-500 hover:ring-offset-2"
                        >
                          SUBMIT
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-md leading-snug font-bold text-black hover:bg-orange-800 focus:outline-none hover:ring-2 hover:ring-orange-500 hover:ring-offset-2"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                      </div>
                    </form>


                  </div>


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

