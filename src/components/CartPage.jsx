import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/Cart';
import image from '../assets/image.png'

function CartPage() {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal, directDeleteFromCart } = useContext(CartContext)

    const navigate = useNavigate();
    const backToProductPage = () => {
        navigate('/')
    }
 
    return (
        <div className="flex items-center justify-center">

            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 ">
                <h2 className="text-xl text-center font-semibold">{cartItems.length > 0 ? 'Your cart' : ''}</h2>
                {
                    cartItems.map((item) => (
                        <ul className="flex flex-col divide-y dark:divide-gray-300 " key={item.id}>
                            <li className="flex flex-col py-2 sm:flex-row sm:justify-between ">
                                <div className="flex w-full space-x-2 sm:space-x-4 p-2 rounded " style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                                    <img className="flex-shrink-0 object-contain w-24 h-26 dark:border- rounded outline-none sm:w-32 sm:h-32 border-green" src={item.thumbnail} alt={item.title} />
                                    <div className="flex flex-col justify-between w-full pb-4 mt-1">
                                        <div className="flex justify-between w-full pb-2 space-x-2">
                                            <div className="space-y-1">
                                                <h3 className="text-md font-semibold leading-snug sm:pr-8">{item.title}</h3>
                                                <p className="text-xs text-violet-600 uppercase  ">{item.category}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-md font-semibold ">&#8377;{item.price}</p>
                                            </div>
                                        </div>
                                        <div className="flex  flex-col  text-sm  ">
                                            <div className="flex gap-6 items-center  ">
                                                <button
                                                    className=" text-black text-2xl font-bold "
                                                    onClick={() => {
                                                        removeFromCart(item)
                                                    }}
                                                >
                                                    <strong>-</strong>
                                                </button>
                                                <p>{item.quantity}</p>
                                                <button
                                                    className="text-black text-2xl font-bold "
                                                    onClick={() => {
                                                        addToCart(item)
                                                    }}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div className='flex '>
                                                <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1" onClick={() => { directDeleteFromCart(item); toast.success('Product removed successfully') }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                        <rect width="32" height="200" x="168" y="216"></rect>
                                                        <rect width="32" height="200" x="240" y="216"></rect>
                                                        <rect width="32" height="200" x="312" y="216"></rect>
                                                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                                    </svg>
                                                    <span>Remove</span>
                                                </button>
                                                <button type="button" className="flex items-center px-2 py-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                                    </svg>
                                                    <span className='ml-[2px] '>Add to favorites</span>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    ))
                }
                {
                    cartItems.length > 0 ? (
                        <>
                            <div className="space-y-1 text-right">
                                <p> Total amount: <b>&#8377;  {getCartTotal()}</b></p>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button type="button" className="px-6 py-2 border rounded-md border-black" onClick={() => { backToProductPage() }}>Back
                                    <span className="sr-only sm:not-sr-only">to shop</span>
                                </button>
                                <button type="button" className="px-6 py-2 border border-red-600 rounded-md text-red-600" onClick={() => clearCart()}>
                                    <span>Clear cart</span>
                                </button>
                                <button type="button" className="px-6 py-2 border rounded-md bg-black text-white">
                                    <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className='flex items-center justify-center flex-col'>
                            <img src={image} alt="Cart Is Empty" />
                            <h1 className='text-lg text-black  capitalize'> your cart is empty </h1>
                            <button type="button" className="px-6 py-2 items-center border-black mt-4" onClick={() => { backToProductPage() }}>
                                <strong className='text-3xl md:text-xl text-violet-600'>&#8592;</strong> Back to shop
                            </button>
                        </div>
                    )
                }
            </div >

        </div>
    )
}

export default CartPage