import React from 'react'

export const OpcionMenu = ({item,agregarCarrito}) => {
    // const agregarCarrito=(item)=>{
    //     console.log(item)
    // }
  return (

    <>
        <div className='menuOpcion'>
      
            <figure>
                <img src={item.imagen} alt={item.nombre}></img>
                <div className='nombre'> {item.nombre}</div>
                <div className='precio'>Precio : ${item.precio}</div>
                <button className='pedidos' onClick={()=>agregarCarrito(item)}>Agregar</button>
                 
            </figure>
        </div>
    </>
  )
}
