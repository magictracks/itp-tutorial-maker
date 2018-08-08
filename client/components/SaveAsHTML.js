var Component = require('choo/component')
var html = require('choo/html')


class SaveAsHTML extends Component {

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
    this.emit("projects:saveAsJSON");
  }

  createElement () {
    return html`
      <div class="pa2 mr2 self-end tr">
        <a class="tr" href="data:text/html;charset=utf-8,${encodeURIComponent(document.querySelector("main").outerHTML)}" download="${this.state.tutorial.id}.html" onclick=${this._onclick}>Save as HTML</a>
      </div>
    `
  }

}

module.exports = SaveAsHTML;