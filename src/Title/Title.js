import Component from '../../lib/Component.js';
import { createElement } from '../../lib/dom.js';

// Pass default props to the component
const Title = new Component();

Title.setNode(createElement('h1', { class: 'title-compoenet' }, []));

Title.template = function () {
  const title = this.props.title || 'Default title!';

  return title;
};

Title.render();

export default Title;
