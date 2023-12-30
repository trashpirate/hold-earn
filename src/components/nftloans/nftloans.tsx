import React, {useEffect, useState} from 'react';
import EmailForm from './emailForm';

type Props = {};

interface TableProps {

}

interface LoanTypes {
  id: number;
  trait: string;
  amount: number;
}

const loans: LoanTypes[] = [
  {
    id: 0,
    trait: 'WHITE',
    amount: 0
  },
  {
    id: 1,
    trait: 'BLUE',
    amount: 0
  },
  {
    id: 2,
    trait: 'YELLOW',
    amount: 100000
  },
  {
    id: 3,
    trait: 'RED',
    amount: 1000000
  },
  {
    id: 4,
    trait: 'NOVA',
    amount: 1500000
  },

];

export default function NFTLoans({}: Props) {
  const [tokenPrice, setTokenPrice] = useState<number | undefined>(undefined);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {

    const intervalId = setInterval(async () => {
      fetch('/api/token-price')
        .then((response) => response.json())
        .then((data) => setTokenPrice(data));

    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className='mt-36 px-7 flex justify-center scroll-m-36'>
      <div className='max-w-7xl w-full flex justify-center flex-col'>
        {/* header */}
        <div className='flex justify-center'>
          <h1 className='text-4xl font-bold'>NFT LOANS</h1>
        </div>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-100 animate-pulse" />
        {/* content */}
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 lg:mx-12 bg-transparent sm:bg-white/5 backdrop-blur md:p-12 rounded-3xl'>
          {/* left column */}
          <div>
            <h1 className='text-3xl md:text-4xl leading-normal mb-8 text-primary'>Get Interest-Free Loans Against Your FLAME or FLAMLING</h1>
            <p className='text-lg leading-normal'>Access extra funds without selling your $LICK<br />Grow your portfolio or invest in your dreams</p>

          </div>

          {/* right column */}
          <div className='bg-white/5 backdrop-blur px-6 sm:px-6 md:px-8 py-6 rounded-2xl md:mx-16 font-light'>
            <h1 className='text-3xl sm:text-4xl leading-normal mb-8'>How does it work?</h1>
            <p className='text-lg leading-normal'>Submit the application form providing the address and the token ID of your NFT (FLAME or FLAMLING). Upon approval you will send in your NFT to a provided wallet address and receive your loan. Maximum Loan amounts are calculated based on your NFT's trait and current value as listed below. </p>

            <p className='leading-normal my-4 text-primary'>{`Loans available at current EARN price ($${ tokenPrice ? tokenPrice.toLocaleString('en', {minimumFractionDigits: 5}) : "Loading..." }):`}</p>
            <table className="w-full table-fixed text-left text-primary">
              <thead className='mb-3'>
                <tr className="text-sm sm:text-md">
                  <th>NFT TRAIT</th>
                  <th className='truncate text-ellipsis overflow-hidden'>LOAN AMOUNT</th>
                </tr>
              </thead>
              <tbody className='text-sm sm:text-md'>
                {loans.map((loan) => {
                  return <tr className='leading-normal' key={loan.id}>
                    <td>{loan.trait}</td>
                    <td>{`$${ tokenPrice ? (loan.amount * tokenPrice / 2).toLocaleString('en', {minimumFractionDigits: 2}) : "Loading..." }`}</td>
                  </tr>;
                })}
              </tbody>
            </table>
            <button className="mt-4 w-24 h-10 px-3 py-2 flex items-center gap-2 bg-white/5 backdrop-blur rounded-md border-l-orange-500 border-l-2 justify-center hover:bg-white/10" onClick={() => openModal()}>APPLY</button>
            <EmailForm isOpen={isOpen} closeModal={closeModal}></EmailForm>
          </div>
        </div>

      </div>
    </section>
  );
}