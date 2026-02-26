import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Services";

function FormCategoria() {

  const navigate = useNavigate()
  const[categoria,setCategoria] = useState<Categoria>({} as Categoria)
  const {id} = useParams<{id:string}>();

  async function buscarCateoriasPorid(id:string){
    try{
      await buscar(`/categorias${id}`,setCategoria)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(error:any){
      if(error.toString().includes("401"))
      alert("caegoria não escontrada")
    }
  }

  useEffect(()=>{
    if(id!==undefined){
      buscarCateoriasPorid(id)
    }
  },[id])


  function atualizarEstado(e:ChangeEvent<HTMLInputElement>){
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  function retornar(){
    navigate('/categorias')
  }

  async function gerarNovaCategoria(e:ChangeEvent<HTMLFormElement>){
    e.preventDefault()

    if(id!== undefined){
      try{
        await atualizar(`/cateegorias`,categoria,setCategoria,)
        alert("A Categoria foi atualizada com sucesso")
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      catch(error:any){
        if(error.toString().includes('401'))
        alert("erro ao atuzalizar a categoria")  
      }
    }else{
      try{
        await cadastrar(`/categorias`,categoria,setCategoria)
        alert("A categoria doi cadastrada com sucesso")
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }catch(error:any){
        if(error.toString().includes("401"))
        alert("Categoria não cadastrada")
      }
    }
    retornar()
  }
    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição do Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua Categoria"
                        name='descricao'
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>)=>atualizarEstado(e)}
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    <span> {id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;