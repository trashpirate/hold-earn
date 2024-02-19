

import {AreaChart, Card, type EventProps} from '@tremor/react';
import {useEffect, useState} from 'react';
import {useBalance} from 'wagmi';
import {abi} from "../../assets/tokenABI";
import {publicClient} from '@/utils/client';
import {read} from 'fs';
import {formatEther} from "viem";

const data = [
    {
        month: 'January',
        rain: 0.2,
        snow: 3.7,
    },
    {
        month: 'Februrary',
        rain: 0.3,
        snow: 26.1,
    },
    {
        month: 'March',
        rain: 0.6,
        snow: 22.1,
    },
    {
        month: 'April',
        rain: 0.8,
        snow: 10.1,
    },
    {
        month: 'December',
        rain: 0.3,
        snow: 26.1,
    },
];

export default function LiquidityChart() {
    const [value, setValue] = useState<null | EventProps>(null);

    async function readData() {
        const currentBlock = await publicClient.getBlockNumber();
        for (let block = BigInt(18324953); block <= currentBlock; block += BigInt(7200)) {
            const data = await publicClient.readContract({
                address: '0x0b61c4f33bcdef83359ab97673cb5961c6435f4e',
                abi: abi,
                functionName: 'balanceOf',
                args: ['0x32558f1214bd874c6cbc1ab545b28a18990ff7ee'],
                blockNumber: block
            });
            const lp = formatEther(data);
            console.log(lp);

        }

    }

    useEffect(() => {
        readData();
    }, []);

    return (
        <div className='w-full flex justify-center'>
            <div className="not-prose my-10 mx-auto max-w-4xl">
                <Card>
                    <AreaChart
                        data={data}
                        index="month"
                        categories={['rain', 'snow']}
                        onValueChange={(v: EventProps) => setValue(v)}
                    />
                </Card>
            </div>
        </div>

    );
}