import React from "react";
import "./ItemListContainer.css";

export const ItemListContainer = (props) => {
    return (
        <div className="text-center">
            <h2>{props.saludo}</h2>
        </div>
    );
};
