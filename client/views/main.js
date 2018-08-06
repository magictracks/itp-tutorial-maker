var html = require('choo/html')
var TITLE = 'client-choo - main'

var Header = require('../components/Header')
var Tutorial = require('../components/Tutorial')
var HelloBtn = require('../components/HelloBtn')


module.exports = view

function view (state, emit) {

  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy p-2 center">
      ${state.cache(Header, "header").render()}
      <main class="outline w-100 pa2">
      ${state.cache(Tutorial, "tutorial").render()}
      </main>
    </body>
  `

  // function handleClick () {
  //   emit('clicks:add', 1)
  // }

  // function handleHelloClick () {
  //   emit('hellos:add', "bonjour")
  // }
}
