var Component = require('choo/component')
var html = require('choo/html')


class AuthBtn extends Component {

  constructor(name, state, emit){
    super(name)
    this.state = state;
    this.emit = emit;

    this._onclick = this._onclick.bind(this);
    this.local = this.state.components[name] = {}
    this.setState()
  }

  update () {
      return true
  }

  setState(){
    if(this.state.authenticated === false){
      this.local.authText = "Login"
    } else{
      this.local.authText = "Logout"
    }
  }

  _onclick(e) {
    this.emit("authenticate");
  }

  createElement () {
    return html`
      <div class="pa2 mr2 self-end tr">
        <a href="#" class="tr" onclick=${this._onclick}>${this.local.authText}</a>
      </div>
    `
  }

}

module.exports = AuthBtn;