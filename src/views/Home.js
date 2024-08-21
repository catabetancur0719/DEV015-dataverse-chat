// General: cada archivo dentro de la carpeta view debe llevar elementos del html renderizados
// Definir funciones/componentes similares para otras rutas

// src/views/Home.js
import { navigateTo } from "../router.js";

 function Home(props) {
  const viewEl = document.createElement('div');
 // viewEl.textContent = 'Welcome to the home page!';

  viewEl.innerHTML= `
  <h1>House of Rock </h1>
  
  <button type="button" id="aboutLink">About</button>
  <button type="button" id="indichatLink">Chat</button>

  `;
//estos son los manejadores de eventos
  viewEl.querySelector('#aboutLink').addEventListener( 'click', () => { 
    navigateTo('/about');
  });
 
  /* preguntar x este codigo en dudas rapidas 
    const linkEl = viewEl.querySelector('#aboutLink');
    linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }));*/
  
  viewEl.querySelector('#indichatLink').addEventListener('click',() =>{
    navigateTo('/indichatLink');
  });
 // console.log(Home);

  return viewEl;
}
 

export default Home; /*default es en remplazo de los {} del archivo index.js L9 cumple la funcion de la llaves*/


