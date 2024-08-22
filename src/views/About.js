import {navigateTo} from "../router.js";

// src/views/About.js
export function About(props) {
    const viewEl = document.createElement('div');
    viewEl.innerHTML = `
      <h1>About</h1>
      <button type="button" id="returnHome">Home</button>
      <button type="button" id="chat">Chat</button> 
     `;
   

 viewEl.querySelector('#returnHome').addEventListener( 'click', () => { 
   navigateTo('/');
  });
 
  viewEl.querySelector('#chat').addEventListener( 'click', () => { 
    navigateTo('/individualChat');
   });

    return viewEl;
  }