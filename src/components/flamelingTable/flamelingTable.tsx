import Link from 'next/link';
import {FlamelingToken} from './flamelingTokens';
import ChartButton from '../buttons/chartButton';

interface FlamelingTableProps {
    tokens: FlamelingToken[];
}

export default function FlamelingTable({tokens}: FlamelingTableProps) {

    return (
        <section className='flex justify-center w-full'>

            <table className='table-auto border-separate border-spacing-y-3'>
                <caption className='uppercase font-bold text-3xl mb-10'>Launched Flameling Dividend Tokens</caption>
                <thead >
                    <tr className='border-b-2 border-white'>
                        <th className='px-4 border-b-2 border-white border-opacity-20'>NFT</th>
                        <th className='px-4 border-b-2 border-white border-opacity-20'>Name</th>
                        <th className='px-4 border-b-2 border-white border-opacity-20'>Ticker</th>
                        <th className='px-4 border-b-2 border-white border-opacity-20'>Contract</th>
                        <th className='px-4 border-b-2 border-white border-opacity-20'>Marketcap</th>
                        <th className='px-4 border-b-2 border-white border-opacity-20'>Price</th>
                        <th className='px-4 border-b-2 border-white border-opacity-20'>Chart</th>
                    </tr>
                </thead>
                <tbody>
                    {tokens.map(token => (
                        <tr className=' bg-white/5 backdrop-blur hover:bg-white/10' key={token.id} >
                            <td className='px-4 py-2  border-l-2 border-primary rounded-l-lg'>
                                <Link href={token.nftUrl}>
                                    <img src={token.imageUrl}
                                        width={122}
                                        height={122}
                                        style={{width: "60px", height: "auto", borderRadius: "35px"}}
                                        alt="etherscan"
                                    />
                                </Link></td>
                            <td className='px-6 py-2'><Link href={token.refLink}>{token.name}</Link></td>

                            <td className='px-6 py-2'>{token.ticker}</td>
                            <td className='px-6 py-2'><Link href={token.scanLink}>{token.contract}</Link></td>
                            <td className='px-6 py-2'>MC</td>
                            <td className='px-6 py-2'>Price</td>
                            <td className='px-6 py-2 flex-col justify-center align-middle rounded-r-lg '><ChartButton url={token.chartLink}></ChartButton></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>

    );
}