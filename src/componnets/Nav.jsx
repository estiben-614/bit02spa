import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import arepasLaTataNegro from '../assets/arepasLaTataNegro.png'
import menuIcono from '../assets/menu.png'

//Recibimos el inicioSesion y su función de cambio de estado desde App.jsx
export const Nav = ({inicioSesion, setInicioSesion}) => {

  const navigation=useNavigate()
  let salida=''

  //Función para cerrarSesión
  const cerrarSesión=()=>{
    //Eliminamos el token de inicio de sesión
    localStorage.removeItem('token')

    //Cambiamos el estado a no logueado
    setInicioSesion(false)

    //Redirigimos al inicio
    navigation('/')
  }

  //Si no hay un inicio de sesión
  if(!inicioSesion){
    salida= <>
          <li><Link to='/iniciarSesion'>Iniciar sesión</Link></li>
          <li><Link to='/registro'>Registrarse</Link></li>
    </>

  }
  else{
    salida=<>
      <li><Link to='/privado'>Privado</Link></li>
      <li><button onClick={cerrarSesión}> Cerrar sesión </button></li>
    </>

  }
  return (

    <>
    <nav className='menu'> 
        
        <img className='logo' src={arepasLaTataNegro} alt="" />
        <input type="checkbox" id="check"/>
        <label htmlFor="check" class="checkbtn">
            <img src={menuIcono} className="menuIcono"  alt=""/>
        </label>
    
        {/* Va a la ruta que se creó en App.jsx */}
        <ul>
          <li><Link to='/'>Inicio</Link></li>
          {salida}
        </ul>
    </nav>

    
    
    
    
    </>
  )
}
