//aui van la vista del error
import { navigateTo } from "../router.js";

export function ErrorView(props) {
    const viewEl = document.createElement('div');
    viewEl.innerHTML = `
    <h2> Error page not found </h2>
    <a href="#" id="returnLink">return</a> 
    `;

    //evento de escucha del clic

    viewEl.querySelector('#returnLink').addEventListener( 'click', (event) => { 
      event.preventDefault();
      navigateTo('/home');
    });


    return viewEl;
  }