import React, {useState} from "react";
import { Card, Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";


export const ItemDetail = ({
    id,
    marca,
    descripcion,
    precio,
    imagen,
    categoria,
    stock
}) => {
    
    const navigate = useNavigate()

    const volverHaciaAtras = () => {
        navigate(-1)
    }

    const [counter, setCounter] = useState(1)

    const sumarAlCarrito = () => {
        const newItem = {
             id,
             marca,
             descripcion,
             precio, 
             imagen,
             categoria,
             counter
        }
        console.log(newItem)
    }


    
    return (
        <div className="item">
            <Card border="info" style={{ width: "24rem" }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    {/* <Card.Title>{id}</Card.Title> */}
                    <Card.Title>{marca}</Card.Title>
                    <Card.Title>{descripcion}</Card.Title>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Facere provident quae nihil, minima minus expedita
                        atque et laudantium!.
                    </p>
                    <Card.Title>Categoria: {categoria}</Card.Title>
                    <Card.Title>$ {precio}</Card.Title>
                    <ItemCount max={stock} modify={setCounter} cantidad={counter}/>
                    <br />
                    <Button onClick={sumarAlCarrito} >Agregar al carrito</Button>
                </Card.Body>
                <Button onClick={volverHaciaAtras} className='btn btn-sucess'>Volver atras</Button>
            </Card>
        </div>
    );
};
