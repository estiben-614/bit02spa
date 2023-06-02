import React from 'react';
import arepa1  from "../assets/arepas.png"
import arepa2  from "../assets/arepasAside.png"

export const Aside = () => {
  return (
    <>
      <aside id="aside">
      

      <main class="container-galery">
        <div class="fila">
            <div class="columna">
                <img src={arepa1} alt="imagen1" />
                <img src={arepa2} alt="imagen1"/>
                <img src={arepa1} alt="imagen1"/>
                
            </div>
        </div>
        <div class="fila">  
            <div class="columna">
                <img src={arepa2} alt="imagen1"/>
                <img src={arepa1} alt="imagen1"/>
                <img src={arepa2} alt="imagen1"/>
                
            </div>
        </div>
        <div class="fila">
            <div class="columna">
                <img src={arepa1} alt="imagen1"/>
                <img src={arepa2} alt="imagen1"/>
                <img src={arepa1} alt="imagen1"/>
                
            </div>
        </div>
        <div class="fila">
            <div class="columna">
                <img src={arepa2} alt="imagen1"/>
                <img src={arepa1} alt="imagen1"/>
                <img src={arepa2} alt="imagen1"/>
                
            </div>
        </div>
    </main>
      </aside>
    </>
  );
};