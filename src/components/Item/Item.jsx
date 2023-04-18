import React from "react";
import './item.css'
import { Card, Button } from "react-bootstrap";

export const Item = ({ id, marca, descripcion, precio, imagen }) => {
    return (
        <div className="item">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{id}</Card.Title>
                    <Card.Title>{marca}</Card.Title>
                    <Card.Text>{descripcion}</Card.Text>
                    <Card.Title>{precio}</Card.Title>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    );
};
