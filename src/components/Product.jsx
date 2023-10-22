import { contextGlobal } from "./contextoGlobal"

export default function Product({producto}) {

    //esta variables son las del context
  const {products,setProducts} = contextGlobal();

  const deleted = ()=>{
      const arreglo = products.filter((e) => e.nombre != producto.nombre);
       setProducts([...arreglo])
  }
  return (
    <div className="flex flex-row items-center p-3 bg-white rounded-md shadow-md h-36 w-72 shadow-black">
     <img src={producto.rutaImg} alt="" className="w-32 h-32 rounded-md"/>
     <div>
     <p>{"Producto: "+producto.nombre}</p>
     <p>{"Precio: $"+producto.precio}</p>
     <button className="text-[0.9rem] text-white bg-red-500 p-1 mt-2 rounded-sm" onClick={deleted}>Eliminar del stock</button>
     </div>
      
    </div>
  )
}
