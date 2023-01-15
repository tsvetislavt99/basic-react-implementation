import Component from '../../lib/Component.js';
import { createElement } from '../../lib/dom.js';

function createList(props) {
  const List = new Component(props);
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
  return List.node;
}

export default createList;
