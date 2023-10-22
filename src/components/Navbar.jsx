"use client"
import Link from "next/link"
import Cart from "./Cart"
export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between w-full px-5 py-3 bg-slate-200">
        <h1 className="text-2xl font-bold">Tienda</h1>
        <div className="flex flex-row items-center gap-x-10">
            <Link href={"/admin"} className="p-2 bg-yellow-400 rounded-none">Admin</Link>
            <Cart/>
        </div>
    </nav>
  )
}
