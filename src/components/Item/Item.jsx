import React from "react";
import './item.css'
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({ id, marca, descripcion, precio, imagen, category }) => {
    return (
        <div className="item">
            <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{id}</Card.Title>
                    <Card.Title>{marca}</Card.Title>
                    <Card.Title>{descripcion}</Card.Title>
                    <Card.Title> Categoria: {category}</Card.Title> 
                    <Card.Title>$ {precio}</Card.Title>
                    <Link to={`/detail/${id}`}>
                    <Button variant="primary">Ver más detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};
