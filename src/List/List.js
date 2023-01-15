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

// Add a lifecycle method (like useEffect in React)
List.componentDidMount = function () {
  // In here you can do anything you want, like fetching data from an API
  this.state.myList = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
};

List.template = function () {
  // Call the lifecycle method
  List.componentDidMount();

  // Use the state or the props.
  // In this case I am passing props to the compoenet as default props to render something
  // Then in the lifecycle method I am updating the state
  // If the state is updated succefully, the component will re-render and prefer the state over the props
  const items = this.state.myList || this.props.myList;

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
