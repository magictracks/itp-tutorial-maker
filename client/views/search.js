var html = require('choo/html')
var NavbarTop = require("../components/NavbarTop")
var NavbarBottom = require("../components/NavbarBottom")
var SearchBar = require("../components/SearchBar")

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
    <body class="code lh-copy w-100 h-auto">
      ${state.cache(NavbarTop, "NavbarTop")}
      <main class="pl4 pr4 flex flex-column bg-washed-blue w-100 h-100 dark-pink mb3">
      ${state.cache(SearchBar, "SearchBar")}

      </main>
      ${state.cache(NavbarBottom, "NavbarBottom")}
    </body>
  `
}
