//aqui va la vista del api

import {navigateTo} from "../router.js";

export function ApiView(props) {
  const viewEl = document.createElement('div');
  viewEl.classList.add("api")
  viewEl.innerHTML = `
      <h1>Api Key</h1>
      <form class="apiForm" id="apiForm">
      <h2>Ingresa tu Api Key</h2>
      <input  class="inputApi" id="inputApi" placeholder="escribe tu clave"> 
      <button type="submit" class="btnApi"> Ingresar </button>
      </form><span>
      <button type="button" class="returnHome">Home</button>`;

  const homeLinkEl = viewEl.querySelector('.returnHome');
  homeLinkEl.addEventListener('click', () => navigateTo("/", { name:props.home }));
    
  return viewEl;
}