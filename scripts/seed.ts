import { VercelPoolClient, db } from '@vercel/postgres';
const {
  invoices,
  customers,
  revenue,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');
import {formatEther} from "viem";
import {abi} from "../src/assets/tokenABI";
import getWagmiConfig from "../src/app/config";
import {start} from 'repl';
const myWagmiConfig = getWagmiConfig(process.env.NEXT_PUBLIC_TESTNET as string);

async function readData(client: VercelPoolClient, block: bigint, timestamp: Date) {
        
    const data = await  myWagmiConfig.config.publicClient.readContract({
            address: '0x0b61c4f33bcdef83359ab97673cb5961c6435f4e',
            abi: abi,
            functionName: 'balanceOf',
            args: ['0x32558f1214bd874c6cbc1ab545b28a18990ff7ee'],
            blockNumber: block
        });
    const lp = formatEther(data);
    console.log(lp);

    return client.sql`
        INSERT INTO liqudity (timestamp, liquidity)
        VALUES (${timestamp.getUTCDate()}, ${lp})
        ON CONFLICT (id) DO NOTHING;
      `;

}
    
async function seedLiqudity(client: VercelPoolClient) {
    const dailySteps = BigInt(7200);
    const startingBlock = BigInt(18324953);
    const startingTime = new Date('2023-10-11T04:54:35');
    console.log(startingTime);
    const currentBlock = await myWagmiConfig.config.publicClient.getBlockNumber();
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS liquidity (
        timestamp DATE NOT NULL UNIQUE,
        liquidity NUMBER NOT NULL,
      );
    `;

    console.log(`Created "liquidity" table`);

      // Insert data into the "users" table
      let timestamp: Date = startingTime;
    for (let block = startingBlock; block < currentBlock; block+=dailySteps) {
        readData(client, block, timestamp);
                timestamp
              }
              timestamp.setDate(timestamp.getDate() + 1);
    console.log(`Seeded liquidity`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding liquidity:', error);
    throw error;
  }
}



async function main() {
  const client = await db.connect();

  await seedLiqudity(client);
  await client.release();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});