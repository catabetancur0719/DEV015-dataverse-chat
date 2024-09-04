let ROUTES = {};
let rootEl;  //en esta variable  se almacenara el DOM ( se crean las URL solo eso)
 
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
  // Asignamos el valor de routers al objeto ROUTES
  ROUTES = routes;
}
 
export const queryStringToObject = (queryString) => { //parece q esta define las URL
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
  const urlParams =Object.fromEntries(new URLSearchParams(queryString)); //manipula los parametros de URL
  return urlParams;
}


 
export const renderView = (pathname, props = {}) => {  //no exportada
  rootEl.innerHTML = "";

  //Verifica si la ruta especificada existe en las rutas definidas (ROUTES) o si se proporciona un parámetro "id" en props
  if(!ROUTES[pathname]){
    // Si no existe, redirigir a la ruta de error
    window.history.pushState({}, "/errorView", `${window.location.origin}/errorView`);
    // Actualizar pathname
    pathname = "/errorView";
  } 
  //Se agrega la ruta al root para renderizar una vista(chatGato, gaotInfo, chatGrupal) 
  rootEl.appendChild(ROUTES[pathname](props));
} 
 

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
  // window.history.pushState(props, '', pathname);
  const urlParams = new URLSearchParams(props)
  window.history.pushState(props, '', pathname + '?' + urlParams); //comilla vacia por temas de compativilidad 
  renderView(pathname, props);
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