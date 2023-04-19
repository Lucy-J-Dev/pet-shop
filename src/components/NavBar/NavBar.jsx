import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
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

            <Link to="/">Inicio</Link>
            <Link to="/">Quienes somos</Link>
            <Link to="/productos/Alimentos y Snacks">Alimentos y Snacks</Link>
            <Link to="/productos/Higuiene y Belleza">Higuiene y Belleza</Link>
            <Link to="/productos/Juguetes y Entretenimiento">Juguetes y Entretenimiento</Link>
            <Link to="/productos/Camas y Estar">Camas y Estar</Link>
            <Link to="/counter">Contador</Link>
            <Link to="/cart"><CartWidget/></Link>
            

            {/* <ul>
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
            </ul> */}
        </nav>
    );
};
