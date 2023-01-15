import Component from '../../lib/Component.js';
import { createElement } from '../../lib/dom.js';

function createChangingColorTitle(props) {
  const ChangingColorTitle = new Component(props);
  ChangingColorTitle.setNode(
    createElement('h1', { class: 'changing-color-title-component' }, []),
  );

  ChangingColorTitle.componentDidMount = function () {
    setTimeout(() => {
      this.setState({ color: 'blue' });
    }, 2000);
  };

  ChangingColorTitle.template = function () {
    const title = `I will change my color with useEffect!`;
    const color = this.state.color || 'red';

    return createElement('h1', { style: `color: ${color}` }, title);
  };

  ChangingColorTitle.render();
  return ChangingColorTitle.node;
}

export default createChangingColorTitle;
