import Link from 'next/link';
import React from 'react';

type Props = {
  url: string;
  name: string;
};

export default function CustomButton({ url, name }: Props) {
  return (
    <div className="mt-4 w-fit h-10 px-4 py-2 flex items-center gap-2 bg-white/5 backdrop-blur rounded-md border-l-orange-500 border-l-2 justify-center hover:bg-white/10">
      <Link className="font-bold uppercase" href={url}>{name}</Link>
    </div>

  );
}