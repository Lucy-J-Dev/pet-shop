import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { pedirProductos } from "../../helpers/pedirProductos";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(false);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        pedirProductos()
            .then((res) => {
                const products = categoryId 
                    ? res.filter((product) => product.categoria === categoryId) 
                    : res;
                setItems(products);
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    return (
        <>
            { loading 
                ? (<Spinner animation="border" />) 
                : (<ItemList productos={items} />)
            }
        </>
    );
};
