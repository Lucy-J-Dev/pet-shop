import React from "react";
import "./itemlist.css";
import { Item } from "../Item/Item";

export const ItemList = ({ productos: products = [] }) => {
    return (
        <div className="container">
            <h3>Nuestros Productos</h3>
            <hr />
            <div className="fila">
                {products.map((product) => (
                    <Item {...product} key={product.id} />
                ))}
            </div>
        </div>
    );
};
