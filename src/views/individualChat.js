

import { navigateTo } from "../router.js";
import data from "../data/dataset.js";

export function ChatIndividual(chatData) {//variable que recibe el elemento
  console.log(chatData);
  
  const element = document.createElement('div'); 
  element.classList.add("chatIndividual");


  const chatElement = document.createElement('section');
  chatElement.innerHTML += `
    <h1>House of Rock </h1>
    <button type="button" class="returnHome">Home</button>
    
    <div class="leadVocal" id="leadVocal"> 
      <h2 class="singer" id="singer">${chatData.name}</h2>
      <img src="${chatData.imageUrl}" alt="${chatData.id}"/>
      <p>${chatData.shortDescription}</p>
    </div>
    <div class="messages" id="messages">
        <section class="singerMessage">.....</section>
    </div>
    <div class="userMessage" id="userMessage">
      <form>
        <textarea  class="userMessage" id="userM" placeholder="iniciarchat"></textarea> 
        <button type="submit" class="btnSend"> Enviar </button>
      </form>
     </div>`;
  element.appendChild(chatElement);
 
 
  const elementLinkEl = element.querySelector('.returnHome');
  elementLinkEl.addEventListener('click', () => navigateTo("/", {name: "home"}));



  
  return element;
}

