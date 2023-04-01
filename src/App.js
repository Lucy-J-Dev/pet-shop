import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
    return (
        <>
            <body className="container">
                <NavBar />
                <ItemListContainer saludo="Hola PetShop, tienda de mascotas" />
            </body>
        </>
    );
}

export default App;
