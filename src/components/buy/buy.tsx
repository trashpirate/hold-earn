import React from 'react';
import Iframe from 'react-iframe';
import Image from 'next/image';
type Props = {};

export default function Buy({}: Props) {

    return (
        <section id="buy" className='my-16 px-7 flex justify-center scroll-m-36'>
            <div className='max-w-5xl w-full grid sm:grid-cols-2'>
                <div className='flex justify-center sm:justify-start align-middle my-16'>
                    <div className='my-auto'>
                        <Image
                            src="/smoke_white.png"
                            width={3941}
                            height={1444}
                            style={{width: "300px", height: "auto"}}
                            alt="flame"

                        />
                        <h1 className='text-4xl font-bold mt-4'>BUY EARN</h1>
                        <h2>You can buy $EARN with <a className='text-orange-500' href="https://flooz.xyz/trade/0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E?network=eth">Flooz</a> or on <a className='text-orange-500' href="https://app.uniswap.org/swap?outputCurrency=0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E">Uniswap</a>.</h2>
                    </div>
                </div>
                <div className='flex justify-center sm:justify-end'>
                    <Iframe
                        className='w-full h-[650px]'
                        display="inline"
                        styles={{borderRadius: "15px", borderWidth: "0px"}}
                        allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
                        url="https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress=0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E&swapLockToToken=false&onRampDisabled=false&onRampAsDefault=false&onRampTokenAddress=eth&stakeDisabled=true&network=eth&lightMode=false&primaryColor=%23ff6b10&backgroundColor=transparent&roundedCorners=10&padding=20&refId=Q0blsH"
                    ></Iframe>
                    
                </div>

            </div>

        </section>
    );
}