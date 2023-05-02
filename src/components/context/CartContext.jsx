import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    console.log(carrito);

    const addToCart = (item) => {
        setCarrito([...carrito, item]);
    };

    const calcularCantidad = () => {
        return carrito.reduce((acc, prod) => acc + prod.counter, 0);
    };

    const precioTotal = () => {
        return carrito.reduce(
            (acc, prod) => acc + prod.precio * prod.counter,
            0
        );
    };

    const removerItem = (itemId) => {
        const newCart = carrito.filter((prod) => prod.id !== itemId);
        setCarrito(newCart);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CartContext.Provider
            value={{
                addToCart,
                calcularCantidad,
                precioTotal,
                removerItem,
                carrito,
                vaciarCarrito,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
