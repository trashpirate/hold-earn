import Link from 'next/link';
import ChartButton from '../../buttons/chartButton';
import BuyButton from '../../buttons/buyButton';
import Copy2Clipboard from '@/components/copy2Clipboard/copy2Clipboard';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

import { formatEther } from "viem";
import { flamelingABI } from '@/assets/flamelingTokenABI';
import { wbnbABI } from '@/assets/wbnbABI';

import { createPublicClient, http } from 'viem'
import { bsc } from 'viem/chains'
import { useEffect, useState } from 'react';

import { flamelingTokens, FlamelingToken } from "@/assets/flamelingTokens";


const WBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";

const client = createPublicClient({
    chain: bsc,
    transport: http(`https://rpc.ankr.com/bsc/${process.env.NEXT_PUBLIC_ANKR_API_KEY}`)
})

interface FlamelingTableProps {
    tokens: FlamelingToken[];
}

const tableHeaderStyleDefault = '';


async function getPrice(tokenContract: string, pair: string) {

    let price: number | undefined = undefined;
    const data = await client.multicall({
        contracts: [
            {
                address: WBNB as `0x${string}`,
                abi: wbnbABI,
                functionName: "balanceOf",
                args: [pair as `0x${string}`],
            },
            {
                address: tokenContract as `0x${string}`,
                abi: flamelingABI,
                functionName: "balanceOf",
                args: [pair as `0x${string}`],
            }
        ]

    });

    if (data[0].status == "success" && data[1].status == "success") {
        const nativeBalance = Number(formatEther(data[0].result));
        const tokenBalance = Number(formatEther(data[1].result));
        if (tokenBalance > 0) { price = nativeBalance / tokenBalance; }
    }
    return price;

}

export default function FlamelingTable() {

    const [tokenData, setTokenData] = useState<Map<string, FlamelingToken>>(flamelingTokens);



    function updateTokenData() {

        fetch("/api/cmc-price").then(response => response.json()).then(bnbPrice => {
            console.log(bnbPrice)
            const newTokenData = new Map(tokenData);
            newTokenData.forEach((value, key) => {

                const fToken = newTokenData?.get(key);
                getPrice(value.contract, value.pair).then(price => {
                    if (price != undefined) {
                        fToken!.mc = price * bnbPrice * 1000000000
                        newTokenData.set(key, fToken!);
                    }
                });

            })
            let dataSorted = new Map([...newTokenData.entries()].sort(([, a], [, b]) => b.mc - a.mc))
            setTokenData(dataSorted);
        });


    }

    useEffect(() => {
        updateTokenData();
    }, [])

    useEffect(() => {

        updateTokenData();
        const interval = setInterval(() => {
            updateTokenData()
        }, 60000);

        return () => clearInterval(interval);
    }, []);


    return (
        <section className='w-full p-4' >
            <h1 className='text-center uppercase font-bold text-3xl mb-10 mx-4'>Flameling Dividend Tokens</h1>
            <div className='flex justify-center items-center w-full p-4'>
                <table className='flex flex-row flex-no-wrap sm:table-auto sm:block border-separate border-spacing-y-4 sm:overflow-x-scroll overflow-hidden xl:overflow-auto'>

                    <thead >

                        <tr className="flex-nowrap sm:table-row hidden " >
                            <th className='px-4 border-b-2 border-opacity-50 pb-2 border-primary'>Rank</th>
                            <th className='px-4 border-b-2 border-opacity-50 pb-2 border-primary'>NFT</th>
                            {/* <th className='px-4 border-b-2 border-opacity-50 pb-2 mb-10 border-primary'>Name</th> */}
                            <th className='px-4 border-b-2 border-opacity-50 pb-2 border-primary'>Ticker</th>
                            <th className='px-4 border-b-2 border-opacity-50 pb-2 border-primary'>Contract</th>
                            <th className='px-4 border-b-2 border-opacity-50 pb-2 border-primary'>Marketcap</th>
                            <th className='px-4 border-b-2 border-opacity-50 pb-2 border-primary'>Launch</th>
                            <th className='px-4 border-b-2 border-opacity-50 pb-2 border-primary'></th>
                        </tr>


                    </thead>

                    <tbody className='flex-1 font-light pt-8'>
                        {Array.from(tokenData.values()).map((token, index) => (
                            <tr className='flex flex-col flex-no border-primary border sm:h-20 wrap sm:table-row sm:bg-white/5 sm:backdrop-blur mb-8 sm:mb-0 rounded-lg sm:rounded-none' key={token.id} >
                                <td className='text-primary flex-row font-bold text-center sm:border-l-2 sm:border-primary sm:rounded-l-lg w-full sm:w-6'>
                                    <div className='flex gap-2 leading-4 m-auto sm:py-2 pt-8 pb-6 justify-center sm:w-full'>
                                        <div className='text-center w-fit sm:hidden '>RANK </div>
                                        <div className='text-center w-fit sm:w-full'>{index + 1}
                                        </div>
                                    </div>
                                </td>
                                <td className='px-3 py-2  text-center '>
                                    <Link href={token.refLink}>
                                        <img className='w-full sm:w-[60px] h-auto rounded-lg sm:rounded-full m-auto'
                                            src={token.imageUrl}
                                            width={122}
                                            height={122}
                                            alt="etherscan"
                                        />
                                    </Link></td>
                                <td className='px-6 py-4 text-center sm:hidden font-bold text-lg'><Link className='hover:text-primary' href={token.refLink}>{token.name}</Link></td>

                                <td className='px-6 py-2  text-center '>
                                    <div className='flex gap-5  leading-4'>
                                        <div className='sm:hidden'>Ticker: </div>
                                        <div>{token.ticker}
                                        </div>
                                    </div>
                                </td>

                                <td className='px-6 py-2  text-center '>
                                    <div className='flex gap-5 w-48 align-middle h-full leading-4'>
                                        <div className='sm:hidden m-auto text-primary'>CA: </div>
                                        <Copy2Clipboard
                                            text={token.contract}
                                            copyText={token.contract}
                                            textColor='text-primary'
                                            textSize='text-md'
                                            iconSize='text-[10px]'
                                        />

                                    </div>
                                </td>
                                <td className='px-6 py-2  text-center'>
                                    <div className='flex gap-5 justify-start sm:justify-center leading-4'>
                                        <div className='sm:hidden'>Marketcap: </div>
                                        <div className='text-center w-fit'>{token.mc == 0 ? "---" : `${(token.mc / 1000).toFixed(0)}${String.fromCharCode(8239)}K`}</div>
                                    </div>
                                </td>
                                <td className='px-6 py-2  text-center'>
                                    <div className='flex gap-5  leading-4'>
                                        <div className='sm:hidden'>Launch: </div>
                                        <div>{token.launch}</div>
                                    </div>
                                </td>
                                <td className='px-6  py-8 sm:py-2 text-center flex-col justify-center align-middle sm:rounded-r-lg'>
                                    <div className='flex flex-row gap-4 my-auto'>
                                        <div className='mx-auto w-fit h-fit my-auto'>
                                            <ChartButton url={token.chartLink}></ChartButton>
                                        </div>
                                        <div className='mx-auto w-fit h-fit my-auto'>
                                            <BuyButton url={`https://pancakeswap.finance/swap?chain=bsc&outputCurrency=${token.contract}`} ></BuyButton>
                                        </div>
                                        <div className='w-6 text-center align-middle text-primary text-opacity-50 py-2 hover:text-opacity-100'>
                                            <Link className='m-auto' href={token.refLink}><ArrowTopRightOnSquareIcon></ArrowTopRightOnSquareIcon></Link>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </section>

    );
}