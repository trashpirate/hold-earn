import {PlusIcon} from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react'

export default function ChartButton() {
  return (
                      <div className="mt-4 w-24 h-10 px-3 py-2 flex items-center gap-2 bg-slate-800 rounded-md border-l-orange-500 border-l-2 justify-center hover:bg-slate-700">
                        <Link className="font-bold" href="https://www.dextools.io/app/en/ether/pair-explorer/0x32558f1214bd874c6cbc1ab545b28a18990ff7ee">CHART</Link>
                      </div>
              
  )
}