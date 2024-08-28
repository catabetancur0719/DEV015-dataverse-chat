import { navigateTo } from "../router.js";


export function ChatIndividual(band) {//variable que recibe el elemento
  const element = document.createElement('div');
  element.innerHTML = `
  <h1>Chat Individual </h1>
  
  <button type="button" class="returnHome">Home</button>
  `;

  /*element.querySelector('.returnHome').addEventListener('click',() =>{
    navigateTo('/');*/
  const elementLinkEl = element.querySelector('.returnHome');
  elementLinkEl.addEventListener('click', () => navigateTo("/", { name: "Xochitl" }));
  
  
console.log(band)

    
  return element;
}

