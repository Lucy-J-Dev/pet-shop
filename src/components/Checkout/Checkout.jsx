import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getFirestore } from "../../firebase/config";
import firebase from "firebase";
import "firebase/firestore";

export const Checkout = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const orden = {
      buyer: {
        email,
        nombre,
        apellido,
        telefono,
      },
      item: carrito,
      total_price: precioTotal(),
      data: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    // ===========================================
    // Codigo que no usa firestore

    vaciarCarrito();

    Swal.fire({
      icon: "success",
      title: "Su compra se realizo con éxito",
      text: `Guarde su número de compra: ${crypto.randomUUID()}`,
    });

    // ===========================================
    // Codigo que usa firestore

    // const db = getFirestore();
    // const ordenes = db.collection("ordenes");

    // ordenes
    //   .add(orden)
    //   .then((res) => {
    //     vaciarCarrito();

    //     Swal.fire({
    //       icon: "success",
    //       title: "Su compra se realizo con éxito",
    //       text: `Guarde su número de compra: ${res.id}`,
    //     });
    //   })
    //   .catch((error) => console.log(error))
    //   .finally(() => console.log("Operación finalizada"));

    // carrito.forEach((item) => {
    //   const docRef = db.collection("Productos Pet Shop").doc(item.id);

    //   docRef
    //     .get()
    //     .then((doc) => {
    //       docRef.update({
    //         stock: doc.data().stock - item.counter,
    //       });
    //     })
    //     .catch((error) => console.log(error));
    // });
  };

  return (
    <div>
      <h3>Terminar compra</h3>
      <hr />

      <form onSubmit={handleSubmit} className="container mt-3">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre} />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" className="form-control" onChange={(e) => setApellido(e.target.value)} value={apellido} />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input type="text" className="form-control" onChange={(e) => setTelefono(e.target.value)} value={telefono} />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Finalizar
        </button>
        <Link to="/cart" className="btn btn-info">
          Volver al carrito
        </Link>
      </form>
    </div>
  );
};
