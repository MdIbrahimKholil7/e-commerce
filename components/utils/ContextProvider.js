import React, { createContext, useState, useRef, useEffect } from "react";


const ProductContext = createContext  ();

const ContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    
    return (
        <ProductContext.Provider
            value={{
                setCartItems,
                cartItems
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export { ContextProvider, ProductContext };
