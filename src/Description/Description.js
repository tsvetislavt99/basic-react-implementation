import Component from '../../lib/Component.js';
import createList from '../List/List.js';
import { createElement } from '../../lib/dom.js';

const descriptionList = [
  {
    id: 1,
    name: 'I am a list inside the description component',
  },
  { id: 2, name: 'The below component is also a list' },
  { id: 3, name: 'But, it is rendered in App.js' },
];

const List = createList({ myList: descriptionList });

function createDescription(props) {
  const Description = new Component(props);
  Description.setNode(
    createElement('div', { class: 'my-description-component' }, []),
  );

  Description.template = function () {
    return createElement('div', { class: 'my-Description' }, [
      createElement(
        'p',
        { class: 'my-Description__text' },
        this.state.description ||
          'Text inside the description component (Click me!)',
      ),
      List,
    ]);
  };

  Description.node.addEventListener('click', (event) => {
    event.preventDefault();
    Description.setState({
      description:
        'Text inside the description component (I am a stateful component)',
    });
  });

  Description.render();
  return Description.node;
}

export default createDescription;
