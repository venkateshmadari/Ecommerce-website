import React, { useState, useEffect, useContext } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { categories } from '../components/Categories'
import { ProductsContext } from "../components/FetchData";
import './Menu.css'
import image from '../assets/menu-girl.png'
import tshirt from '../assets/tshirt.png'
import Menu2 from "./Menu2";
const menuData = [
    {
        name: 'New Arrivals',
        category: 'womens-dresses',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
        imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
    },
    {
        name: 'Basic Tops',
        category: 'tops',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
        imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
    },
    {
        name: 'Beauty',
        category: 'beauty',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
        imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
    },
];
// console.log(categories);
function Menu() {
    const { setSelectedCategory } = useContext(ProductsContext);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        navigate('/products');
        console.log('clicked');
    };


    return (
        <>
            <Menu2 />
            {/* second menu  */}

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true">
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[50deg] bg-gradient-to-tr from-purple-400 to-emerald-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div>
                    <div className="mb-12 flex items-center justify-center flex-col">
                        <h3 className="left-heading text-center text-4xl lg:text-7xl font-[400] text-black tracking-[-2px]">Exclusive <span className="left-heading text-rose-600">Women's</span> Fashion</h3>
                        <p className="text-center capitalize text-gray-600 md:text-lg text-md my-2">Trends to elevate your wardrobe</p>

                    </div>

                    <div className="flex items-center justify-around flex-wrap mb-24">
                        <div className="flex flex-wrap md:gap-12 gap-4 justify-center">
                            {menuData.map((category) => (
                                <div className="group relative text-sm flex flex-col justify-center cursor-pointer">
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100  md:h-[350px] h-[300px] aspect-square" id={category.category} onClick={() => handleCategoryClick(category.category)}>
                                        <img src={category.imageSrc} alt={category.imageAlt} className="object-cover object-center" />
                                    </div>
                                    <a href={category.href} className="mt-6 block font-medium text-gray-900">
                                        <span className="absolute inset-0 z-10" aria-hidden="true" />
                                        {category.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1 flex items-center gap-2 text-violet-600">
                                        Shop now <MdKeyboardDoubleArrowRight />
                                    </p>
                                </div>
                                // </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories ">
                {categories.map(category => (
                    <button key={category} onClick={() => handleCategoryClick(category)} className="mx-4">
                        {category}
                    </button>
                ))}
            </div>
        </>
    );
}

export default Menu;
