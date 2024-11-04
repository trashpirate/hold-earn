"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function IconToClipboard(props: { imglink: string; copyText: string; iconSize: number }) {
    const [copied, setCopied] = useState<boolean>(false);

    useEffect(() => {
        // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
        const timeoutId = setTimeout(() => {
            setCopied(false);
        }, 2000);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, [copied]); // Empty dependency array ensures the effect runs only once

    const copylink = async (e: any) => {
        try {
            navigator.clipboard.writeText(props.copyText);
            setCopied(true);
            console.log("copied: " + props.copyText);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="flex hover:cursor-pointer opacity-60 hover:opacity-100 transition-all duration-100 ml-0 relative h-full">
            <div onClick={copylink} className="h-full w-fit">
                <Image
                    src={props.imglink}
                    width={122}
                    height={122}
                    className={copied ? ' opacity-100 h-full w-auto' : ' opacity-80 h-full w-auto'}
                    alt="chain logo"
                />
            </div>
            {copied && <div className="absolute -top-3 -right-10 leading-3 text-[10px]">
                CA copied!
            </div>}
        </div>
    );
}