import Component from '../../lib/Component.js';
import { createElement } from '../../lib/dom.js';

function createTitle(props) {
  const Title = new Component(props);
  Title.setNode(createElement('h1', { class: 'title-component' }, []));

  Title.template = function () {
    const title = this.props.title || 'Default title!';

    return title;
  };

  Title.render();
  return Title.node;
}

export default createTitle;
