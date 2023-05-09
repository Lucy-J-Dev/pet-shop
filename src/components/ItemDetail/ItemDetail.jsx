import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export const ItemDetail = ({
    id,
    nombre,
    marca,
    descripcion,
    precio,
    imagen,
    categoria,
    stock,
}) => {
    const navigate = useNavigate();

    const volverHaciaAtras = () => {
        navigate(-1);
    };

    const { addToCart } = useContext(CartContext)

    const [counter, setCounter] = useState(1);

    const sumarAlCarrito = () => {
        const newItem = {
            id,
            nombre,
            marca,
            descripcion,
            precio,
            imagen,
            categoria,
            counter,
        };
        console.log(newItem);
        addToCart(newItem);
    };

    return (
        <div className="item">
            <Card border="info" style={{ width: "24rem" }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    {<Card.Title>{nombre}</Card.Title>}
                    <Card.Title>{marca}</Card.Title>
                    <Card.Title>{descripcion}</Card.Title>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Facere provident quae nihil, minima minus expedita
                        atque et laudantium!.
                    </p>
                    <Card.Title>Categoria: {categoria}</Card.Title>
                    <Card.Title>$ {precio}</Card.Title>
                    <ItemCount
                        max={stock}
                        modify={setCounter}
                        cantidad={counter}
                    />
                    <br />
                    <Button onClick={sumarAlCarrito}>Agregar al carrito</Button>
                </Card.Body>
                <Button onClick={volverHaciaAtras} className="btn btn-sucess">
                    Volver atras
                </Button>
                <Link to='/cart' className='btn btn-info'>
                    Ir al carrito
                </Link>
            </Card>
        </div>
    );
};
