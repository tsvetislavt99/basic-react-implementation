import Component from '../../lib/Component.js';
import { createElement } from '../../lib/dom.js';

function createNav(props) {
  const Nav = new Component(props);
  Nav.setNode(createElement('div', { class: 'my-nav-container' }, []));

  Nav.template = function () {
    const { navigationLinks } = this.props || [];

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

  Nav.node.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName === 'A') {
      console.log('I log something when clicked on');
    }
  });

  Nav.render();
  return Nav;
}

export default createNav;
