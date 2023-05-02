import React from "react";
import { Button } from "react-bootstrap";
import { BsFillTrash3Fill } from "react-icons/bs";

export const CartScreen = () => {
    return (
        <div className="containe my-5">
            <h3>Resumen de Compras</h3>
            <hr />
            <div className="listado">
                <p>Productos</p>
                <p>$</p>
                <p>Cantidad: </p>
                <Button className="btn btn-danger">
                    <BsFillTrash3Fill />
                </Button>
            </div>
        </div>
    );
};
