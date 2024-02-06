import React from 'react'

const Reviews = () => {
  const reviewData = [
    {
      name: 'Elliot', date: 'December 1,2022', details: 'The beach bum is such an awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommended!'
    },
    {
      name: 'Sandy', date: 'November 23, 2022', details: 'This is our third time using the Modest Explorer for our travels and we love it! No complaints absolutely perfect!'
    }
  ]
  return (
    <section className="container px-4 mx-auto my-8">
      <div className='flex flex-row space-x-4 items-center'>
        <h2 className="text-3xl font-bold">
          Your reviews
        </h2> <span className="text-gray-400 text-sm font-bold">last <span className="underline">30 days</span></span>
      </div>

      <div id="rating" className="my-6">
        <p className='text-sm text-black font-semibold'><span className="text-3xl font-bold text-black pr-2">5.0</span> overall rating</p>
        <div className='flex flex-col '>
          <div className="flex flex-row container my-4 space-x-2 justify-between">
            <p className="w-1/4 font-semibold text-gray-400">5 stars</p>
            {/* <input type="range" max='100' value='100' className='py-0.5 w-full md:w-full accent-orange-400 bg-orange-400 rounded-full' name="" id="" /> */}
            <div className=" py-0.5 w-full md:w-full bg-orange-400 rounded-full"></div>
            <p className='w-1/4 font-semibold text-gray-400 text-end'>100%</p>
          </div>

          <div className="flex flex-row container my-4 space-x-2 justify-between">
            <p className="w-1/4 font-semibold text-gray-400">4 stars</p>
            <div className=" py-0.5 w-full md:w-full bg-gray-300 rounded-full"></div>
            <p className='w-1/4 font-semibold text-gray-400 text-end'>0%</p>
          </div>

          <div className="flex flex-row container my-4 space-x-2 justify-between">
            <p className="w-1/4 font-semibold text-gray-400">3 stars</p>
            <div className=" py-0.5 w-full md:w-full bg-gray-300 rounded-full"></div>
            <p className='w-1/4 font-semibold text-gray-400 text-end'>0%</p>
          </div>

          <div className="flex flex-row container my-4 space-x-2 justify-between">
            <p className="w-1/4 font-semibold text-gray-400">2 stars</p>
            <div className=" py-0.5 w-full md:w-full bg-gray-300 rounded-full"></div>
            <p className='w-1/4 font-semibold text-gray-400 text-end'>0%</p>
          </div>

          <div className="flex flex-row container my-4 space-x-2 justify-between">
            <p className="w-1/4 font-semibold text-gray-400">1 star</p>
            <div className=" py-0.5 w-full md:w-full bg-gray-300 rounded-full"></div>
            <p className='w-1/4 font-semibold text-gray-400 text-end'>0%</p>
          </div>
        </div>

      </div>

      <div id="reviews" className="container mx-auto">
        <div id="header" className="">
          <h2 className='font-bold container text-2xl my-4'>
            Reviews (2)
          </h2>

          <div id="reviews" className="flex flex-col container mx-auto space-y-6">
            {reviewData.map((review, index) => (
              <div className='border-b-2' key={index}>
                <div className="flex flex-row py-4 space-x-2">
                  <p className="font-semibold">{review.name}</p>
                  <p className="font-semibold text-gray-400">{review.date}</p>
                </div>
                <div className="container mx-auto text-start pb-6 font-semibold">
                 {review.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews