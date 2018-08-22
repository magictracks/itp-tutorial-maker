var html = require('choo/html')
var NavbarTop = require("../components/NavbarTop")
var css = require("sheetify")

css`
.mix{
  min-height:540px;
}
`

var TITLE = 'client - browse'

let myTutorials = [];
let mySections = [];
let myResources = [];

for(let i = 0; i < 20; i++){
  let output = {title: "hello I'm a title", description: "I'm a description", user:Math.random()*1000}
  myTutorials.push( Object.assign({type:"tutorial"}, output) )
  mySections.push(Object.assign({type:"section"}, output))
  myResources.push(Object.assign({type:"resource"}, output))
}



module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)


  // appendItem(myTutorials, "tutorial")
  return html`
    <body class="code lh-copy w-100 h-100">
      ${state.cache(NavbarTop, "NavbarTop")}
      <main class="pl4 pr4 mt3 flex flex-column bg-washed-blue w-100 h-100 dark-pink mb3">
      <div class="flex flex-column w-100">
          <section class="w-100 pa2 h3 br2 ba flex flex-column justify-center items-center">
            <input class="pa2 w-100 ba bn h3" type="text" placeholder="🔍 Search or filter">
          </section>
      </div>
      <div class="flex flex-column w-100">
          <section class="mix w-100 pa2 min-h-50 ba br2 flex flex-row flex-wrap">
            <h2>A tasty mix of tutorials</h2>

          </section>
          <section class="w-100 pa2 h5 br2 ba flex flex-row flex-wrap">
            <h2>By Tags</h2>

          </section>
      </div>
      </main>
    </body>
  `
}
