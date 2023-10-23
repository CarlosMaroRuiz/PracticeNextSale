"use client";
import { useEffect, useState } from "react";
import { contextGlobal } from "./contextoGlobal";
import ListProducts from "./ListProducts";
export default function Cart() {
    const[ver,setVer] = useState(false);
    const{state} = contextGlobal();
    const [conteo,setConteo] = useState(0);
    const [mensaje,setMensaje] = useState("");
   
      useEffect(()=>{
          
        if(state.length == 0){
         setMensaje("0")
        }else{
          
          let count = state.reduce((accumulator, product) => {
            return accumulator + product.cantidad;
          }, 0); // 0 es el valor inicial del acumulador
          
          console.log(`La cantidad total de productos es: ${count}`);
          
          
          setConteo(count);
          
          if(count >= 9){
            setMensaje("+9")
          }else{
            setMensaje(conteo)
          }
        }
            
          return () => {
          };
    
      },[state,conteo])
      
      //Este use efect nos permitira contar los elementos 
      const visualizar = ()=>{
          setVer(!ver);
      }
  return (
    <>
      <div className="absolute flex items-center justify-center p-1 bg-green-300 rounded-full w-7 h-7 right-1 top-1">{mensaje}</div>
      <button className="p-2 text-white rounded-sm bg-sky-400" onClick={visualizar}>Carrito</button>
       {(ver) && <ListProducts/>}
    </>
  );
}
