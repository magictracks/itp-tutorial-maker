var Component = require('choo/component')
var html = require('choo/html')


class SaveAsJSON extends Component {

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
        <a class="tr" href="data:text/json;charset=utf-8,${encodeURIComponent(this.state.projects.outputJSON)}" download="${this.state.tutorial.id}.json" onclick=${this._onclick}>Save as JSON</a>
      </div>
    `
  }

}

module.exports = SaveAsJSON;