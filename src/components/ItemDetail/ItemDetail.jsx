import React from "react";
import { Card, Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({
    id,
    marca,
    descripcion,
    precio,
    imagen,
    categoria,
}) => {
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
                    <ItemCount />
                    <br />
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    );
};
