import React from 'react'

const Income = () => {
  const transactions = [
    { amount: 720, date: '1/12/22' },
    { amount: 560, date: '10/11/22' },
    { amount: 980, date: '23/11/22' }
  ]
  return (
    <section className="py-2 mx-auto w-full bg-red-100">
      <div id="header" className='pb-3 container px-4 mx-auto'>
        <h2 className='font-bold text-2xl py-1 container'>Income</h2>
        <p className="py-1 font-semibold text-sm text-gray-400">
          Last <span className="underline">30 days</span>
        </p>
        <h2 className="text-3xl font-bold py-2">
          $2,260
        </h2>
      </div>

      <div id="chart" className="container px-4 mx-auto space-y-3">
        <div className="flex flex-row space-x-4 items-center">
          <p className='font-semibold w-10'>$5k</p>
          <div className=" border-dotted border-b-2 border-gray-400 w-full"></div>
        </div>

        <div className="flex flex-row space-x-4 items-center">
          <p className='font-semibold w-10'>$4k</p>
          <div className=" border-dotted border-b-2 border-gray-400 w-full"></div>
        </div>

        <div className="flex flex-row space-x-4 items-center">
          <p className='font-semibold w-10'>$3k</p>
          <div className=" border-dotted border-b-2 border-gray-400 w-full"></div>
        </div>

        <div className="flex flex-row space-x-4 items-center">
          <p className='font-semibold w-10'>$2k</p>
          <div className=" border-dotted border-b-2 border-gray-400 w-full"></div>
        </div>

        <div className="flex flex-row space-x-4 items-center">
          <p className='font-semibold w-10'>$1k</p>
          <div className=" border-dotted border-b-2 border-gray-400 w-full"></div>
        </div>

        <div className="flex flex-row space-x-4 items-center">
          <p className='font-semibold w-10'>$0</p>
          <div className=" border-dotted border-b-2 border-gray-400 w-full"></div>
        </div>
      </div>

      <div className="container px-4 mx-auto flex flex-row space-x-6 md:space-x-12">
        <div className="h-36 rounded-t z-10 -mt-40 ml-14 w-6 bg-orange-200 md:w-10"></div>

        <div className="h-12 z-10 -mt-16 rounded-t ml-14 w-6 bg-orange-200 md:w-10"></div>

        <div className="h-32 z-10 rounded-t -mt-36 ml-14 w-6 bg-orange-200 md:w-10"></div>

        <div className="h-28 z-10 rounded-t -mt-32 ml-14 w-6 bg-orange-200 md:w-10"></div>

        <div className="h-16 z-10 -mt-20 rounded-t ml-14 w-6 bg-orange-400 md:w-10"></div>

        <div className="h-6 z-10 rounded-t -mt-9 ml-14 w-6 bg-orange-400 md:w-10"></div>
      </div>
      <div className="container px-4 mx-auto flex flex-row space-x-6 md:space-x-16 text-center">
        <p className='ml-16 font-semibold'>Ju</p>
        <p className='text-center md:pl-2 font-semibold'>Au</p>
        <p className='font-semibold'>Se</p>
        <p className='font-semibold'>Oc</p>
        <p className='pl-2 font-semibold'>No</p>
        <p className='font-semibold'>De</p>
      </div>

      <div id="transaction" className="flex flex-col space-y-4 pt-8 px-4 mx-auto container">
        <div className="flex flex-row justify-between items-center py-3">
          <h3 className="text-2xl font-bold">
            Your transactions (3)
          </h3>
          <p className="font-semibold text-sm text-gray-400">
            Last <span className="underline">30 days</span>
          </p>
        </div>

        <div className="flex flex-col space-y-4 ">
          {
            transactions.map((transaction, index) => (
              <div key={index} className="flex flex-row px-4 py-3 justify-between bg-white rounded items-center">
                <h2 className="font-bold text-3xl">
                  ${transaction.amount}
                </h2>
                <p className="text-sm font-semibold text-gray-400">{transaction.date}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Income