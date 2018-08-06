
var html = require('choo/html');

module.exports = HelloBtn;

function HelloBtn (emit, greeting){

  function _onclick(e){
     emit('hellos:add', greeting)
  }

  return html`
    <button onclick=${_onclick}>
        Say ${greeting}
    </button>
  `

}
