import {navigateTo} from "../router.js";

// src/views/About.js
export function About(props) {
  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
      <h1>About</h1>
      <button type="button" class="returnHome">Home</button>
      <button type="button" id="chat">Chat</button> 
     `;
  const homeLinkEl = viewEl.querySelector('.returnHome');
  homeLinkEl.addEventListener('click', () => navigateTo("/", { name: "Xochitl" }));
  
  const chatLinkEl = viewEl.querySelector('#chat');
  chatLinkEl.addEventListener('click', () => navigateTo( "/individualChat", { name: "Xochitl" }));

  return viewEl;
}

