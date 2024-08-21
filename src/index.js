// En este archivo definirás tus rutas, llamaba al router (va lo del DOM)

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
import Home from './views/Home.js';//import the views
import { About } from './views/About.js';
import {ChatIndividual} from './views/individualChat.js';
import {ErrorView} from './views/ErrorView.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';



// Define your routes and their associated views
const routes = {
  '/': Home,
  '/about': About, // por convension siempre termina con coma para saber que se puede agregar algo mas
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

// Handle URL changes
window.addEventListener('popstate', ({event}) => {
  onURLChange(window.location); /// Llama a onURLChange con la URL actual
});
