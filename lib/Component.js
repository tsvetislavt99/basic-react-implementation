function Component(props) {
  this.props = props;
  this.state = {};
}

Component.prototype.setState = function (state) {
  this.state = { ...this.state, ...state };
  this.render();
};

Component.prototype.render = function () {
  console.log(this.template());
  this.node.appendChild(this.template());
  this.componentDidMount();
};

Component.prototype.template = function () {
  throw new Error('You have to define the template method');
};

Component.prototype.componentDidMount = function () {};

export default Component;
