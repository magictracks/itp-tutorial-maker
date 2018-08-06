var Component = require('choo/component')
var html = require('choo/html')


class SaveToLocalStorage extends Component {

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
    this.emit("projects:saveToLocalStorage");
  }

  createElement () {
    return html`
      <div class="pa2 mr2 self-end tr">
        <a href="#" class="tr" onclick=${this._onclick}>Save to Local Storage</a>
      </div>
    `
  }

}

module.exports = SaveToLocalStorage;