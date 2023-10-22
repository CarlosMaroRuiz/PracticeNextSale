import Form from "@/components/Form";
import Stock from "@/components/Stock";
import Link from "next/link";

export default function Adminpage() {
  return (
    <div>
      <nav className="flex flex-row items-center justify-between w-full px-4 py-2 bg-slate-200">
      <h1 className="text-2xl font-bold">Vista de administrador</h1>
      <Link href="/" className="p-2 text-white bg-blue-500 rounded-sm">Volver al inicio</Link>
      </nav>
     
      <div className="flex flex-row justify-center w-full px-4 py-5 gap-x-4">
        <Form/>
        <Stock/>
      </div>
    </div>
  )
}
