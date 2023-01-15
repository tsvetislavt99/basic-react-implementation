import Component from '../../lib/Component.js';
import Nav from '../Nav/Nav.js';
import Title from '../Title/Title.js';
import Description from '../Description/Description.js';
import List from '../List/List.js';

const navigationLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Contact', href: '#contact' },
];

const App = new Component();
App.setNode(document.getElementById('root'));

App.template = function () {
  const elementsToRender = [Nav.node, Title.node, Description.node, List.node];
  Nav.passProps({ navigationLinks });
  Title.passProps({ title: 'Hello World!' });

  return elementsToRender.map((node) => {
    return this.node.appendChild(node);
  });
};

export default App;
