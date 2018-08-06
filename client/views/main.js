var html = require('choo/html')
var TITLE = 'client-choo - main'

var HelloBtn = require('../components/HelloBtn')

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
        <section class="fl mw6 w-50-m w-third-l pa3">
          <h2>Clicks</h2>

          <p>Number of clicks stored: ${state.totalClicks}</p>

          <button class="dim ph3 ba bw1 pv2 b--black pointer bg-white"
            onclick=${handleClick}>
            Emit a click event
          </button>

          <br><br>
        </section>

        <section class="fl mw6 w-50-m w-third-l pa3">
          <h2>HELLOS.</h2>

          <p>Number of hellos stored: ${state.totalHellos}</p>
          <ul>
            ${JSON.stringify(state.hellos)}
          </ul>

          <button class="dim ph3 ba bw1 pv2 b--black pointer bg-white"
            onclick=${handleHelloClick}>
            Emit a click event
          </button>
          <div>
          ${HelloBtn(emit, "Guten Tag")}
          ${HelloBtn(emit, "Bonjour")}
          ${HelloBtn(emit, "Olà")}
          </div>

          <br><br>
        </section>
      </main>
    </body>
  `

  function handleClick () {
    emit('clicks:add', 1)
  }

  function handleHelloClick () {
    emit('hellos:add', "bonjour")
  }
}
