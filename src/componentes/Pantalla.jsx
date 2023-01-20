import '../hojas-de-estilo/Pantalla.css';

// LO CREAMPOS ASI PARA COSAS SENCILLAS YA MAS COMPLEJAS SI CON FUNTION
// TOMA Y MUESTRA EL VALOR QUE COLOCO EL USUARIO
const Pantalla = ({ input }) => (
  <div className='input'>
    {input}
  </div>
);

export default Pantalla;