import Component from '../../lib/Component.js';
import { createElement } from '../../lib/dom.js';

const Nav = new Component({
  navigationLinks: [
    { id: 1, name: 'Home', href: '#home' },
    { id: 2, name: 'About', href: '#about' },
    { id: 3, name: 'Contact', href: '#contact' },
  ],
});
Nav.setNode(createElement('div', { class: 'my-nav-container' }, []));

Nav.template = function () {
  const { navigationLinks } = this.props;

  if (!navigationLinks) {
    return createElement('nav', { class: 'my-nav' }, []);
  }

  return createElement(
    'nav',
    { class: 'my-nav' },
    this.props.navigationLinks.map((link) => {
      return createElement('a', { href: link.href }, link.name);
    }),
  );
};

// Nav.node.appendChild(Nav.template());
Nav.node.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.tagName === 'A') {
    console.log('I log something when clicked on');
  }
});

Nav.render();

export default Nav;
