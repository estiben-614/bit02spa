import React from 'react';

export const Aside = () => {
  return (
    <>
      <aside id="aside">
        <div className="aside-container">
          <h3>¿Quieres una arepa de queso que sí tiene queso y por solo $5000? <br />¡Pide aquí!</h3>

          <div id="alerta"></div>

          <form action="" id="formulario">
            <label htmlFor="nombre">* Nombre y apellido:</label>
            <input name="nombre" type="text" placeholder="Nombre" id="nombre" required />
            <br />
            <label htmlFor="telefono">* Teléfono:</label>
            <input type="number" name="telefono" placeholder="Número de teléfono" id="telefono" required />
            <br />
            <label htmlFor="direccion">* Dirección de entrega:</label>
            <input name="direccion" type="text" placeholder="Dirección" id="direccion" required />
            <br />
            <label htmlFor="cantidad">Cantidad:</label>
            <select name="opciones" required id="cantidad">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 ó más</option>
            </select>
            <br />
            <label htmlFor="adiciones">Adiciones:</label> <br />
            <label>
              Mucho más 🧀<input type="checkbox" className="adiciones" name="queso" value="queso" id="queso" />
            </label>
            <label>
              Lecherita <input type="checkbox" className="adiciones" name="Lecherita" value="Lecherita" id="lecherita" />
            </label>
            <label>
              Carne<input type="checkbox" className="adiciones" name="Carne" value="Carne" id="carne" />
            </label>

            <br />
            <label htmlFor="notas">Comentarios:</label><br />
            <textarea name="" cols="20" rows="5" id="comentarios"></textarea>
            <br />

            <button className="pedidos" type="submit" id="boton">Enviar pedido</button>
          </form>
        </div>
      </aside>
    </>
  );
};