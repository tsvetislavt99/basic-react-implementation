import Component from '../../lib/Component.js';
import { createElement } from '../../lib/dom.js';

const Nav = new Component({});
Nav.node = document.createElement('nav');
Nav.template = function () {
  return createElement('nav', { class: 'my-component' }, [
    createElement('a', { href: '#home' }, 'Home'),
    createElement('a', { href: '#about' }, 'About'),
    createElement('a', { href: '#contact' }, 'Contact'),
  ]);
};

export default Nav;
