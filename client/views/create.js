var html = require('choo/html')
var NavbarTop = require("../components/NavbarTop")

var TITLE = 'client - create'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)


  return html`
    <body class="code lh-copy w-100 h-100">
      ${state.cache(NavbarTop, "NavbarTop")}
      <main class="pl4 pr4 flex flex-row bg-washed-blue w-100 h-100 dark-pink">
        
      </main>
    </body>
  `
}
