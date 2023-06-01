import React from 'react'
import videoArepas from '../assets/videoArepas.mp4'
export const Main = () => {
  return (
    <>
    <main id="main">
        <div className="container-main">
            <h1>Arepas la Tata</h1>

        <p>¡Prueba las deliciosas arepas de queso con mucho queso, preparadas con la receta de la abuela!
         Cada bocado te transportará a la auténtica cocina de nuestra familia, donde se combinan los sabores y aromas que han pasado de generación en generación.
        ¡No te pierdas esta tradición culinaria y disfruta de unas arepas de queso únicas y deliciosas!</p>
        
        
        <div className="video">
            <figure>
                <video controls autoPlay loop>
                    <source src={videoArepas} type="video/mp4"/>
                </video>
                <figcaption>"El secreto detrás de nuestras increíbles arepas de queso: la receta de la abuela"</figcaption>
            </figure>
        </div>
        </div>
        
    </main>
    </>
  )
}
