"use client";
import { contextGlobal } from "./contextoGlobal"
import Card from "./Card"

export default function ContainProducts() {
     //esta variables son las del context
  const {products,setProducts} = contextGlobal();
  return (
    <div className='flex flex-row w-full px-4 mt-10 gap-x-4'>
          {
            products.map((e,i)=>{
                return <Card producto={e} key={i}/>
            })
          }
        </div>
  )
}
