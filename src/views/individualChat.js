import { navigateTo } from "../router.js";
import data from "../data/dataset.js";

export function ChatIndividual(chatData) {
  // Verifica si chatData es válido
  

  // Crea el elemento principal del chat
  const element = document.createElement('div'); 
  element.classList.add("chatIndividual");

  // Crea el contenido HTML del chat
  const chatElement = document.createElement('section');
  chatElement.innerHTML = `
    <div class="titleChat" id="titleChat">
    <h1>House of Rock </h1>
    <button type="button" class="returnHome">Home</button></div>
    <div class="leadVocal" id="leadVocal">
      <h2 class="singer" id="singer">${chatData.name}</h2>
      <p class="descrip">${chatData.descripcionLarga}</p>
        <div class="image">
          <img src="${chatData.imageUrl}" alt="${chatData.id}"/>
        </div>
     </div>
    <div class="messages" id="messages"></div>
    <div class="userMessage" id="userM">
        <textarea  class="userMessage" id="userText" placeholder="iniciar chat"></textarea>
        <button type="submit" class="btnSend"> Enviar </button>
     </div>
  `;
  
  element.appendChild(chatElement);
 // element.appendChild(ChatIndividual(chatData)); // Agrega el componente al body

  // Manejo de la navegación de retorno a la página de inicio
  const returnButton = element.querySelector('.returnHome');
  returnButton.addEventListener('click', () => navigateTo("/", { name: "home" }));

  // Ejemplo de llamada para probar



  // Devuelve el elemento completo del chat
  return element;
}


