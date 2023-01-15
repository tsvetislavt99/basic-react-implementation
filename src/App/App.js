import Component from '../../lib/Component.js';
import createNav from '../Nav/Nav.js';
import createTitle from '../Title/Title.js';
import createDescription from '../Description/Description.js';
import createCounter from '../Counter/Counter.js';
import createList from '../List/List.js';
import createChangingColorTitle from '../ChangingColorTitle/ChangingColorTitle.js';

const navigationLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Contact', href: '#contact' },
];

const App = new Component();
App.setNode(document.getElementById('root'));

const Nav = createNav({ navigationLinks });
const Title = createTitle({
  title: 'I am the first title component in App.js!',
});
const List = createList({
  myList: [
    { id: 1, name: 'I am a separate list' },
    { id: 2, name: 'From the one rendered in Description.js' },
  ],
});

const Description = createDescription({
  myList: List,
});

const FooterTitle = createTitle({
  title: 'I am the second title component in App.js!',
});

//This one uses useEffect and useState
const ChangingColorTitle = createChangingColorTitle();

const Counter = createCounter();

App.template = function () {
  const componentsToRender = [
    Nav,
    ChangingColorTitle,
    Title,
    Description,
    List,
    Counter,
    FooterTitle,
  ];

  return componentsToRender.map((node) => {
    return this.node.appendChild(node);
  });
};

export default App;
