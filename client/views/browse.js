var html = require('choo/html')
var NavbarTop = require("../components/NavbarTop")
var NavbarBottom = require("../components/NavbarBottom")
var SearchBar = require("../components/SearchBar")
var CuratorCard = require("../components/CuratorCard")
var TutorialCard = require("../components/TutorialCard")
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

let curators = [];
  curators.push({user:"joeyklee", name:"Joey L", description:"Skateboards + Pixels = tools for awesome"})
  curators.push({user:"sandy", name:"Sandy H", description:"I can make anything from fabric"})
  curators.push({user:"hongky", name:"Hong K", description:"prosthetics are my thing"})
  curators.push({user:"shiffman", name:"Dan Shiffman", description:"Prof. @ ITP"})
  curators.push({user:"dano1234", name:"Dan O", description:"Prof. @ ITP"})
  curators.push({user:"vanevery", name:"Shawn Van E", description:"Prof. @ ITP"})


module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)


  // appendItem(myTutorials, "tutorial")
  return html`
    <body class="code lh-copy w-100 h-auto">
      ${state.cache(NavbarTop, "NavbarTop")}
      <main class="pl4 pr4 flex flex-column bg-washed-blue w-100 h-100 dark-pink mb3">

      ${state.cache(SearchBar, "SearchBar")}

      <section class="flex flex-row w-100 h5 mb3 mt3 pa2 br2" style="min-height:300px">
        <div class="flex flex-column w-40 h-100 pa1 justify-center">
          <h2>Curate, learn, and share with Magic Tutorial Maker!</h2>
          <small>An open educational initiative by ITP</small>
        </div>
        <div class="flex flex-column w-60 h-100">
          <div class="w-100 h-100 flex flex-column justify-center items-center br2 ba">
            <div class="br-100 ba w3 h3 flex flex-column justify-center items-center">
              <div class="w-100 tc">▷</div>
            </div>
          </div>
        </div>
      </section>



      <section class="flex flex-column w-100 mb2 br2">

          <section class="mix w-100 pa2 h-auto br2 flex flex-row flex-wrap mb2 bg-yellow">
            <div class="w-100 pa2 flex flex-row items-center justify-between">
              <h3 class="pa0 ma0">Recently Added</h3>
              <a class="link">See all</a>
            </div>
            <div class="w-100 pa2 flex flex-row items-center flex-wrap justify-between" >
              ${myTutorials.map((tutorial) => new TutorialCard(tutorial) )}
            </div>
          </section>

          <section class="w-100 pa2 h-auto br2 flex flex-column bg-light-green">
            <div class="w-100 pa2 flex flex-row items-center justify-between">
              <h3 class="pa0 ma0">Browse by Curator</h3>
              <a class="link">See all</a>
            </div>
            <div class="w-100 pa2 flex flex-row items-center flex-wrap justify-between" >
              ${ curators.map((curator) => new CuratorCard(curator)) }
            </div>
          </section>

      </section>
      </main>
      ${state.cache(NavbarBottom, "NavbarBottom")}
    </body>
  `
}
