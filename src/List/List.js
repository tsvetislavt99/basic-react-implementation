import Component from '../../lib/Component.js';
import { createElement } from '../../lib/dom.js';

// Pass default props to the component
const List = new Component({
  myList: [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ],
});

List.setNode(createElement('div', { class: 'my-list-component' }, []));

List.template = function () {
  const items = this.props.myList;

  return createElement(
    'ul',
    { class: 'my-list' },
    items.map((item) => {
      return createElement('li', { class: 'my-list__item' }, item.name);
    }),
  );
};

List.render();

export default List;
