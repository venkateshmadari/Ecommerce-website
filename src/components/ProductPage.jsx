import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/Cart';
import Preloader from '../preloader/Preloader';
import { FaStar } from "react-icons/fa";
import { ProductsContext } from './FetchData';

export default function ProductPage() {
  const navigate = useNavigate();
  const { filteredProduct, isLoading, } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  // const handleClick = (product) => {
  //   // You can pass product details if needed for the next page
  //   navigate('/ProductDetails', { state: { product } });
  // };

  return (
    <div className='flex flex-col justify-center bg-gray-100 z-10'>
      <Toaster />
      <div>
        {isLoading ? (
          <Preloader />
        ) : (
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 mt-12'>
            {filteredProduct.map((product) => (
              <div className="relative md:m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md" key={product.id} >
                <a className="relative mx-3 mt-3 flex items-center justify-center h-60 overflow-hidden rounded-xl" href="#">
                  <img className="object-contain w-[100%] h-[100%] mix-blend-multiply" src={product.thumbnail} alt="product image" />
                  {/* <span className="absolute top-0 left-0 m-2 rounded bg-black px-2 py-[3px] text-center text-xs font-medium text-white">{product.discountPercentage}% OFF</span> */}
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <span className="block text-xs font-medium tracking-widest uppercase text-violet-600">{product.category}</span>
                    <h5 className="text-lg text-slate-900 whitespace-nowrap overflow-hidden text-ellipsis">{product.title}</h5>
                    <p className='mt-2 text-gray-600 text-sm whitespace-nowrap text-ellipsis overflow-hidden'>{product.description}</p>
                  </a>
                  <div className="mt-2 mb-5 flex items-center ">
                    <p>
                      <span className="text-xl font-bold text-slate-900">&#8377;{product.price}</span>
                    </p>
                    <span className="mr-2 ml-3 border border-gray-200 shadow-lg rounded-2xl px-2.5 py-0.5 text-xs font-semibold flex items-center gap-1">
                      {product.rating}
                      <FaStar className='text-yellow-300' />
                    </span>
                  </div>
                  <div className='mt-6 flex justify-center items-center'>
                    <button onClick={() => { addToCart(product); toast.success('Added to Cart Successfully!') }} className='p-3 bg-black text-white text-xs font-bold uppercase rounded w-[100%] flex justify-center items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
