// este es un componente, cada vista es un componente 
// Definir funciones/componentes similares para otras rutas

// src/views/Home.js

 function Home(props) {
  const viewEl = document.createElement('div');
  viewEl.textContent = 'Welcome to the home page!';

  console.log(Home);

  return viewEl;
}

export default Home; /*va default por que en el archivo index.js en su L9 no se pusieron las {} entonce default cumple la funcion de las llavesitas esas*/

// Definir funciones/componentes similares para otras rutas




