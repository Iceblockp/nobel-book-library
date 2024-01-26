import React from 'react'

const BookListComponents = ({data}) => {
  return (
    <div className='w-full group border-b border-gray-500 '>
        <div className=' view relative'>
        <div className=' w-full absolute h-full hover:animate-pulse  shadow-gray-500 group-hover:shadow-[0_0_10px_1px] bg-gradient-to-r from-gray-500 to-gray-200 -z-20 '></div>
            <img className=' group-hover:book h-[300px] w-[300px] ' src={data.image} alt="something.jpg" />
            
        </div>
        <div>
            <h1 className=' mt-5 text-lg font-bold text-center font-mono '>{data.book}</h1>
            <h2 className=' text-sm text-gray-500 text-right '>{data.author}</h2>
        </div>
        <div>
            <div className=' text-gray-700 line-clamp-3 text-justify '>{data.description}</div>
        </div>
    </div>
  )
}

export default BookListComponents