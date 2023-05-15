import "./ItemCount.css";
import Button from "react-bootstrap/Button";

export const ItemCount = ({ max, cantidad, modify }) => {
    const restar = () => {
        if (cantidad > 1) {
            modify(cantidad - 1);
        }
    };

    const sumar = () => {
        if (cantidad < max) {
            modify(cantidad + 1);
        }
    };
    return (
        <>
            <h5>{cantidad}</h5>
            <div>
                <Button className="btn" variant="primary" onClick={restar}>
                    -
                </Button>{" "}
                <Button className="btn" variant="primary" onClick={sumar}>
                    +
                </Button>{" "}
            </div>
        </>
    );
};
