// en el se plementan 2 funciones

//------configurando la apikey-----------


// Implementa el código para guardar la API KEY en Local Storage

export const setApiKey = (key) => {
  const storageKey = "apiKey"; // Nombre de la clave en localStorage
  window.localStorage.setItem(storageKey, key); // Guardar el valor de la API Key con la clave "apiKey"
  return key;//key es el valor de la api es la clave en si
};


//Implementa el código para obtener la API KEY desde Local Storage
export const getApiKey = () => {
  const apiKey = window.localStorage.getItem('apiKey'); // Obtener la API Key usando la clave "apiKey"
  return apiKey;
};

// funcion para manejar la solicitud de la api
function ApiRequest() {
  const apiKey = getApiKey(); // recupera la api del localstorage
  if (!apiKey) {
    console.error('API Key not found');
    return ApiRequest;
  }

  fetch('https://api.example.com/data', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,  // Asegúrate de usar el formato correcto para la autorización
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log('Data received:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Manejar el envío del formulario
/*const sendForm = document.getElementById('apiForm')
sendForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar el envío por defecto del formulario
  const apiKey = document.getElementById('inputApi').value;  // Obtener el valor ingresado en el campo de entrada
  setApiKey(apiKey); // Llamar a la función para guardar la API Key

  alert('API Key guardada con éxito.');
});*/