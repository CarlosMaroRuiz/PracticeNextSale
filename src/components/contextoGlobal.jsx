"use client"
import React, { useContext,useState } from "react";

//se crea el contexto
const MyContext = React.createContext();

// se crea un componente que proporciona el contexto
export const GlobalState = ({ children }) => {
  const [state, setState] = useState([]);
  const [products,setProducts] = useState([
    {nombre:"chile",precio:15,rutaImg:"https://definicion.de/wp-content/uploads/2010/06/chile-1.jpg"},
    {nombre:"sandia",precio:80,rutaImg:"data:image/jpeg;base64,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"},
    {nombre:"coca cola",precio:18,rutaImg:"https://subodega.mx/articulo/6906/01.webp"},
  ]);

  return (
    <MyContext.Provider value={{state,setState,products,setProducts}}>
      {children}
    </MyContext.Provider>
  );
};

export const contextGlobal = ()=>{
    return useContext(MyContext);
}