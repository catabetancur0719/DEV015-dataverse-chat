// en el se plementan 2 funciones
//------configurando la apikey-----------


// Implementa el código para guardar la API KEY en Local Storage

export const setApiKey = (key) => {
  const storageKey = "apiKey"; // Nombre de la clave en localStorage
  return localStorage.setItem(storageKey, key); // Guardar el valor de la API Key con la clave "apiKey"
  
};

//Implementa el código para obtener la API KEY desde Local Storage
export const getApiKey = () => {
  const apiKey = localStorage.getItem('apiKey'); // Obtener la API Key usando la clave "apiKey"
  return apiKey;
};


