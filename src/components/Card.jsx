"use client";
import { useEffect, useState } from "react";
import { contextGlobal } from "./contextoGlobal";

export default function Card({ producto }) {
  const { setState, state } = contextGlobal();
  const [cantidad1, setCantidad] = useState(1);

  const handleAdd = () => {
    // Verificamos si existe el producto en el arreglo.
    const productoExistente = state.find((e) => e.nombre === producto.nombre);

    // Si el producto existe, incrementamos su cantidad.
    if (productoExistente) {
      productoExistente.cantidad += cantidad1;
      setState([...state]);
    } else {
      // Si el producto no existe, lo agregamos al arreglo con la cantidad especificada.
      producto = { ...producto, cantidad: cantidad1 };
      setState([...state, producto]);
    }
  };

  return (
    <div className="flex flex-col items-center w-64 p-2 rounded-sm bg-slate-200">
      <img src={producto.rutaImg} alt="" className="w-32 h-32 bg-white" />
      <p className="w-full mb-2 text-center">Nombre:{producto.nombre}</p>
      <p className="w-full mb-4 text-center">Precio $: {producto.precio}</p>
      <button
        className="p-1 text-white bg-blue-400 rounded-sm"
        onClick={handleAdd}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
