import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { getFirestore } from "../../firebase/config";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(false);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();

        const productosPetShop = categoryId
            ? db.collection("Productos Pet Shop").where("categoria", "==", categoryId)
            : db.collection("Productos Pet Shop");

        productosPetShop.get()
            .then((res) => {
                const newItem = res.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                setItems(newItem);
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId, setLoading]);

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
