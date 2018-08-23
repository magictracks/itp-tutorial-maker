var html = require("choo/html")
var css = require("sheetify")


module.exports = function(state, emit) {


  return html`
    <footer class="w-100 h4 flex flex-column bg-navy pa2 dark-pink">
      <div class="w-100 flex flex-row pa2 pl4">
        <div class="w-40 flex flex-column">
            <small>An open education initiative by ITP.</small>
            <small>Made with ♡ by @joeyklee and @blahah using Choo.js & Feathers.js.</small>
        </div>
        <div class="w-60 pl2 pr4 flex flex-row justify-between">
          <div>
            <ul class="list ma0 pl0">
              <li>about</li>
              <li>contact</li>
              <li>report issue</li>
            </ul>
          </div>
          <div>
            <ul class="list ma0 pl0">
              <li>report issue</li>
              <li>contribute</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  `
}
