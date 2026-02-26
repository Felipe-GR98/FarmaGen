import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FormCategoria from './Components/categoria/fromcategoria/FromCategori'
import ListaCategoria from './Components/categoria/listacategoria/ListaCategoria'
import Footer from './Components/footer/footer'
import Home from './Components/home/home'
import NavBar from './Components/navbar/NavBar'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <div className='min-h-[80vh]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/categorias" element={<ListaCategoria />} />
        <Route path="/cadastrarcategoria" element={<FormCategoria />} />
        <Route path="/editarcategoria/:id" element={<FormCategoria />} />
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
