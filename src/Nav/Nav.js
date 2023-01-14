import Component from '../../lib/Component.js';
import { createElement } from '../../lib/dom.js';

const Nav = new Component({});
Nav.node = createElement('div', { class: 'my-nav-container' }, []);
Nav.template = function () {
  return createElement('nav', { class: 'my-nav' }, [
    createElement('a', { href: '#home' }, 'Home'),
    createElement('a', { href: '#about' }, 'About'),
    createElement('a', { href: '#contact' }, 'Contact'),
  ]);
};

Nav.node.appendChild(Nav.template());
Nav.node.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.tagName === 'A') {
    console.log('I log kur when clicked on');
  }
});

export default Nav;
