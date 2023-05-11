import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillTrash3Fill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import "./CartScreen.css";

export const CartScreen = () => {
    const { carrito, precioTotal, removerItem, vaciarCarrito } =
        useContext(CartContext);

    return (
        <div className="container my-4">
            {
                carrito.length === 0 ? (
                    <>
                        <h3>Carrito vacio</h3>
                        <hr />
                        <Link to="/" className="btn btn-primary">
                            Volver a comprar
                        </Link>
                    </>
                ) : (
                    <>
                        <h3>Resumen de compras</h3>
                        <hr />
                        {carrito.map((prod) => (
                            <>
                                <div key={prod.id} className="listado">
                                    <p>Productos: {prod.descripcion}</p>
                                    <p>${prod.precio}</p>
                                    <p>Cantidad: {prod.counter}</p>
                                    <Button
                                        className="btn btn-primary"
                                        onClick={() => removerItem(prod.id)}
                                    >
                                        <BsFillTrash3Fill />
                                    </Button>
                                </div>
                            </>
                        ))}
                        <hr />
                        <strong>Precio total: ${precioTotal()}</strong>
                        <hr />
                        <Button className="btn btn-primary" onClick={vaciarCarrito}>
                            Vaciar Carrito
                        </Button>
                        <Link className="btn btn-info" to="/checkout">
                            Terminar compra
                        </Link>
                    </>
                )
            }
        </div>
    );
};
