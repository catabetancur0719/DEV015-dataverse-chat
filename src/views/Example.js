/*const Example = () => {

};

export default Example;*/

// src/views/About.js

export function Example(props) {
    const viewEl = document.createElement('div');
    viewEl.textContent = 'This is the About page.';
    return viewEl;
  }