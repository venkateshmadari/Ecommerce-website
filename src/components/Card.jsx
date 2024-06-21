import React, { useState, useEffect } from 'react'

function Card() {
    const [data, setData] = useState([])
    async function getProducts() {
        const response = await fetch('https://dummyjson.com/products?limit=194')
        const data = await response.json()
        setData(data.products)
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div className=' flex items-center justify-center flex-wrap w-[100%] '>
            {
                data.map((item) => (
                    <div className="relative m-10 flex  w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                        <a className="relative mx-3 mt-3 flex items-center justify-center h-60 overflow-hidden rounded-xl" href="#">
                            <img
                                className="object-contain w-[100%] h-[100%] mix-blend-multiply"
                                src={item.thumbnail}
                                alt="product image"
                            />
                            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{item.discountPercentage}% OFF</span>
                        </a>
                        <div className="mt-4 px-5 pb-5">
                            <a href="#">
                                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{item.category}</span>
                                <h5 className="text-lg text-slate-900 whitespace-nowrap overflow-hidden text-ellipsis">{item.title}</h5>
                                <p className='mt-2 text-gray-600 text-sm whitespace-nowrap text-ellipsis overflow-hidden'>{item.description}</p>

                            </a>
                            <div className="mt-2 mb-5 flex items-center ">
                                <p>
                                    <span className="text-xl font-bold text-slate-900"> &#8377;{item.price}</span>
                                </p>

                                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{item.rating}</span>

                            </div>
                            <a
                                href="#"
                                className="flex items-center justify-center rounded-md bg-black px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                Add to cart
                            </a>
                        </div>
                    </div>

                ))
            }

        </div>

    )
}

export default Card