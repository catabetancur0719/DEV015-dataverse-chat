// General: cada archivo dentro de la carpeta view debe llevar elementos del html renderizados
// Definir funciones/componentes similares para otras rutas

// src/views/Home.js
/*import { data } from '../data/dataset.js';
import { filterData } from '../lib/dataFunctions.js';*/
import { navigateTo } from "../router.js";

function Home(props) {
  const viewEl = document.createElement('div');
  // viewEl.textContent = 'Welcome to the home page!';

  viewEl.innerHTML= `
  <h1>House of Rock </h1>
  
  <button type="button" id="aboutLink">About</button>
  <button type="button" id="indiChatLink">Chat</button>

  `;
  /*estos son los manejadores de eventos
  viewEl.querySelector('#aboutLink').addEventListener( 'click', () => { 
    navigateTo('/about');
  });*/
  const aboutLinkEl = viewEl.querySelector('#aboutLink');
  aboutLinkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }));
 
  const chatLinkEl = viewEl.querySelector('#indiChatLink');
  chatLinkEl.addEventListener('click', () => navigateTo( "/individualChat", { name: "Xochitl" }));


  
  // console.log(Home);

  return viewEl;
}


 

export default Home; /*default es en remplazo de los {} del archivo index.js L9 cumple la funcion de la llaves*/


