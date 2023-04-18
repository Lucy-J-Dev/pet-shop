import React, { useEffect,useState } from 'react';
import {ImSpinner} from 'react-icons/im'
import { pedirProductos } from "../../helpers/pedirProductos";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = (greating) => {

    const [items, setItems] =useState ([])

    const [loading, setLoading] =useState (false)

    useEffect(() =>{

        setLoading(true)
        pedirProductos()
        .then((res) =>{
            setItems(res)
            console.log(res)
        })
        .catch((error)=> console.log (error))
        .finally(()=>{setLoading(false)})
    }, [])

    return (
        <>
        {
            loading
            ?<ImSpinner/>     
            :<ItemList productos={items}/>
        }            
        </>
    )}  
     