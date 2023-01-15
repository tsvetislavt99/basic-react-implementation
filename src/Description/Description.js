import Component from '../../lib/Component.js';
import List from '../List/List.js';
import { createElement } from '../../lib/dom.js';

const descriptionList = [
  {
    id: 1,
    name: 'I am a list inside the description component',
  },
  { id: 2, name: 'The below component is also a list' },
  { id: 3, name: 'But, it is rendered in App.js' },
];

const Description = new Component({});
Description.setNode(
  createElement('div', { class: 'my-description-component' }, []),
);
Description.template = function () {
  List.passProps({ myList: descriptionList });

  return createElement('div', { class: 'my-Description' }, [
    createElement(
      'p',
      { class: 'my-Description__text' },
      this.state.description || 'This is my first component (Click me!)',
    ),
    List.node,
  ]);
};

Description.node.addEventListener('click', (event) => {
  event.preventDefault();
  Description.setState({
    description: 'This is my first component (I am a stateful component)',
  });
});

Description.render();

export default Description;
