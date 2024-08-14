// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar??.

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
import Home from './views/Home.js';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';
import { Example } from './views/Example.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/example': Example,
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(document.querySelector("#root") );
  console.log(Home)
  onURLChange(window.location)
});

//new branch hito1