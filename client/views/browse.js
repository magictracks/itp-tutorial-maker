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
let curators = [];

for(let i = 0; i < 9; i++){
  let output = {title: "hello I'm a title", description: "I'm a description", user:Math.random()*1000}
  myTutorials.push( Object.assign({type:"tutorial"}, output) )
  mySections.push(Object.assign({type:"section"}, output))
  myResources.push(Object.assign({type:"resource"}, output))
}

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
    <body class="code lh-copy w-100 h-100">
      ${state.cache(NavbarTop, "NavbarTop")}
      <main class="pl4 pr4 flex flex-column bg-washed-blue w-100 h-100 dark-pink mb3">

      <section class="flex flex-column w-100 mt3 mb2 br2 pa2 bg-washed-red">
            <div>
              <h3 class="ma0 pa0 mb2"> What will you learn today? </h3>
            </div>
            <section class="w-100 h2 br2 flex flex-column justify-center items-center">
              <input class="pa2 w-100 ba br2 bn h3" type="text" placeholder="🔍 Search by tags, user, topic">
            </section>
            <section class="w-100 h-auto br2 flex flex-column items-start mt2">
              <small>some popular tags: </small>
              <ul class="list ma0 pa0 pl0 flex flex-row flex-wrap justify-between">
                <li class="mr2 pa1 ba f6 br2"><a>coding train</a></li>
                <li class="mr2 pa1 ba f6 br2"><a>javascript</a></li>
                <li class="mr2 pa1 ba f6 br2"><a>p5js</a></li>
                <li class="mr2 pa1 ba f6 br2"><a>arduino</a></li>
                <li class="mr2 pa1 ba f6 br2"><a>open source</a></li>
                <li class="mr2 pa1 ba f6 br2"><a>github</a></li>
              </ul>
            </section>
          </section>

      <section class="flex flex-row w-100 h-5 mb3 mt3 pa2 br2" style="min-height:300px">
        <div class="flex flex-column w-40 h-100 justify-center">
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
              ${myTutorials.map((d) =>
                html`
                <div class="card w-30 h5 pa2 mt2 bg-washed-yellow br2 ba flex flex-column">
                  <div class="w-100 h-40 outline" style="min-height:100px"></div>
                  <small>${d.title}</small>
                  <small>${d.description}</small>
                </div>
                `
              )}
            </div>
          </section>

          <section class="w-100 pa2 h-auto br2 flex flex-column bg-light-green">
            <div class="w-100 pa2 flex flex-row items-center justify-between">
              <h3 class="pa0 ma0">Browse by Curator</h3>
              <a class="link">See all</a>
            </div>
            <div class="w-100 pa2 flex flex-row items-center flex-wrap justify-between" >
              ${curators.map((d) =>
                html`
                <div class="card w4 h4 pa2 mt2 bg-washed-green br2 ba flex flex-column justify-end">
                  <p class="ma0 pa0">${d.name}</p>
                  <small>@${d.user}</small>
                  <small>${d.description}</small>

                </div>
                `
              )}
            </div>
          </section>

      </section>
      </main>
    </body>
  `
}
