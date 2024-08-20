import {navigateTo} from "../router.js";

// src/views/About.js
export function About(props) {
    const viewEl = document.createElement('div');
    viewEl.innerHTML = `
      <h1>About</h1>
      <button type="button" name="home">Home</button>
      <button type="button" name="contact">Contact</button>
      <button type="button" name="chat">Chat</button> 
     `;
   


  viewEl.addEventListener('click', () =>navigateTo ("/home",{name:"Xochitl"}));

  viewEl.addEventListener('click', () =>navigateTo ("/Chat",{name:"Xochitlu"}));

  viewEl.addEventListener('click', () =>navigateTo ("/contact",{name:"Xochitlo"}));
    return viewEl;
  }