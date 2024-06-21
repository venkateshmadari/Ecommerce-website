import React, { useContext, useState } from 'react';
import { IoMdCart } from "react-icons/io";
import { CartContext } from '../context/Cart';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isInnerSubMenuOpen, setIsInnerSubMenuOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    const toggleInnerSubMenu = () => {
        setIsInnerSubMenuOpen(!isInnerSubMenuOpen);
    };
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate();
    const redirectPage = () => {
        navigate('/cart')
    }

    return (
        <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
            <nav className="relative max-w-[66rem] w-full bg-neutral-800 rounded-[28px] py-3 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto" aria-label="Global">
                <div className="flex items-center justify-between">
                    <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80 text-white" aria-label="Preline">
                        ✺ Ecommerce
                    </a>

                    <div className="md:hidden">
                        <button
                            type="button"
                            className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none"
                            onClick={toggleNav}
                            aria-controls="navbar-collapse"
                            aria-label="Toggle navigation"
                        >
                            {isNavOpen ? (
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6L6 18" />
                                    <path d="M6 6L18 18" />
                                </svg>
                            ) : (
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div id="navbar-collapse" className={`hs-collapse ${isNavOpen ? 'block' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow md:block`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7 capitalize">
                        <Link to='/'>
                            <a className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white  focus:outline-none " >
                                Home
                            </a>
                        </Link>
                        <Link>
                            <a className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white  focus:outline-none " >
                                categories
                            </a>
                        </Link>
                        <Link>
                            <a className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white  focus:outline-none " >
                                men
                            </a>
                        </Link>
                        <Link>
                            <a className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white" >
                                women
                            </a>
                        </Link>

                        <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] py-3 ps-px sm:px-3 md:py-4">
                            <button
                                type="button"
                                className="flex items-center w-full text-sm text-white  focus:outline-none focus:text-neutral-300"
                                onClick={toggleSubMenu}
                            >
                                About
                            </button>
                        </div>

                        <div>
                            <button className='group inline-flex items-center gap-x-2 py-2 px-3 bg-[#c77dff] font-medium text-sm text-neutral-800 rounded-full  capitalize'
                                onClick={() => redirectPage()}
                            >
                                <IoMdCart />
                                View cart
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
