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

var TITLE = 'client - create'

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

let appendItem = function(arr, resourceType){
    console.log("clicked!")
    let output = {title: "hello I'm a title", description: "Anim nisi nostrud aliquip officia eu laborum sint aliqua cupidatat minim dolor sint culpa."}
    arr.push( Object.assign({type:"tutorial"}, output) )
    console.log(arr.length)
    return arr
  }


module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)


  // appendItem(myTutorials, "tutorial")
  return html`
    <body class="code lh-copy w-100 h-auto">
      ${state.cache(NavbarTop, "NavbarTop")}
      <main class="pl4 pr4 flex flex-column bg-washed-blue w-100 h-100 dark-pink mb3">

      ${state.cache(SearchBar, "SearchBar", state, emit)}

      <section class="flex flex-row w-100 pt2 pb2 mt1 pa2" style="min-height:300px">
        <div class="w-30 flex flex-column justify-center items-center h5">
          <div class="br2 ba h4 w4 pa2 mr2 flex flex-column items-center justify-center">
              <div class="br-100">+</div>
          </div>
          <div class="info mt1 w4">
            <p class="pa0 ma0"> First, Last </p>
            <p class="pa0 ma0"> @username </p>
            <small>settings</small>
          </div>
        </div>
        <div class="w-70 br2 ba flex flex-column pa3 h5">
          <h3 class="ma0 pa0">Recent stuffs</h3>
          <div class="w-100">
            <p class="ma0 pa0"><a class="link">added new section to Tutorial A</a></p>
            <p class="ma0 pa0"><a class="link">added new resource to Tutorial B</a></p>
            <p class="ma0 pa0"><a class="link">added new resource from youtube.com</a></p>
          </div>
        </div>
      </section>


      <div class="flex flex-column w-100 h-100 mt1">

          <section class="w-100 pa3 h-auto flex flex-column br2 bg-yellow">
            <div class="w-100 flex flex-row items-center justify-between">
              <h3 class="pa0 ma0">My Tutorials</h3>
            </div>
            <div class="w-100 pa2 flex flex-row flex-wrap items-center justify-between">
              <div onclick=${() => appendItem(myTutorials, "tutorial") } class="card w-30 h5 pa2 mr2 mt2 flex flex-column items-center justify-center br2 ba">
                  <div class="br-100">Add new :)</div>
              </div>
              ${myTutorials.map((d) => new TutorialCard(d))}
            </div>
          </section>

          <section class="w-100 pa3 mt2 h6 br2 bg-dark-pink black">
            <div class="w-100 flex flex-row items-center justify-between">
              <h3 class="pa0 ma0">My Sections</h3>
              <a class="link">See all</a>
            </div>
            <div class="w-100 pa2 flex flex-row h-auto items-center overflow-x-scroll" >
              <div onclick=${() => appendItem(mySections, "section") } class="card w-100 h5 pa2 mr2 mt2 flex flex-column items-center justify-center br2 ba">
                  <div class="br-100">Add new :)</div>
              </div>
              ${mySections.map((d) => new SectionCard(d))}
            </div>
          </section>
          <section class="w-100 mt2 pa3 h6 br2 bg-light-green mb3">
            <div class="w-100 flex flex-row items-center justify-between">
              <h3 class="pa0 ma0">My Resources</h3>
              <a class="link">See all</a>
            </div>
            <div class="w-100 pa2 flex flex-row h-auto items-center overflow-x-scroll" >
              <div onclick=${() => appendItem(myResources, "resource") } class="card w-100 h5 pa2 mr2 mt2 flex flex-column items-center justify-center br2 ba">
                  <div class="br-100">Add new :)</div>
              </div>
              ${myResources.map((d) => new ResourceCard(d))}
            </div>
          </section>
        </div>
      </main>
      ${state.cache(NavbarBottom, "NavbarBottom")}
    </body>
  `
}
