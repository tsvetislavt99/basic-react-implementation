import Component from '../../lib/Component.js';
import Nav from '../Nav/Nav.js';
import { createElement } from '../../lib/dom.js';

const App = new Component();
App.node = document.getElementById('root');
App.template = function () {
  return createElement('div', { class: 'my-component' }, [
    Nav.template(),
    createElement(
      'h1',
      { class: 'my-component__title' },
      this.state.title || 'Hello World!',
    ),
    createElement(
      'p',
      { class: 'my-component__text' },
      'This is my first component',
    ),
  ]);
};
App.node.addEventListener('click', () => {
  App.setState({ title: '!Hello World! (updated)' });
});

export default App;
