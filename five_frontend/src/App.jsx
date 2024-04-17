import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LayoutIndex from './layout/LayoutIndex'
import Index from './pages/Index'
import Producto from './pages/producto/Producto'
import Somos from './pages/somos/Somos'
import Contacto from './pages/contacto/Contacto'
import Error404 from './pages/error404/Error404'
// import './App.css'

function App() {


  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <LayoutIndex/>} />
          <Route index element={ <Index/> }/>
          <Route path='producto' element={ <Producto/> }/>
          <Route path='somos' element={ <Somos/> }/>
          <Route path='contacto' element={ <Contacto/> }/>
          <Route path='*' element={ <Error404/> }/>
        </Routes>
      </BrowserRouter>

  )
}

export default App
