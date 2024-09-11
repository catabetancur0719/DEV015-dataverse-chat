//en este va get api 
import { getApiKey } from './ApiKey.js';
import data from "../data/dataset.js"; 

export const communicateWithOpenAI = (messages) => { //se importa en el chat individual
//Aquí es donde debes implementar la petición con fetch pide datos en js
  const apiKey =  getApiKey ();  //para llamar a la apikey;
  const openAi = "https://api.openai.com/v1/chat/completions";  //define la url de openai*/
 

  //peticion fetch

  fetch( openAi, { 
    method: "POST", //método HTTP usado en el request, post envía datos.
    headers: {
      //encabezados HTTP que se envían con el request
      Authorization: `Bearer ${apiKey}`, //bearer indica el envío de un token de acceso.
      "Content-Type": "application/json", //el cuerpo del request es en formato JSON.
    },
    body: JSON.stringify({
      //Cuerpo del request, el método stringify convierte el objeto en un JSON
      model: "gpt-4", //Modelo OpenAI a usar
      messages: [ //Array de mensajes del chat
        {
          role:"system", content:`Hola somos ${data.name}, tu personalidad se basa en ${data.descripcionLarga}, 
          responderas simulando ser el cantante de la banda con respuestas cortas no mas de 30 caracteres`}
      ], 
    }),
  })
    .then(response => response.json())
    .catch(error =>{
      console.error('Error:', error);
      throw error;
    });
    
  //la instruccion es conectar la funcion comunicateblablaba con el DOM usando, algun boton o algo
  
  return messages
};
