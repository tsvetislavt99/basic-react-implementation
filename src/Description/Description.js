import Component from '../../lib/Component.js';
import { createElement } from '../../lib/dom.js';

const Description = new Component({});
Description.setNode(
  createElement('div', { class: 'my-description-component' }, []),
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

Description.node.addEventListener('click', (event) => {
  event.preventDefault();
  Description.setState({
    description: 'This is my first component (I am a stateful component)',
  });
});

Description.render();

export default Description;
