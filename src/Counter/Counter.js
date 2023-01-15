import Component from '../../lib/Component.js';
import { createElement } from '../../lib/dom.js';

function createCounter() {
  const Counter = new Component();
  Counter.setNode(createElement('div', { class: 'counter-container' }, []));

  Counter.template = function () {
    this.state.counter = this.state.counter || 0;

    return createElement('div', { class: 'counter' }, [
      createElement('button', { class: 'counter__button' }, '-'),
      createElement(
        'p',
        { class: 'counter__value' },
        this.state.counter.toString(),
      ),
      createElement('button', { class: 'counter__button' }, '+'),
    ]);
  };

  Counter.node.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName === 'BUTTON') {
      if (event.target.textContent === '+') {
        Counter.setState({
          counter: Counter.state.counter + 1,
        });
      } else {
        Counter.setState({
          counter: Counter.state.counter - 1,
        });
      }
    }
  });

  Counter.render();
  return Counter.node;
}

export default createCounter;
