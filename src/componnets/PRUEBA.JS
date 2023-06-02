const carrito=[
    {
    nombre:'prueba1',
    id:1
    },
    {
    nombre:'prueba1',
    id:1
    },
    {
    nombre:'prueba2',
    id:2
    },

    {
    nombre:'prueba3',
    id:3
    },
    {
    nombre:'prueba3',
    id:5
    }
]
let cont=0
let contCantidad=0
let productos=[]
let dic={}

const contarPedidosPorId = (carrito) => {
    const recuentos = {};
    for (let i = 0; i < carrito.length; i++) {
      const pedido = carrito[i];
      
      //Si existe la propiedad pedido.nombre en recuento
      if(recuentos[pedido.nombre]){
        recuentos[pedido.nombre]+=1
      }
      //Si no existe lo crea y le asigna 1
      else{
        recuentos[pedido.nombre]=1
      }
    }
    return recuentos;
  };
  
  // Ejemplo de uso
  const recuentosPedidos = contarPedidosPorId(carrito);
  console.log(recuentosPedidos);

