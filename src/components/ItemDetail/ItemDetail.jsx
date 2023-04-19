import React from "react";
import { Card, Button } from "react-bootstrap";


export const ItemDetail = ({ id, marca, descripcion, precio, imagen, category }) => {
    return (
        <div className="item">
            <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src={imagen}/>
                <Card.Body>
                    <Card.Title>{id}</Card.Title>
                    <Card.Title>{marca}</Card.Title>
                    <Card.Title>{descripcion}</Card.Title>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere provident quae nihil, minima minus expedita atque et laudantium!.</p>
                    <Card.Title>Categoria: {category}</Card.Title> 
                    <Card.Title>$ {precio}</Card.Title>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    );
};
