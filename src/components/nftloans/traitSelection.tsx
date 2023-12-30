import {Fragment, useState} from 'react';
import {Listbox, Transition} from '@headlessui/react';
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/24/solid';

// const traits = [
//     {id: 1, name: 'WHITE', unavailable: false},
//     {id: 2, name: 'BLUE', unavailable: false},
//     {id: 3, name: 'YELLOW', unavailable: false},
//     {id: 4, name: 'RED', unavailable: true},
//     {id: 5, name: 'NOVA', unavailable: false},
// ];

type Props = {
    traits: any[];
    selectedTrait: any;
    setSelectedTrait: any;
    maxAmount: number;
};

export default function TraitList({traits, selectedTrait, setSelectedTrait}: Props) {
    // const [selectedTrait, setSelectedTrait] = useState(traits[0]);

    return (
        <div className="relative w-36">
            <Listbox value={selectedTrait} onChange={setSelectedTrait}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate text-black">{selectedTrait}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {traits.map((trait) => (
                                <Listbox.Option
                                    key={trait.id}
                                    className={({active}) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${ active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={trait.name}
                                    disabled={trait.unavailable}
                                >
                                    {trait.name}
                                    {/* {(selectedTrait) => (
                                        <>
                                            <span
                                                className={`block truncate ${ selectedTrait ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {trait.name}
                                            </span>
                                            {selectedTrait ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )} */}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}