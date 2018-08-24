var html = require("choo/html");

module.exports = function(name, state, emit){

  return html`
    <a class="w4 dark-pink pa2 tl" onclick=${() => emit('popState') }>← go back </a>
  `
}
