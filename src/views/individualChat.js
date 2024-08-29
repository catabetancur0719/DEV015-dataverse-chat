import { navigateTo } from "../router.js";


export function ChatIndividual(band) {//variable que recibe el elemento
  const element = document.createElement('div');
  element.innerHTML = `
  <h1>Chat Individual </h1>  
  <button type="button" class="returnHome">Home</button>
  <section> 
    <div class="leadVocal" id="leadVocal"> 
      <h2 class="singer" id="singer"> </h2>
      <span class="singerDetails" id="singerDetails"></span>  
    </div>
    <div class="messages" id="messages">
    </div>
    <div class="userMessage" id="userMessage">
      <textarea placeholder="hola"> </textarea>
      <button type="submit" class="btnSend">Enviar</button>
    </div>

  </section>
  `;

   const elementLinkEl = element.querySelector('.returnHome');
  elementLinkEl.addEventListener('click', () => navigateTo("/", { name: "Xochitl" }));
  
  
console.log(band)

    
  return element;
}

