import React, { useState, useEffect } from "react";
import { getFirestore } from "../../firebase/config";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { CustomSpinner } from "../CustomSpinner/CustomSpinner";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const itemDb = getFirestore()
            .collection("Productos Pet Shop")
            .doc(itemId);

        itemDb
            .get()
            .then((doc) => setItem({ id: doc.id, ...doc.data() }))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, [itemId]);

    return (
        <>
            {loading ? (
                <CustomSpinner />
            ) : (
                <ItemDetail {...item} />
            )}
        </>
    );
};
