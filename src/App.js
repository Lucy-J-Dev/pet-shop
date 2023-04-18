import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemCount } from "./components/ItemCount/ItemCount";
import {
    BrowserRouter as Router,
    Routes,
    Navigate,
    Route,
}from 'react-router-dom'


function App() {
   
    return (
        // <>
        //     <body className="container">
        //         <NavBar/>
        //         <ItemListContainer greating="Bienvenidos"/>
        //         <ItemCount/>
        //     </body>
        // </>

       <div className='App'>
        <Router>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/counter' element={<ItemCount/>}/>
                <Route path='*'element={<Navigate to='/'/>}/>
            </Routes>
        </Router>
        </div>
    );
}

export default App;
