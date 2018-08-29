var html = require('choo/html')
var NavbarTop = require("../components/NavbarTop")
var NavbarBottom = require("../components/NavbarBottom")
var SearchBar = require("../components/SearchBar")
var CuratorCard = require("../components/CuratorCard")
var TutorialCard = require("../components/TutorialCard")
var SectionCard = require("../components/SectionCard")
var ResourceCard = require("../components/ResourceCard")
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

let tags =  [
    "javascript",
    "learning",
    "tutorial",
    "processing",
    "Processing (Programming Language)",
    "creative coding",
    "p5.js",
    "JavaScript (Programming Language)",
    "HTML (Programming Language)",
    "HTML5 (API)",
    "Cascading Style Sheets (Programming Language)",
    "Education (TV Genre)",
    "Tutorial (Media Genre)",
    "Intro",
    "Lesson",
    "Lessons",
    "Teacher",
    "p5js",
    "daniel shiffman",
    "p5 js",
    "p5.js tutorial",
    "coding",
    "programming"
  ]


module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

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


  return html`
  <body class="code w-100 h-100 bg-washed-blue flex flex-column items-center">
    ${state.cache(NavbarTop, "NavbarTop", state, emit)}
    <main class="w-100 h-auto flex flex-column mt2 mb2 pr4 pl4 dark-pink" style="flex-grow:1; max-width:1200px">


      ${state.cache(SearchBar, "SearchBar", state, emit)}

      <section class="flex flex-row items-center w-100 pt2 pb2 mt4 pa2 mb4 br2" style="min-height:300px">
        <div class="flex flex-column w-40 h-100 pa1 justify-center">
          <h1 class="f2">Curate, learn, and share with Magic Tutorial Maker!</h1>
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

        <!-- project container -->
      <section class="w-100 h-auto pa2 br2 flex flex-column">

        <div class="w-100 mt2 mb2">
          <ul class="w-100 flex flex-row pa0 ma0">
            <li class="list mr2 f4 br-pill pa3 bg-dark-pink black"><a class="contributionToggler" onclick=${toggleView} data-id="tutorials">Tutorials</a></li>
            <li class="list mr2 f4 br-pill pa3"><a class="contributionToggler" onclick=${toggleView} data-id="sections">Sections</a></li>
            <li class="list mr2 f4 br-pill pa3"><a class="contributionToggler" onclick=${toggleView} data-id="resources">Resources</a></li>
          </ul>
        </div>

        <!-- Recently Added -->
        <section class="w-100 mt4 mb4">
          <div class="w-100 mbt mt2 pa2 flex flex-row items-center justify-between">
             <h3 class="pa0 ma0">Recently Added</h3>
             <a class="link">See all</a>
          </div>
          <!-- tutorials -->
          <section id="tutorials" class="contributions">
            <div class="w-100 br2 h-auto mt2 flex flex-column">
              <div class="w-100 h-auto flex flex-row flex-wrap justify-between content-between">
                ${myTutorials.map((d) => new TutorialCard(d))}
              </div>
            </div>
          </section>
          <!-- sections -->
          <section id="sections" class="contributions dn">
            <div class="w-100 br2 h-auto mt2 flex flex-column">
              <div class="w-100 h-auto flex flex-row flex-wrap justify-between content-between">
                ${mySections.map((d) => new SectionCard(d))}
              </div>
            </div>
          </section>
          <!-- resources -->
          <section id="resources" class="contributions dn">
            <div class="w-100 br2 h-auto mt2 flex flex-column">
              <div class="w-100 h-auto flex flex-row flex-wrap justify-between content-between">
                ${myResources.map((d) => new ResourceCard(d))}
              </div>
            </div>
          </section>
        </section>

        <!-- Curators -->
        <section class="w-100 mt4 mb4">
          <div class="w-100 mbt mt2 pa2 flex flex-row items-center justify-between">
             <h3 class="pa0 ma0">Some of our lovely curators</h3>
             <a class="link">See all</a>
          </div>
          <!-- curators -->
          <section id="curators" class="curators">
            <div class="w-100 br2 h-auto mt2 flex flex-column">
              <div class="w-100 h-auto flex flex-row flex-wrap justify-between content-between">
                 ${ curators.map((curator) => new CuratorCard(curator)) }
              </div>
            </div>
          </section>
        </section>


        <!-- Curators -->
        <section class="w-100 mt4 mb4">
          <div class="w-100 mbt mt2 pa2 flex flex-row items-center justify-between">
             <h3 class="pa0 ma0">Some popular tags</h3>
             <a class="link">See all</a>
          </div>
          <!-- tutorials -->
          <section id="tags" class="curators">
            <div class="w-100 br2 h-auto mt2 flex flex-column">
              <div class="w-100 h-auto flex flex-row flex-wrap justify-between content-between">
                ${tags.map( (tag) => html` <div class="ba br-pill pa3">${tag} </div> ` )}
              </div>
            </div>
          </section>
        </section>

        <section class="w-100 mt4 mb4">
          <div class="w-100 mbt mt2 pa2 flex flex-row items-center">
              <div class="w-50">
                 <h1>Can't find anything you'll looking for? It's easy to <br><a href="/create">start curating yourself!</a></h1>
             </div>
          </div>
        </section>


      </section>




      </main>
      ${state.cache(NavbarBottom, "NavbarBottom")}
    </body>
  `
}
