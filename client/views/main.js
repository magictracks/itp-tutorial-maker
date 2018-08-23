var html = require('choo/html')
var NavbarTop = require("../components/NavbarTop")

var TITLE = 'client - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)


  return html`
    <body class="code lh-copy w-100 h-auto">
      ${state.cache(NavbarTop, "NavbarTop")}
      <main class="pl4 pr4 flex flex-row bg-washed-blue w-100 h-100 dark-pink">
        <div class="pa4 flex flex-column bg-washed-blue w-60-l h-100 justify-center">
          <h1 class="pa0 ma0 f1 lh-solid">Welcome to the Magic Tutorial Maker!</h1>
          <p> This is a community and webspace dedicated to curating learning materials for the creative and the curious. </p>
        </div>
        <div class="pa4 flex flex-column bg-washed-blue w-40-l h-100 justify-center">
          <div class="flex flex-column w-100 pa4 br2 bg-washed-red dark-pink">
            <p class="f4 lh-copy">Join the community and start building!</p>
            <form class="w-100 mt1">
              <input class="w-100 pa2 br2 ba b--dark-pink dark-pink" type="email" placeholder="youremail@email.com">
              <input class="w-100 mt1 pa2 br2 ba b--dark-pink dark-pink" type="password" placeholder="supersecretpassword">
              <input class="pa2 mt2 br2 ba b--dark-pink dark-pink" type="submit" value="Signup!">
            </form>
          </div>
        </div>

      </main>
    </body>
  `
}
