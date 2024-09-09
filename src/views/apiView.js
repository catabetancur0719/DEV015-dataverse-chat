//aqui va la vista del api

import {navigateTo} from "../router.js";
import { setApiKey } from "../lib/ApiKey.js";


export function ApiView(props) {
  const viewEl = document.createElement('div');
  viewEl.classList.add("api")
  viewEl.innerHTML = `
      <h1>Api Key</h1>
      <form class="apiForm" id="apiForm">
      <h2>Ingresa tu Api Key</h2>
      <input  type= "password" class="inputApi" id="inputApi" placeholder="escribe tu clave"> 
      <button type="button" class="btnApi"> Guardar </button>
      </form><span>
      <button type="button" class="returnHome">Home</button>`;

  const homeLinkEl = viewEl.querySelector('.returnHome');
  homeLinkEl.addEventListener('click', () => navigateTo("/", { name:props.home }));
    
  // aqui se usa el set api para poder guardar en locaol storage
  const  btnSave = viewEl.querySelector ('.btnApi');
  btnSave.addEventListener('click', () => {
    const btnInput = viewEl.querySelector('.inputApi').value//el ".value" obtiene el valor ingresado en el input
    setApiKey(btnInput)
    alert("API guardada exitosamente");
  });
  

  return viewEl;
}
  
 


 
 