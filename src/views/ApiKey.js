//este archivo debe ir dentro de la carpeta lib
// en el se plementan 2 funciones

import {navigateTo} from "../router.js";

// src/views/About.js
export function ApiKey(props) {
  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
      <h1>ApiKey</h1>
      <button type="button" class="returnHome">Home</button>
      <button type="button" id="chat">Chat</button> 
     `;

  const homeLinkEl = viewEl.querySelector('.returnHome');
  homeLinkEl.addEventListener('click', () => navigateTo("/", { name: "home" }));
  
  const chatLinkEl = viewEl.querySelector('#chat');
  chatLinkEl.addEventListener('click', () => navigateTo( "/individualChat", { name:props.name }));

  return viewEl;
}

