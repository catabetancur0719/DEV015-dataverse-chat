 //es el remplazo del archivo view de data verse?? aqi va el renderizado

/* export const Home = () => {
    const el = document.createElement("h1");
    el.innerHTML = "I'm the Home Page";
   return el;
 }*/
 
 let ROUTES = {};
 let rootEl;
 
 export const setRootEl = (el) => { //fx que asigna elemento DOM  y verifica q el argumento sea una instancia de HTMLElement.
   // funcion q inicializa la variable rootEl
   if(!(el instanceof HTMLElement)){ 
        throw new Error('Argument must be an instance of HTMLElement');
   }
   rootEl = el;
 }
 
 export const setRoutes = (routes) => {
   // optional Throw errors if routes isn't an object
   // optional Throw errors if routes doesn't define an /error route
   // assign ROUTES
    ROUTES = routes;
  }
 
 const queryStringToObject = (queryString) => {
   // convert query string to URLSearchParams
   // convert URLSearchParams to an object
   // return the object
 }
 
 const renderView = (pathname, props={}) => {
   // clear the root element
   // find the correct view in ROUTES for the pathname
   // in case not found render the error view
   // render the correct view passing the value of props
   // add the view element to the DOM root element
   rootEl.innerHTML = "";
  let keyId = 0;
  //let valueId = 0;
  for (const key in props) {
    keyId = key;
    //valueId = props[key];
  }
  //Verifica si la ruta especificada existe en las rutas definidas (ROUTES) o si se proporciona un parámetro "id" en props
  if(!ROUTES[pathname] || (keyId ? keyId !== "id" : false)){
    // Si no existe, redirigir a la ruta de error
    window.history.pushState({}, "/errorGatuno", `${window.location.origin}/errorGatuno`);
    // Actualizar pathname
    pathname = "/errorGatuno";
  } 
  //Se agrega la ruta al root para renderizar una vista(chatGato, gaotInfo, chatGrupal) 
  rootEl.appendChild(ROUTES[pathname](props));
 } 
 
 export const navigateTo = (pathname, props={}) => {
   // update window history with pushState
   // render the view with the pathname and props
 }
 
 export const onURLChange = (location) => {
   // parse the location for the pathname and search params
   // convert the search params to an object
   // render the view with the pathname and object
  const pathname = location.pathname; 
  const queryString = new URLSearchParams(location.search); // convierte "?id=persa" a { id → "persa" }
  const objProps = queryStringToObject(queryString); // convierte { id → "persa" } a { id: "persa" }
  renderView(pathname, objProps);
 }