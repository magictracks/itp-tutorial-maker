var html = require('choo/html')
var NavbarTop = require("../components/NavbarTop")
var NavbarBottom = require("../components/NavbarBottom")
var SearchBar = require("../components/SearchBar")
var TutorialCard = require("../components/TutorialCard")
var SectionCard = require("../components/SectionCard")
var ResourceCard = require("../components/ResourceCard")

var AddResourceModal = require("../components/AddResourceModal")
var AddSectionModal = require("../components/AddSectionModal")

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

  let toggleResourceModal = function(){
    console.log("clicked")
    let modal = document.querySelector("#addResourceModal")
    modal.classList.toggle("dn")

    let els = document.querySelectorAll(".addResourceStep")
    for(let i = 0; i < els.length; i++){
      console.log(els[i].classList)
      els[i].classList.add("dn")
    }
    // default to having step 1 open
    document.querySelector("#addResourceStep-1").classList.remove("dn");
  }


  let toggleSectionModal = function(){
    console.log("clicked")
    let modal = document.querySelector("#addSectionModal")
    modal.classList.toggle("dn")

    let els = document.querySelectorAll(".addSectionStep")
    for(let i = 0; i < els.length; i++){
      console.log(els[i].classList)
      els[i].classList.add("dn")
    }
    // default to having step 1 open
    document.querySelector("#addSectionStep-1").classList.remove("dn");
  }


  let toggleView = function(e){
    console.log("clicked!");

    let selected = e.target.dataset.id;

    let btns = document.querySelectorAll(".contributionToggler")

    for(let i = 0; i < btns.length; i++){
      if(btns[i].dataset.id == selected){
          btns[i].parentElement.classList.add("bg-dark-pink")
          btns[i].parentElement.classList.add("black")
      } else{
          btns[i].parentElement.classList.remove("bg-dark-pink")
          btns[i].parentElement.classList.remove("black")
      }
    }


    let els = document.querySelectorAll(".contributions")

    for(let i = 0; i < els.length; i++){
      console.log(els[i].dataset)
      if(els[i].id == selected){
          els[i].classList.remove("dn")
      } else{
          els[i].classList.add("dn")
      }
    }

  }



  // appendItem(myTutorials, "tutorial")
  return html`
  <body class="code w-100 h-100 bg-washed-blue flex flex-column items-center">
    ${state.cache(NavbarTop, "NavbarTop", state, emit)}
    <main class="w-100 h-auto flex flex-column mt2 mb2 pr4 pl4 dark-pink" style="flex-grow:1; max-width:1200px">

      ${state.cache(SearchBar, "SearchBar", state, emit)}

      <!-- User Info view -->
      <section class="flex flex-row items-center w-100 pt2 pb2 mt4 pa2 mb4 ba br2" style="min-height:300px">
        <div class="w-30 flex flex-column justify-center items-center h5">
          <div class="br-100 ba h4 w4 pa2 mr2 flex flex-column items-center justify-center">
              <div class="br-100 f2">🧠</div>
          </div>
          <div class="info mt2 w4 tl">
            <p class="pa0 ma0"> First Last </p>
            <p class="pa0 ma0"> @username </p>
            <small>settings</small>
          </div>
        </div>
        <div class="w-70 br2 flex flex-column items-center h5">

          <fieldset class="w-90 flex flex-column h-100 ba br2 dark-pink b--dark-pink">
            <legend class="br-pill f4 ba pa3">Recent 🎉</legend>
            <ul>
              <li class="ma0 pa0"><a class="link">added new section to Tutorial A</a></li>
              <li class="ma0 pa0"><a class="link">added new resource to Tutorial B</a></li>
              <li class="ma0 pa0"><a class="link">added new resource from youtube.com</a></li>
            </ul>
          </fieldset>
        </div>
      </section>

      <!-- project container -->
      <section class="w-100 h-auto pa2 br2 flex flex-column mb4">

        <div class="w-100 mt2 mb2">
          <ul class="w-100 flex flex-row pa0 ma0">
            <li class="list mr2 f4 br-pill pa3 bg-dark-pink black"><a class="contributionToggler" onclick=${toggleView} data-id="tutorials">Tutorials</a></li>
            <li class="list mr2 f4 br-pill pa3"><a class="contributionToggler" onclick=${toggleView} data-id="sections">Sections</a></li>
            <li class="list mr2 f4 br-pill pa3"><a class="contributionToggler" onclick=${toggleView} data-id="resources">Resources</a></li>
          </ul>
        </div>
        <!-- tutorials -->
        <section id="tutorials" class="contributions">
          <div class="w-100 br2 h-auto mt2 flex flex-column">
            <div class="w-100 mb2 mt2">
              <h2 class="pa0 ma0">Tutorials</h2>
            </div>
            <div class="w-100 h-auto flex flex-row flex-wrap justify-between content-between">
              <!-- add new -->
              <div onclick=${() => appendItem(myTutorials, "tutorial")} class="card w-30 h5 pa2 mr2 mt3 flex flex-column items-center justify-center br2 ba" style="width:324px; height:324px">
                  <div class="br-100">Add new :)</div>
              </div>

              ${myTutorials.map((d) => new TutorialCard(d))}
            </div>
          </div>
        </section>

        <!-- Sections -->
        <section id="sections" class="contributions dn">
          <div class="w-100 br2 h-auto mt2 flex flex-column">
            <div class="w-100 mb2 mt2">
              <h2 class="pa0 ma0">Sections</h2>
            </div>
            <div class="w-100 h-auto flex flex-row flex-wrap justify-between">
              <!-- add new -->
              <div class="card w-30 h4 pa2 mr2 mt3 ba br2 flex flex-column grow items-center justify-center" style="width:320px;">
                  <div class="br-100">Add new :)</div>
              </div>

              ${mySections.map((d) => new SectionCard(d))}
            </div>
          </div>
        </section>

        <!-- Resources -->
        <section id="resources" class="contributions dn">
          <div class="w-100 br2 h-auto mt2 flex flex-column">
            <div class="w-100 mb2 mt2">
              <h2 class="pa0 ma0">Resources</h2>
            </div>
            <div class="w-100 h-auto flex flex-row flex-wrap justify-between">
                <!-- add new -->
              <div class="card w-30 h5 pa2 mr2 mt3 flex flex-column items-center justify-center br2 ba" style="width:324px; height:324px">
                  <div class="br-100">Add new :)</div>
              </div>

              ${myResources.map((d) => new ResourceCard(d))}
            </div>
          </div>
        </section>

      </section>



      </main>

      ${state.cache(NavbarBottom, "NavbarBottom")}
      ${state.cache(AddResourceModal, "AddResourceModal", state, emit )}
      ${state.cache(AddSectionModal, "AddSectionModal", state, emit )}
    </body>
  `
}
