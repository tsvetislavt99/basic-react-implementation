function Component(props) {
  this.props = props || {};
  this.state = {};
}

Component.prototype.setNode = function (node) {
  this.node = node;
};

Component.prototype.setState = function (state) {
  this.state = { ...this.state, ...state };
  this.render();
};

Component.prototype.passProps = function (props) {
  this.props = { ...this.props, ...props };
  this.render();
};

Component.prototype.render = function () {
  const template = this.template();
  this.node.innerHTML = '';
  if (typeof template === 'string') {
    this.node.innerHTML = this.template();
  }
  if (Array.isArray(template)) {
    template.map((node) => {
      return this.node.appendChild(node);
    });
  }
  if (!Array.isArray(template) && template instanceof HTMLElement) {
    this.node.appendChild(template);
  }
  this.componentDidMount();
};

Component.prototype.template = function () {
  throw new Error('You have to define the template method');
};

Component.prototype.componentDidMount = function () {};

export default Component;
