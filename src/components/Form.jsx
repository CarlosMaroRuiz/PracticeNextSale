"use client"
import React, { useState } from "react";
import { contextGlobal } from "./contextoGlobal";

export default function Form() {
  const [producto, setProducto] = useState({
    rutaImg: "",
    nombre: "",
    precio: 0,
  });

  //esta variables son las del context
  const {products,setProducts} = contextGlobal();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validamos los datos
    if (!producto.rutaImg) {
      alert("Debes ingresar una ruta de imagen");
      return;
    }
    if (!producto.nombre) {
      alert("Debes ingresar un nombre de producto");
      return;
    }
    if (!producto.precio) {
      alert("Debes ingresar un precio");
      return;
    }
     setProducts([...products,producto]);
     console.log(products)
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center p-4 rounded-md shadow-sm bg-slate-200 w-72">
        <h2 className="font-bold">Registrar Producto</h2>
        
        <div className="flex flex-col w-full mt-5 gap-y-3">
          
      
        <input
          type="text"
          name="rutaImg"
          placeholder="Ingrese algun link imagen"
          value={producto.rutaImg}
          onChange={(e) => setProducto({ ...producto, rutaImg: e.target.value })}
          className="text-center text-black bg-white border border-b rounded-sm placeholder:text-black"
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          value={producto.nombreProducto}
          onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
          className="text-center text-black bg-white border border-b rounded-sm placeholder:text-black"
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={producto.precio}
          onChange={(e) => setProducto({ ...producto, precio: e.target.value })}
          className="text-center text-black bg-white border border-b rounded-none placeholder:text-black"
        />
          </div>
        <button type="submit" className="w-32 mt-5 text-white bg-sky-500">Registrar</button>
      </form>
    </div>
  );
}
