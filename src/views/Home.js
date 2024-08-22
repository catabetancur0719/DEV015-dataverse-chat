// General: cada archivo dentro de la carpeta view debe llevar elementos del html renderizados
// Definir funciones/componentes similares para otras rutas

// src/views/Home.js
import  data  from '../data/dataset.js';
//import { filterData } from '../lib/dataFunctions.js';
import {renderItems} from '../components/cards.js';
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
 
 
  viewEl.querySelector('#indichatLink').addEventListener('click',() =>{
    navigateTo('/indichatLink');
  });
 // console.log(Home);
 

  return viewEl;
}
 
const root =  document.getElementById("root");


 root.appendChild(renderItems(data))
//console.log(root)

export default Home; /*default es en remplazo de los {} del archivo index.js L9 cumple la funcion de la llaves*/

