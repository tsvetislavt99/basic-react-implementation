import Component from '../../lib/Component.js';
import { createElement } from '../../lib/dom.js';

const List = new Component({
  myList: [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ],
});
List.node = createElement('div', { class: 'my-list-component' }, []);
List.template = function () {
  return createElement(
    'ul',
    { class: 'my-list' },
    this.props.myList.map((item) => {
      return createElement('li', { class: 'my-list__item' }, item.name);
    }),
  );
};

List.node.appendChild(List.template());

export default List;
