import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../service/Services";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategoria(){

  const [categoria,setCategoria] = useState<Categoria[]>([])

  useEffect(() =>{
    buscarCategorias()
  }, [categoria.length])

  async function buscarCategorias(){
    try{
      await buscar('/categorias',setCategoria)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch(error: any){
      if(error.toString().includes('401'))
      alert('Categoria não encontrada')
    }
  }
  return(
    <>
    <div className="flex justify-center w-full my-4">
      <div className="container flex flex-col">
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {
    categoria.map((categoria) => (
    	<CardCategoria key={categoria.id} categoria={categoria}/>
    ))
}
        </div>

      </div>

    </div>
    </>
  )
}
export default ListaCategoria