import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export const PaginaPrivada = ({inicioSesion,setInicioSesion}) => {

  const navigation=useNavigate()
  //Estado para guardar el nombre
  const [nombre, setNombre] = useState(null)

  //Recuperemos la info del token
  useEffect(() => {
    const token=JSON.parse(localStorage.getItem('token'))
    //Si existe el token y inicioSesion es true
    if(token && inicioSesion==true){
      //Cambianos el nombre con la info del token
      setNombre(token.name)
      console.log(token.name)
    }
    //Si no lo redirigimos 
    else{
      navigation('/iniciarSesion')
    }
    
  }, [])
  
  return (
    <div>Bienvenido ,{nombre  }</div>
  )
}
