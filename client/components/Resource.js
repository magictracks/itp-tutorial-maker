var Component = require('choo/component')
var html = require('choo/html')


class Resource extends Component{
  constructor(name, state, emit){
    super(name)

    this.state = state;
    this.emit = emit;

  }

  update(){
    return true;
  }

  createElement(){
    return html`
      <div>
        hello i'm a resource
      </div>
    `
  }
}

module.exports = Resource