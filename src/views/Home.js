// General: cada archivo dentro de la carpeta view debe llevar elementos del html renderizados
// Definir funciones/componentes similares para otras rutas

// src/views/Home.js
import  data  from '../data/dataset.js';
//import { filterData } from '../lib/dataFunctions.js';
import {renderItems} from '../components/cards.js';
import { navigateTo } from "../router.js";
//import{ filterSection }from '../components/filters.js';// esto es la parte de los filtros  de html en dataverse


 function Home(props) {
  const viewEl = document.createElement('div');
 // viewEl.textContent = 'Welcome to the home page!';

  viewEl.innerHTML= `
  <img src="../components/img/banner4.jpg" alt="banner">
  newElementLi.classList.add("banner")
  gi
  <h1>House of Rock </h1>
  
  <button type="button" id="aboutLink">About</button>
  <button type="button" id="indichatLink">Chat</button>

  `;
//estos son los manejadores de eventos
//const filtres = document.querySelector("filterSection")

const root =  document.getElementById("root");
root.appendChild(renderItems(data)) //si no esta dentro de la funcion no se ve nada pero si esta adentro se ve en el orden que no es
//console.log(root)

  viewEl.querySelector('#aboutLink').addEventListener( 'click', () => { 
    navigateTo('/about');
  });
 
 
  viewEl.querySelector('#indichatLink').addEventListener('click',() =>{
    navigateTo('/individualChat');
  });
 // console.log(Home);
 


  return viewEl;
}
 


export default Home; /*default es en remplazo de los {} del archivo index.js L9 cumple la funcion de la llaves*/

