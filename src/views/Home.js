// General: cada archivo dentro de la carpeta view debe llevar elementos del html renderizados
// Definir funciones/componentes similares para otras rutas

// src/views/Home.js
import { navigateTo } from "../router.js";

 function Home(props) {
  const viewEl = document.createElement('div');
 // viewEl.textContent = 'Welcome to the home page!';

  viewEl.innerHTML= `
  <h1>Home</h1>
  <a href="#" id="aboutLink">About</a>
  <a href="#" id="contactLink">Contact</a>
  <a href="#" id="indichatLink">Chat</a>

  `;
//estos son los manejadores de eventos
  viewEl.querySelector('#aboutLink').addEventListener( 'click', (eventOne) => { 
    eventOne.preventDefault();
    navigateTo('/about');
  });

  viewEl.querySelector('#contactLink').addEventListener('click',(eventTwo) =>{
    eventTwo.preventDefault();
    navigateTo('/contact');
  });
  
  viewEl.querySelector('#indichatLink').addEventListener('click',(eventTh) =>{
    eventTh.preventDefault();
    navigateTo('/indichatLink');
  });
 // console.log(Home);

  return viewEl;
}
 

export default Home; /*default es en remplazo de los {} del archivo index.js L9 cumple la funcion de la llaves*/


// SOLO PARA EFECTOS E GITHUB

