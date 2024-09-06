import { navigateTo } from "../router.js";
import data from "../data/dataset.js";

export function ChatIndividual(props) {  //posible error en la forma de importar la data y de como usarla
 
  console.log(props);
  

  const element = document.createElement('div'); 
  element.classList.add("chatIndividual");
  
  const bands =data.find((item)=> item.name === props);
  

  // Crea el contenido HTML del chat
  const chatElement = document.createElement('div');
  console.log(chatElement);

  chatElement.innerHTML += `
    <div class="titleChat" id="titleChat">
    <h1>House of Rock </h1>
    <button type="button" class="returnHome">Home</button></div>
    <div class="leadVocal" id="leadVocal">
      <h2 class="singer" id="singer">${props.name}</h2>
      <p class="descrip">${props.descripcionLarga}</p>
        <div class="image">
          <img src="${props.imageUrl}" alt="${props.id}"/>
        </div>
     </div>
    <div class="messages" id="messages"></div>
    <div class="userMessage" id="userM">
        <textarea  class="userMessage" id="userText" placeholder="iniciar chat"></textarea>
        <button type="submit" class="btnSend"> Enviar </button>
     </div>`;
  
  element.appendChild(chatElement);

  const returnButton = element.querySelector('.returnHome');
  returnButton.addEventListener('click', () => navigateTo("/", { name: "home" }));


  return element;
}