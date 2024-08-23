import { navigateTo } from "../router.js";

<<<<<<< HEAD
export function ChatIndividual() {
  const element = document.createElement('div');
  element.innerHTML = `
  <h1>Chat Individual </h1>
  
  <button type="button" class="returnHome">Home</button>
  `;

  /*element.querySelector('.returnHome').addEventListener('click',() =>{
    navigateTo('/');*/
  const elementLinkEl = element.querySelector('.returnHome');
  elementLinkEl.addEventListener('click', () => navigateTo("/", { name: "Xochitl" }));
  
  


    
  return element;
}
=======
import {navigateTo} from "../router.js";

export function ChatIndividual(props) {
    const element = document.createElement('div');
    element.innerHTML = `<h1>Chat Individual</h1>    
    <button type="button" id="returnbutton">Home</button>`;

    element.querySelector('#returnbutton').addEventListener( 'click', () => { 
        navigateTo('/');
       });
       
    return element;
}
>>>>>>> hito2
