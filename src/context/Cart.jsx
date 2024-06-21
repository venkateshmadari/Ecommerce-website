import React, { useState, useEffect, createContext } from 'react'
export const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

    const addToCart = (item) => {
        const isItemInCart = cartItems.find((e) => e.id === item.id)
        if (isItemInCart) {
            setCartItems(cartItems.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }])
        }
    }
    const removeFromCart = (item) => {
        if (item.quantity > 1) {
            setCartItems(cartItems.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)));
        } else {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
        }
    }

    const clearCart = () => {
        setCartItems([])
    }

    const getCartTotal = () => {
        const cost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
        return cost.toFixed(2)
    }

    const directDeleteFromCart = (item) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
    }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems")
        if (cartItems) {
            setCartItems(JSON.parse(cartItems))
        }
    }, [])

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getCartTotal,
                directDeleteFromCart
            }}>
            {children}
        </CartContext.Provider>
    )
}
