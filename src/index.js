// En este archivo definirás tus rutas, llamaba al router (va lo del DOM)

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
import Home from './views/Home.js';//import the views

import { ApiView } from './views/apiview.js';
import {ChatIndividual} from './views/individualChat.js';
import {ErrorView} from './views/ErrorView.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';



// Define your routes and their associated views
const routes = {
  '/': Home,
  '/apiView': ApiView, // por convension siempre termina con coma para saber que se puede agregar algo mas
  '/errorView':ErrorView,
  '/individualChat':ChatIndividual,
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(document.querySelector("#root") );  //llama al div root del html x su id
  onURLChange(window.location)
});

// Handle URL changes postward y back ESTARA BIEN??'
window.addEventListener("popstate", ({ target }) => { 
  onURLChange(target.location);
});    

//cosntruye el objt location
 
 