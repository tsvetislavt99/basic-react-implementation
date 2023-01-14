import Component from '../../lib/Component.js';
import { createElement } from '../../lib/dom.js';

const Description = new Component({});
Description.node = createElement(
  'div',
  { class: 'my-description-component' },
  [],
);
Description.template = function () {
  return createElement('div', { class: 'my-Description' }, [
    createElement(
      'p',
      { class: 'my-Description__text' },
      this.state.description || 'This is my first component (Click me!)',
    ),
  ]);
};

Description.node.appendChild(Description.template());
Description.node.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.tagName === 'P') {
    Description.setState({
      description: 'This is my first component (I am a stateful component too)',
    });
  }
});

export default Description;
