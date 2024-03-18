import Link from 'next/link';
import { FlamelingToken } from '@/assets/flamelingTokens';
import ChartButton from '../../buttons/chartButton';
import BuyButton from '../../buttons/buyButton';
import CopyToClipboard from '@/components/copyToClipboard';
import Copy2Clipboard from '@/components/copy2Clipboard/copy2Clipboard';

interface FlamelingTableProps {
    tokens: FlamelingToken[];
}

const tableHeaderStyleDefault = 'flex flex-col flex-nowrap sm:table-row mb-8 sm:mb-0 hidden';

export default function FlamelingTable({ tokens }: FlamelingTableProps) {

    return (
        <section className='w-full p-4' >
            <h1 className='text-center uppercase font-bold text-3xl mb-10'>Flameling Dividend Tokens</h1>
            <div className='flex justify-center items-center w-full p-4'>
                <table className='flex flex-row flex-no-wrap sm:table-auto sm:block border-separate border-spacing-y-3 sm:overflow-x-scroll overflow-hidden xl:overflow-auto'>

                    <thead >

                        <tr className={tableHeaderStyleDefault} >
                            <th className='px-4 border-b-2 border-opacity-20'>NFT</th>
                            {/* <th className='px-4 border-b-2 border-opacity-20'>Name</th> */}
                            <th className='px-4 border-b-2 border-opacity-20'>Ticker</th>
                            <th className='px-4 border-b-2 border-opacity-20'>Contract</th>
                            <th className='px-4 border-b-2 border-opacity-20'>Marketcap</th>
                            <th className='px-4 border-b-2 border-opacity-20'>Launch</th>
                            <th className='px-4 border-b-2 border-opacity-20'></th>
                        </tr>

                    </thead>
                    <tbody className='flex-1 sm:flex-none '>
                        {tokens.map(token => (
                            <tr className='flex flex-col flex-no border-primary border  wrap sm:table-row sm:bg-white/5 sm:backdrop-blur hover:bg-white/10 mb-8 sm:mb-0 rounded-lg sm:rounded-none' key={token.id} >
                                <td className='px-4 py-4 sm:py-2  sm:border-l-2 sm:border-primary sm:rounded-l-lg'>
                                    <Link href={token.refLink}>
                                        <img className='w-full sm:w-[60px] h-auto rounded-lg sm:rounded-full m-auto'
                                            src={token.imageUrl}
                                            width={122}
                                            height={122}
                                            alt="etherscan"
                                        />
                                    </Link></td>
                                <td className='px-6 py-2 text-center sm:hidden font-bold text-lg'><Link className='hover:text-primary' href={token.refLink}>{token.name}</Link></td>

                                <td className='px-6 py-2  text-center '>
                                    <div className='flex gap-5 '>
                                        <div className='sm:hidden'>Ticker: </div>
                                        <div>{token.ticker}
                                        </div>
                                    </div>
                                </td>

                                <td className='px-6 py-2  text-center '>
                                    <div className='flex gap-5 w-48 align-middle h-full'>
                                        <Copy2Clipboard
                                            text="0xbC68AE53d383f399Cc18268034C5E656fCb839f3"
                                            copyText="0xbC68AE53d383f399Cc18268034C5E656fCb839f3"
                                            textColor='text-primary'
                                            textSize='text-sm'
                                            iconSize='text-[10px]'
                                        />
                                        {/* <CopyToClipboard
                                            text={`CA: ${token.contract}`}
                                            copyText={token.contract}
                                        /> */}
                                        {/* <div className='sm:hidden'>CA:</div>
                                        <Link className='hover:text-primary' href={token.scanLink}>
                                            <p className=' text-ellipsis overflow-hidden text-center w-40 xxs:w-54 xs:w-80 px-4 sm:w-full'>{token.contract}</p>
                                        </Link> */}
                                    </div>
                                </td>
                                <td className='px-6 py-2  text-center'>
                                    <div className='flex gap-5'>
                                        <div className='sm:hidden'>Marketcap: </div>
                                        <div>MC</div>
                                    </div>
                                </td>
                                <td className='px-6 py-2  text-center'>
                                    <div className='flex gap-5'>
                                        <div className='sm:hidden'>Launch: </div>
                                        <div>{token.launch}</div>
                                    </div>
                                </td>
                                <td className='px-6 pt-2 pb-8 sm:py-2 text-center flex-row sm:flex-col justify-center align-middle sm:rounded-r-lg '>
                                    <div className='flex flex-row gap-2'>
                                        <div className='w-fit h-fit m-auto'>
                                            <ChartButton url={token.chartLink}></ChartButton>
                                        </div>
                                        <div className='w-fit h-fit m-auto'>
                                            <BuyButton url={`https://pancakeswap.finance/swap?chain=bsc&outputCurrency=${token.contract}`} ></BuyButton>
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