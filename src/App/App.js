import Component from '../../lib/Component.js';
import Nav from '../Nav/Nav.js';
import Description from '../Description/Description.js';
import List from '../List/List.js';
import { createElement } from '../../lib/dom.js';

const App = new Component();
App.node = document.getElementById('root');
App.template = function () {
  return createElement('div', { class: 'my-component' }, [
    Nav.node,
    createElement(
      'h1',
      { class: 'my-component__title' },
      this.state.title || 'Hello World! (Click me!)',
    ),
    Description.node,
    List.node,
  ]);
};
// Add an event listener to the component's node (the root element)
App.node.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.tagName === 'H1') {
    App.setState({ title: 'Hello World! I am a stateful component' });
  }
});

export default App;
