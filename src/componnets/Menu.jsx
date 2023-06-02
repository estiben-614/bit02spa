import React, { useEffect, useState } from 'react'
import { OpcionMenu } from './OpcionMenu'

export const Menu = ({menu}) => {

    //Creamos el estado para manejar el carrito de compras
    const [carrito, setCarrito] = useState([])
    const [totalAPagar, setTotalPagar] = useState(0)
    const [detalleProductos, setDetalleProductos] = useState([])
    const [infoProductos, setInfoProductos] = useState(null)


    //Creamos funcion para agregar al carrito
    const agregarCarrito=(item)=>{
        
        //A lo que haya en carrito, le agregamos el item seleccionado
        setCarrito([...carrito,item])    
    }

    //Recuperamos cada opción del menu para mostrarlo
    const menuCompleto=menu.map((item)=>{
        return (<>

        <OpcionMenu key={item.id} item={item} agregarCarrito={agregarCarrito} ></OpcionMenu>
            
        </>)
    })

    //Mostramos el total a pagar 
    const totalPagar=()=>{
        let suma=0

        carrito.forEach((elemento)=>{
            suma+=elemento.precio
        })
        setTotalPagar(suma)
    }
    //Me devuelve el nonbre del producto y su cantidad
    const cantidadProducto=()=>{
        const productos = {};
        for (let i = 0; i < carrito.length; i++) {
        const pedido = carrito[i];
        
        //Si existe la propiedad pedido.nombre en recuento
        if(productos[pedido.id]){
            productos[pedido.id]+=1
        }
        //Si no existe lo crea y le asigna 1
        else{
            productos[pedido.id]=1
            
        }
        }
        return (productos)
    }
    //Función para vaciar el el carrito
    const borrarCarrito=()=>{
        setCarrito([])
        setTotalPagar(0)
        setInfoProductos([])
        setDetalleProductos([])
        
    }
    
    //Funcion para el detalle al dar click en pagar
    const detallePagar=()=>{
        const lista=[]
        
        //Iteramos detalleProductos que contiene el id de cada producto y su cantidad
        if(carrito.length>0){
            
            for (const id in detalleProductos) {
                const cantidad = detalleProductos[id];
                
                //Encontramos el item de carrito con ese id
                const item = carrito.find(item => item.id == id);
                //Pasamos la cantidad al item
                item.cantidad=cantidad
                //Pasamos el item a la lista
                lista.push(item)
            
               
              
              }
              const detalle = lista.map((item) => (
                <div key={item.id}>
                  {item.nombre} ${item.precio} x {item.cantidad} = ${item.precio * item.cantidad}
                </div>))

                
              
              const resumenTotal = (
                <>
                  <div><strong>Resumen</strong></div>
                  {detalle}
                  <div>
                    <strong>Total: {totalAPagar}</strong>
                  </div>
                  
                  <button className='pedidos' onClick={() => {
                    
                        const agradeciminento=<>
                            <p key={Math.random()}>Gracias por la compra, su pedido estará listo en minutos 🧀👌😊</p>
                            <button className='pedidos' onClick={borrarCarrito}>Cerrar</button>
                        </>
                        setInfoProductos(agradeciminento)
        
                  }}>Pagar</button>
                  <button className='pedidos' onClick={borrarCarrito}>Cancelar</button>
                </>
              );
              
              setInfoProductos(resumenTotal);
            
        }
    }

    //Mostremos un breve resumen del carrito
    const infoCompra= <>
        <div>Arepas: {carrito.length} </div> 
        <div>Total : {totalAPagar}</div>
        <button  className='pedidos' onClick={() => detallePagar()}>Pagar</button>
        <button  className='pedidos' onClick={borrarCarrito}>Vaciar</button>
    </>

    
    
    //TODO: useEffect()
    //Mostremos carrito cada vez que se actualiza
    useEffect(() => {

        if(carrito.length  !==0){ 
            //Una vez se actualiza el componente carrito, calcular la suma del total
            totalPagar()
            const productos=cantidadProducto()
            setDetalleProductos(productos)
            console.log({productos})
            console.log({carrito})
            //Guardamos en la localStorafe la info del carrito y de los productos
            localStorage.setItem('Carrito', JSON.stringify(carrito))

            // localStorage.setItem('misProductos', JSON.stringify(lista))
            
        }
    }, [carrito])
    //Recuperamos el carrito
    useEffect(() => {
        const carritoActual = JSON.parse(localStorage.getItem('Carrito'));
        if (carritoActual && carritoActual.length > 0) {
          setCarrito(carritoActual);
        }
    },[])

  return (
    <>  
    <body className='bodyPrivado'>
        
        <div className='totalCompra'>{infoProductos}</div>
        <div className='infoCompra'>
            {infoCompra}
        </div>
        <div className="contenedorMenu">

            <div className='menuCompleto'>
            
                {menuCompleto}
                </div>

        </div>
    </body>
    
    </>
  )
}
