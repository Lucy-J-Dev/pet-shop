import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemCount } from "./components/ItemCount/ItemCount";
import {
    BrowserRouter as Router,
    Routes,
    Navigate,
    Route,
} from "react-router-dom";
import { CartContext } from "./components/context/CartContext";
import { useState } from "react";
import { CartScreen } from "./components/CartScreen/CartScreen";


function App() {
    const [carrito, setCarrito] = useState([]);

    console.log(carrito);

    const addToCart = (item) => {
        setCarrito([...carrito, item]);
    };

    const calcularCantidad = () => {
        return carrito.reduce((acc, prod) => acc + prod.counter, 0);
    };

    const precioTotal = () =>{
        return carrito.reduce ((acc, prod) =>acc +prod.precio * prod.counter, 0 )
    };

    const removerItem = (itemId) => {
        const newCart = carrito.filter((prod) => prod.id !== itemId)
        setCarrito(newCart) 

    }

    return (
        <CartContext.Provider value={{ addToCart, calcularCantidad, precioTotal, removerItem, carrito }}>
            <div className="App">
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route
                            path="/productos/:categoryId"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/detail/:itemId"
                            element={<ItemDetailContainer />}
                        />
                        <Route path="/counter" element={<ItemCount />} />
                        <Route  path="/cart" element={<CartScreen/>} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Router>
            </div>
        </CartContext.Provider>
    );
}

export default App;
