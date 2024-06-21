import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         setIsLoading(true);
    //         try {
    //             const response = await fetch('https://dummyjson.com/products?limit=194');
    //             const data = await response.json();
    //             setProducts(data.products);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };
    //     fetchProducts();
    // }, []);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products?limit=194');
                setProducts(response.data.products);
                setFilteredProduct(response.data.products);
                console.log(setFilteredProduct)
            } catch (error) {
                console.error("Failed to fetch products", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            const filtered = products.filter(product => product.category === selectedCategory);
            setFilteredProduct(filtered);
        } else {
            setFilteredProduct(products);
        }
    }, [selectedCategory, products]);
    useEffect(() => {
        console.log("products", products)
    })
    return (
        <ProductsContext.Provider value={{ products, filteredProduct, setSelectedCategory, setFilteredProduct, isLoading }}>
            {children}
        </ProductsContext.Provider>
    );
    
};
