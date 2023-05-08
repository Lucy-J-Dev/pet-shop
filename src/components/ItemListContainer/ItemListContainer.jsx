import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
// import { pedirProductos } from "../../helpers/pedirProductos";
import { getFirestore } from "../../firebase/config";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(false);

    // setLoading(true);
    // pedirProductos()
    // .then((res) => {
    //     const products = categoryId
    //         ? res.filter((product) => product.categoria === categoryId)
    //         : res;
    //     setItems(products);
    // })
    // .catch((error) => console.log(error))
    // .finally(() => {
    //     setLoading(false);
    // });

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();

        const productosPetShop = db.collection("Productos Pet Shop");

        productosPetShop
            .get()
            .then((res) => {
                const newItem = res.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                console.table(newItem);
                setItems(newItem);
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    return (
        <>
            {loading ? (
                <Spinner animation="border" />
            ) : (
                <ItemList productos={items} />
            )}
        </>
    );
};
