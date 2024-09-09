//en este archivo desarrolla los test correspondientes

import { getApiKey, setApiKey } from '../src/lib/ApiKey.js';


//prueba metodo get
describe('getApiKey', () => {
  it('It should return the value of the API Key', () => {    
    const apiKey = getApiKey();
    expect(apiKey).not.toBeUndefined(); 
    expect(apiKey).not.toBeNull();
    expect(apiKey).to.be.a('string');
  });
});

//prueba metodo set
describe('setApiKey', () => {

  it('it should correctly set the API Key.', () => {
    // Desarrolla el test correspondiente aquí

  });
});