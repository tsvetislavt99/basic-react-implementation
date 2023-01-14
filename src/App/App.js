import Component from '../../lib/Component.js';
import { createElement } from '../../lib/dom.js';

const App = new Component({});
App.node = document.getElementById('root');
App.template = function () {
  return createElement('div', { class: 'my-component' }, [
    createElement('h1', { class: 'my-component__title' }, 'Hello World'),
    createElement(
      'p',
      { class: 'my-component__text' },
      'This is my first component',
    ),
  ]);
};

export default App;
