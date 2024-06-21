import React from 'react'

function Wishlist() {

    return (
        <div>

            <div className='flex items-center justify-center flex-col'>
                <img src='https://cdn.dribbble.com/userupload/8578668/file/original-49f827ba0b5c33a2b2671740508a4e6b.png?resize=1200x900&vertical=center' alt="Cart Is Empty" className='h-[500px]' />
                <h1 className='text-lg text-black  capitalize'> your cart is empty </h1>
                <button type="button" className="px-6 py-2 items-center border-black mt-4" onClick={() => { backToProductPage() }}>
                    <strong className='text-3xl md:text-xl text-violet-600'>&#8592;</strong> Back to shop
                </button>
            </div>
        </div>
    )
}

export default Wishlist