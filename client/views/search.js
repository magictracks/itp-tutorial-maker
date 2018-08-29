var html = require('choo/html')
var NavbarTop = require("../components/NavbarTop")
var NavbarBottom = require("../components/NavbarBottom")
var SearchBar = require("../components/SearchBar")
var TutorialCard = require("../components/TutorialCard")
var SectionCard = require("../components/SectionCard")
var ResourceCard = require("../components/ResourceCard")


var css = require("sheetify")

css`
.card{
  min-width:200px;
}
`

var TITLE = 'client - search'

let myTutorials = [];
let mySections = [];
let myResources = [];

for(let i = 0; i < 10; i++){
  let output = {
    title: "hello I'm a title",
    url:"#",
    urlName:"Link",
    description: "Anim nisi nostrud aliquip officia eu laborum sint aliqua cupidatat minim dolor sint culpa."
  }
  myTutorials.push( Object.assign({type:"tutorial"}, output) )
  mySections.push(Object.assign({type:"section"}, output))
  myResources.push(Object.assign({type:"resource"}, output))
}


module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)


  // appendItem(myTutorials, "tutorial")
  return html`
  <body class="code w-100 h-100 bg-washed-blue flex flex-column">
    ${state.cache(NavbarTop, "NavbarTop", state, emit)}
    <main class="w-100 h-auto flex flex-column mt2 mb2 pr4 pl4 dark-pink" style="flex-grow:1">
      ${state.cache(SearchBar, "SearchBar", state, emit)}

      <section class="flex flex-column w-100 mb2 br2">

          <section class="mix w-100 pa2 h-auto br2 flex flex-row flex-wrap mb2 bg-washed-blue">
            <div class="w-100 pa2 flex flex-row items-center justify-between">
              <h3 class="pa0 ma0">Search Results: ${"search term"}</h3>
            </div>
            <div class="w-100 pa2 flex flex-row items-center flex-wrap justify-between" >
              ${myTutorials.map((d) => new TutorialCard(d) )}
              ${mySections.map((d) => new SectionCard(d) )}
              ${myResources.map((d) => new ResourceCard(d) )}
            </div>
          </section>

      </section>
      </main>
      ${state.cache(NavbarBottom, "NavbarBottom")}
    </body>
  `
}
