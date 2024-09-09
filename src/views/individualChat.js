
import { navigateTo } from "../router.js";
import data from "../data/dataset.js";
import {communicateWithOpenAI}  from "../lib/openAiApi.js";

export function ChatIndividual(props) {  //props solo contiene la id
 
  const element = document.createElement('div'); 
  element.classList.add("chatIndividual");
  
  const bands = data.find((item) => item.id === props.id);

  if (!bands) {
    console.error('No matching data found');
    return document.createElement('div'); // Devuelve un elemento vacío si no se encuentra el dato
  }

  // Crea el contenido HTML del chat
  const chatElement = document.createElement('div');
  chatElement.classList.add("chaty");
   
  chatElement.innerHTML += `
   <link rel="stylesheet" href="chat.css"/>
    <header class="titleChat" id="titleChat">
      <h1>House of Rock </h1>
      <button type="button" class="returnHome">Home</button>
    </header>
    <section class="leadVocal" id="leadVocal">
      <h2 class="singer" id="singer">${bands.name} </h2>
      <p class="descrip">${bands.shortDescripcion}</p>
    <figure>
      <img src="${bands.imageUrl}"alt="${bands.id}" id="imgChat"/>
    </figure>  
    </section>   
    <div class="messages" id="messages"></div>
    <section class="userMessage" id="userM">
        <textarea  class="userMessage" id="userText" placeholder="iniciar chat"></textarea>
        <button type="button" class="btnSend"> Enviar </button>
     </section>`;
 
  element.appendChild(chatElement);

  const returnButton = element.querySelector('.returnHome');
  returnButton.addEventListener('click', () => navigateTo("/", { name: "home" }));

  // manejo del evento de boton enviar
  const sendButton = element.querySelector('.btnSend');
  sendButton.addEventListener('click',() =>{
    const msnDiv = element.querySelector('#messages').value 
    communicateWithOpenAI(msnDiv)
 
  })
    
  return element;
}