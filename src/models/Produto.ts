import type Categoria from "./Categoria";

export default interface Produto{
  id:number,
  nome:string,
  detalhes:string,
  perco:number,
  foto:string,
  categoria: Categoria|null
}