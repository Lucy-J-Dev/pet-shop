import React from 'react';
import { CgShoppingCart } from "react-icons/cg";

export const CartWidget = () => {
    return (
        <button
            type="button"
            className="btn btn-primary position-relative btn-scale-color"
        >
            <CgShoppingCart />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                1
            </span>
        </button>
    );
};
