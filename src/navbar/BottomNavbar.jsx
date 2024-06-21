import React, { useEffect, useState } from "react";
import {
    IoSettingsSharp,
    IoHome,
    IoHomeOutline,
    IoSettingsOutline,
    IoCartOutline,
    IoCart,
    IoCartSharp,
} from "react-icons/io5";
import { RiShoppingBagFill, RiShoppingBag4Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";


import './BottomNavbar.css'
import { Link } from "react-router-dom";

const BottomNavbar = () => {
    const [activeItem, setActiveItem] = useState("Home");
    const [showBottomNavbar, setshowBottomNavbar] = useState(false)
    const handleItemClick = (item) => {
        setActiveItem(item);
    };
    useEffect(() => {
        const screenSize = () => {
            window.innerHeight < 767 ? setshowBottomNavbar(true) : setshowBottomNavbar(false)
        }
        screenSize();
    })

    return (
        <nav className="z-[5000] bottom-navbar">
            <div className="nav-box ">
                <ul className="nav-container">

                    <li className={`nav__item ${activeItem === "Profile" ? "active" : ""}`}>
                        <a href="#Profile" className="nav__item-link" onClick={() => handleItemClick("Profile")}>
                            <div className="nav__item-icon">
                                {activeItem === "Profile" ? (
                                    <GiHamburgerMenu className="text-black" />
                                ) : (
                                    <RxHamburgerMenu className="text-black" />
                                )}
                            </div>
                            <span className="nav__item-text">Menu</span>
                        </a>
                    </li>
                    <li className={`nav__item ${activeItem === "Messages" ? "active" : ""}`}>
                        <a href="#Messages" className="nav__item-link" onClick={() => handleItemClick("Messages")}>
                            <div className="nav__item-icon">
                                {activeItem === "Messages" ? (
                                    <FaHeart className="text-black" />
                                ) : (
                                    <FaRegHeart className="text-black" />
                                )}
                            </div>
                            <span className="nav__item-text">Wishlist</span>
                        </a>
                    </li>
                    <li className={`nav__item ${activeItem === "Home" ? "active" : ""}`}>
                        <Link to='/'>
                            <a href="#Home" className="nav__item-link" onClick={() => handleItemClick("Home")}>
                                <div className="nav__item-icon">
                                    {activeItem === "Home" ? (
                                        <IoHome className="text-black" />
                                    ) : (
                                        <IoHomeOutline className="text-black" />
                                    )}
                                </div>
                                <span className="nav__item-text">Home</span>
                            </a>
                        </Link>
                    </li>
                    <li className={`nav__item ${activeItem === "Help" ? "active" : ""}`}>
                        <Link to='/cart' >
                            <a href="#Help" className="nav__item-link" onClick={() => handleItemClick("Help")}>
                                <div className="nav__item-icon">
                                    {activeItem === "Help" ? (
                                        <RiShoppingBagFill className="text-black" />
                                    ) : (
                                        <RiShoppingBag4Line className="text-black" />
                                    )}
                                </div>
                                <span className="nav__item-text">Cart</span>
                            </a>
                        </Link>
                    </li>
                    <li className={`nav__item ${activeItem === "Settings" ? "active" : ""}`}>
                        <a href="#Settings" className="nav__item-link" onClick={() => handleItemClick("Settings")}>
                            <div className="nav__item-icon">
                                {activeItem === "Settings" ? (
                                    <IoSettingsSharp className="text-violet" />
                                ) : (
                                    <IoSettingsOutline className="text-black" />
                                )}
                            </div>
                            <span className="nav__item-text">Settings</span>
                        </a>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default BottomNavbar;
