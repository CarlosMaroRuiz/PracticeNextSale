"use client";
import { useEffect, useState } from "react";
import { contextGlobal } from "./contextoGlobal";
import ListProducts from "./ListProducts";
export default function Cart() {
    const[ver,setVer] = useState(false);
    const{state} = contextGlobal();
   
      useEffect(()=>{
          return () => {
          };
    
      },[state])

      const visualizar = ()=>{
          setVer(!ver);
      }
  return (
    <>
      <div className="absolute flex items-center justify-center p-1 bg-green-300 rounded-full w-7 h-7 right-1 top-1">{state.length}</div>
      <button className="p-2 text-white rounded-sm bg-sky-400" onClick={visualizar}>Carrito</button>
       {(ver) && <ListProducts/>}
    </>
  );
}
