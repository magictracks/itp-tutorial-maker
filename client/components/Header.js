var Component = require('choo/component')
var html = require('choo/html')

var AuthBtn = require('../components/AuthBtn')
var OpenExistingProjectBtn = require('../components/OpenExistingProjectBtn')
var SaveToLocalStorage = require('../components/SaveToLocalStorage')




class Header extends Component {

  constructor(name, state, emit){
    super(name)

    this.state = state;
    this.emit = emit;
  }

  update () {
      return true
  }

  createElement (){
    return html`
    <header class="flex w-100 center pa2">
      <div class="outline pa2 mr2">
        <code>Magic Tracks</code>
      </div>
      ${this.state.cache(AuthBtn, "AuthBtn").render()}
      ${this.state.cache(OpenExistingProjectBtn, "OpenExistingProjectBtn").render()}
      ${this.state.cache(SaveToLocalStorage, "SaveToLocalStorage").render()}
    </header>
    `
  }

}

module.exports = Header;