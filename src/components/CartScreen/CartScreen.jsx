import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { BsFillTrash3Fill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

export const CartScreen = () => {
    const { carrito, precioTotal, removerItem } = useContext(CartContext);

    return (
        <div className="container">
            {carrito.map((prod) => (
                <>
                    <div className="listado">
                        <p>Productos: {prod.descripcion}</p>
                        <p>$ {prod.precio}</p>
                        <p>Cantidad: {prod.counter}</p>
                    </div>
                    <Button
                        className="btn btn-primary"
                        onClick={() => removerItem(prod.id)}
                    >
                        <BsFillTrash3Fill />
                    </Button>
                </>
            ))}
            <hr />
            <strong>Precio total: ${precioTotal()}</strong>
        </div>
    );
};
