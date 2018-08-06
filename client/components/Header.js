var Component = require('choo/component')
var html = require('choo/html')


module.exports = class Button extends component {
  createElement () {
    return html`
      <button onclick=${this._onclick}>
        Click me
      </button>
    `
  }

  update () {
    return false
  }

  _onclick (e) {
    this.emit('increment', 1)
  }
}