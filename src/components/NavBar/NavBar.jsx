import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import logoTienda from "../../img/logoTienda.png";
import "./navBar.css";

export const NavBar = () => {
    return (
        <nav>
            <div className="contenedor-logo-imagen">
                <img
                    className="logo-imagen"
                    src={logoTienda}
                    alt="Imagen principal"
                />
                <div>
                    <h2 className="logo logo-espacio">PetShop</h2>
                    <span className="estilo-marca-logo">cuidados con amor</span>
                </div>
            </div>

            <Link className="link" to="/">
                Inicio
            </Link>
            <Link className="link" to="/productos/Alimentos y Snacks">
                Alimentos y Snacks
            </Link>
            <Link className="link" to="/productos/Higiene y Belleza">
                Higiene y Belleza
            </Link>
            <Link className="link" to="/productos/Juguetes y Entretenimiento">
                Juguetes y Entretenimiento
            </Link>
            <Link className="link" to="/productos/Camas y Estar">
                Camas y Estar
            </Link>
            {/* <Link to="/counter">Contador</Link> */}
            <Link className="link" to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};
