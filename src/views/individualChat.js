
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
