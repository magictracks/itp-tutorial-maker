var Component = require('choo/component')
var html = require('choo/html')


class OpenExistingProjectBtn extends Component {

  constructor(name, state, emit){
    super(name)
    this.state = state;
    this.emit = emit;

    this._onclick = this._onclick.bind(this);
    this.local = this.state.components[name] = {}
  }

  update () {
      return true
  }


  _onclick(e) {
    this.emit("projects:open");
  }

  createElement () {
    return html`
      <div class="pa2 mr2 self-end tr">
        <a href="#" class="tr" onclick=${this._onclick}>Open Existing</a>
      </div>
    `
  }

}

module.exports = OpenExistingProjectBtn;