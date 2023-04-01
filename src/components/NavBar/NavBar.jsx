import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import logoTienda from "../../img/logoTienda.png";
import "./navBar.css";

export const NavBar = () => {
    return (
        <nav>
            <div className="contenedor-logo-imagen">
                <a href="./index.html">
                    <img
                        className="logo-imagen"
                        src={logoTienda}
                        alt="Imagen principal"
                    />
                </a>
                <div>
                    <h2 className="logo logo-espacio">PetShop</h2>
                    <span className="estilo-marca-logo">cuidados con amor</span>
                </div>
            </div>
            <ul>
                <li>
                    <a href="pages/quienes-somos.html">Quienes somos</a>
                </li>
                <li>
                    <a href="pages/productos.html">Productos</a>
                </li>
                <li>
                    <a href="pages/servicios.html">Servicios</a>
                </li>
                <li>
                    <a href="pages/contactenos.html">Contactenos</a>
                </li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </nav>
    );
};
