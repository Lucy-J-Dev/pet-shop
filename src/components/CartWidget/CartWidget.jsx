import React, { useContext } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
    const { calcularCantidad } = useContext(CartContext);

    return (
        <button
            type="button"
            className="btn btn-primary position-relative btn-scale-color"
        >
            <CgShoppingCart />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                {calcularCantidad()}
            </span>
        </button>
    );
};
