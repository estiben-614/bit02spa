
import './App.css'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import { Nav } from './componnets/Nav'
import { PaginaInicio } from './componnets/PaginaInicio'
import { PaginaNoEncontrada } from './componnets/PaginaNoEncontrada'
import { PaginaRegistro } from './componnets/PaginaRegistro'
import { PaginaIniciarSesion } from './componnets/PaginaIniciarSesion'
import { PaginaPrivada } from './componnets/PaginaPrivada'
import { useEffect, useState } from 'react'



function App() {
  
  //Creemos un estado para validar si se hizo o no un inicio de sesión
  const [inicioSesion, setInicioSesion] = useState(false)

  //Verifiquemos en el ciclo de vida ese estado
  useEffect(() => {
    console.log({inicioSesion})

  }, [])
  
  // Pasemos como props el inicioSesion y su función para el cambio de estado

  return (
    <>

    <BrowserRouter>
      <Nav inicioSesion={inicioSesion} setInicioSesion={setInicioSesion}></Nav>
      <Routes>
        {/* Element es el elemento que quiere visitar  */}
        <Route path='/' element={<PaginaInicio></PaginaInicio>}/>
        <Route path='/iniciarSesion' element={<PaginaIniciarSesion inicioSesion={inicioSesion} setInicioSesion={setInicioSesion}></PaginaIniciarSesion>}/>
        <Route path='/registro' element={<PaginaRegistro inicioSesion={inicioSesion} setInicioSesion={setInicioSesion}></PaginaRegistro>}/>
        <Route path='/privado' element={<PaginaPrivada inicioSesion={inicioSesion} setInicioSesion={setInicioSesion}></PaginaPrivada>}/>
        <Route path='*' element={<PaginaNoEncontrada></PaginaNoEncontrada>}/>
        
      </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App
