import React, { useState } from "react";
import "./ItemCount.css";
import Button from "react-bootstrap/Button";

export const ItemCount = () => {
    const [counter, setCounter] = useState(1);

    const sumar = () => {
        if (counter < 100) {
            setCounter(counter + 1);
        }
    };

    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    return (
        <>
            <h5>Cantidad: {counter}</h5>
            <div>
                <Button className="btn" variant="primary" onClick={sumar}>
                    +
                </Button>{" "}
                <Button className="btn" variant="primary" onClick={restar}>
                    -
                </Button>{" "}
            </div>
        </>
    );
};
