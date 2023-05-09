import React, { useState, useEffect } from "react";
// import { pedirProductos } from "../../helpers/pedirProductos";
import { getFirestore } from "../../firebase/config";
import Spinner from "react-bootstrap/Spinner";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    const [loading, setLoading] = useState(false);

    const { itemId } = useParams();
   
    // setLoading(true);
        // pedirProductos()
        //     .then((res) => {
        //         setItem(res.find((prod) => prod.id === Number(itemId)));
        //     })
        //     .catch((error) => console.log(error))
        //     .finally(() => {
        //         setLoading(false);
        //     });
    useEffect(() => {
        setLoading(true)

        const db = getFirestore()

        const productosPetShop = db.collection("Productos Pet Shop")

        const item = productosPetShop.doc(itemId)

        item.get()
        .then((doc) =>{
            setItem({
              id:doc.id, ...doc.data()  
            })
        })
        .catch((error) => console.log(error))
        .finally(() =>{
            setLoading(false)
        })
     
    }, [itemId]);

    return (
        <section>
            {loading ? (
                <Spinner animation="border" />
            ) : (
                <ItemDetail {...item} />
            )}
        </section>
    );
};
