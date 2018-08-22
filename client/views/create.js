var html = require('choo/html')
var NavbarTop = require("../components/NavbarTop")
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

for(let i = 0; i < 5; i++){
  let output = {title: "hello I'm a title", description: "I'm a description"}
  myTutorials.push( Object.assign({type:"tutorial"}, output) )
  mySections.push(Object.assign({type:"section"}, output))
  myResources.push(Object.assign({type:"resource"}, output))
}

let appendItem = function(arr, resourceType){
    console.log("clicked!")
    let output = {title: "hello I'm a title", description: "I'm a description"}
    arr.push( Object.assign({type:"tutorial"}, output) )
    console.log(arr.length)
    return arr
  }


module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)


  // appendItem(myTutorials, "tutorial")
  return html`
    <body class="code lh-copy w-100 h-100">
      ${state.cache(NavbarTop, "NavbarTop")}
      <main class="pl4 pr4 mt3 flex flex-column bg-washed-blue w-100 h-100 dark-pink mb3">
      <div class="flex flex-row w-100 pt2 pb2">
        <div class="w-20 flex flex-column h5">
          <div class="br2 ba h4 w4 pa2 mr2 flex flex-column items-center justify-center">
              <div class="br-100">+</div>
          </div>
          <div class="info mt1 w4">
            <p class="pa0 ma0"> First, Last </p>
            <p class="pa0 ma0"> @username </p>
            <small>settings</small>
          </div>
        </div>
        <div class="w-80 br2 ba flex flex-column pa3 h5">
          <h3 class="ma0 pa0">Recent stuffs</h3>
          <div class="w-100">
            <p class="ma0 pa0"><a class="link">added new section to Tutorial A</a></p>
            <p class="ma0 pa0"><a class="link">added new resource to Tutorial B</a></p>
            <p class="ma0 pa0"><a class="link">added new resource from youtube.com</a></p>
          </div>
        </div>
      </div>
      <div class="flex flex-column w-100 h-100">
          <section class="w-100 mt2 pa3 h4 br2 ba mb2">
            <input class="pa2 w-100 ba bn h3" type="text" placeholder="🔍 Search or filter">
          </section>

          <section class="w-100 pa3 h6 br2 bg-yellow">
            <div class="w-100 flex flex-row items-center justify-between">
              <h3 class="pa0 ma0">My Tutorials</h3>
              <a class="link">See all in their full glory</a>
            </div>
            <div class="w-100 pa2 flex flex-row items-center overflow-x-scroll" >
              <div onclick=${() => appendItem(myTutorials, "tutorial") } class="card w-100 h5 pa2 mr2 mt2 flex flex-column items-center justify-center br2 ba">
                  <div class="br-100">Add new :)</div>
              </div>
              ${myTutorials.map((d) =>
                html`
                <div class="card w-100 h5 pa2 mr2 mt2 bg-washed-yellow br2 ba flex flex-column">
                  <div class="w-100 h-40 outline" style="min-height:100px"></div>
                  <small>${d.title}</small>
                  <small>${d.description}</small>
                </div>
                `
              )}
            </div>
          </section>
          <section class="w-100 pa3 mt2 h6 br2 bg-dark-pink black">
            <div class="w-100 flex flex-row items-center justify-between">
              <h3 class="pa0 ma0">My Sections</h3>
              <a class="link">See all in their full glory</a>
            </div>
            <div class="w-100 pa2 flex flex-row h-auto items-center overflow-x-scroll" >
              <div onclick=${() => appendItem(mySections, "section") } class="card w-100 h5 pa2 mr2 mt2 flex flex-column items-center justify-center br2 ba">
                  <div class="br-100">Add new :)</div>
              </div>
              ${mySections.map((d) =>
                html`
                <div class="card w-100 h5 pa2 mr2 mt2 bg-light-pink br2 ba flex flex-column">
                  <div class="w-100 h-40 outline" style="min-height:100px"></div>
                  <small>${d.title}</small>
                  <small>${d.description}</small>
                </div>
                `
              )}
            </div>
          </section>
          <section class="w-100 mt2 pa3 h6 br2 bg-light-green mb3">
            <div class="w-100 flex flex-row items-center justify-between">
              <h3 class="pa0 ma0">My Resources</h3>
              <a class="link">See all in their full glory</a>
            </div>
            <div class="w-100 pa2 flex flex-row h-auto items-center overflow-x-scroll" >
              <div onclick=${() => appendItem(myResources, "resource") } class="card w-100 h5 pa2 mr2 mt2 flex flex-column items-center justify-center br2 ba">
                  <div class="br-100">Add new :)</div>
              </div>
              ${myResources.map((d) =>
                html`
                <div class="card w-100 h5 pa2 mr2 mt2 bg-washed-green br2 ba flex flex-column">
                  <div class="w-100 h-40 outline" style="min-height:100px"></div>
                  <small>${d.title}</small>
                  <small>${d.description}</small>
                </div>
                `
              )}
            </div>
          </section>
        </div>
      </main>
    </body>
  `
}
