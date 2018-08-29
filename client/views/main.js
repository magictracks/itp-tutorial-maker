var html = require('choo/html')
var NavbarTop = require("../components/NavbarTop")
var NavbarBottom = require("../components/NavbarBottom")
var LoginModal = require("../components/LoginModal")

var TITLE = 'client - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)


  return html`
  <body class="code w-100 h-100 bg-washed-blue flex flex-column items-center">
    ${state.cache(NavbarTop, "NavbarTop", state, emit)}
    <main class="w-100 h-auto flex flex-column mt2 mb2 pr4 pl4 dark-pink" style="flex-grow:1; max-width:1200px">
        <!-- row1 -->
        <div class="w-100 h-100 flex flex-row items-center justify-center">
          <!-- left -->
          <div class="pa4 flex flex-column bg-washed-blue w-60-l h-100 justify-center">
            <h1 class="pa0 ma0 f1 lh-solid">Welcome to the Magic Tutorial Maker!</h1>
            <p> This is a community and webspace dedicated to curating learning materials for the creative and the curious. </p>
          </div>
          <!-- right -->
          <div class="pa4 flex flex-column bg-washed-blue w-40-l h-100 justify-center">
            <div class="flex flex-column w-100 pa4 br2 bg-washed-red dark-pink">
              <p class="f4 lh-copy">Join the community and start building!</p>
              <form class="w-100 mt1" onsubmit=${() => {emit("pushState", "/browse")} }>
                <input class="w-100 pa2 br2 ba b--dark-pink dark-pink" type="email" placeholder="youremail@email.com">
                <input class="w-100 mt1 pa2 br2 ba b--dark-pink dark-pink" type="password" placeholder="supersecretpassword">
                <input class="pa2 mt2 br2 ba b--dark-pink dark-pink" type="submit" value="Signup!">
              </form>
            </div>
          </div>
        </div> <!-- row1 -->
      </main>
      ${state.cache(NavbarBottom, "NavbarBottom", state, emit)}
      ${state.cache(LoginModal, "LoginModal", state, emit)}
    </body>
  `
}
