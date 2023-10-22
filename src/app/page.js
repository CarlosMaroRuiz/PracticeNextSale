import Card from '@/components/Card'
import ContainProducts from '@/components/ContainProducts'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
     <div>
      <Navbar/>
       <main className="flex flex-col items-center pt-10">
        <h1 className='text-3xl font-black'>Tienda</h1>
        <ContainProducts/>
      </main>
     </div>

  )
}
