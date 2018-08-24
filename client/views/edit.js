var html = require('choo/html')
var NavbarTop = require("../components/NavbarTop")
var BackBtn = require("../components/BackBtn")
var NavbarBottom = require("../components/NavbarBottom")
var EditorToolbar = require("../components/EditorToolbar")

var TITLE = 'client - edit'

module.exports = view



let myTutorials = [];
let mySections = [];
let myResources = [];

for(let i = 0; i < 3; i++){
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


function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)


  return html`
    <body class="code lh-copy w-100 h-100">
      ${state.cache(NavbarTop, "NavbarTop")}
      <main class="pl4 pr4 pb6 flex flex-column bg-washed-blue w-100 h-100 dark-pink mb4">
        <div class="h2 w-100 mt3 flex-column flex justify-center">
          ${state.cache(BackBtn, "BackBtn", state, emit)}
        </div>

        ${state.cache(EditorToolbar, "EditorToolbar", state, emit)}

        <section class="flex flex-row h-100 justify-start w-100">
          <section class="h-100 w-30 flex-column flex justify-center pr2">
            <section class="h-50 ba br2 pa2 mb2 overflow-y-auto">
              <div class="w-100">
                <h3 class="pa0 ma0">Overview</h3>
              </div>
              <div class="w-100">
                <h4 class="ma0 pa0">Sections</h4>
                <ul class="list pl1 ma0">
                  ${mySections.map( (d, idx) => html`<li>🌈 ${idx}: ${d.title}</li>` )}
                </ul>
              </div>
            </section>
            <section class="h-50 ba br2 pa2">
              <div class="w-100">
                <h3 class="pa0 ma0">Unsorted Resources</h3>
              </div>
            </section>
          </section>

          <section class="ba br2 flex flex-column list pa2 mb4 h-100 w-100 overflow-y-auto">

            <!-- Tutorial info -->
            <section class="w-100 h-auto br2">
                <div class="w-100 h5 br2">
                  <div class="flex flex-column justify-center items-center w-100 h-100 bg-near-white br2">
                    <div class="w2 h2 tc flex flex-column justify-center items-center"><h3>+</h3></div>
                  </div>
                </div>

                <div class="w-100 mt2">
                  <fieldset class="w-100 ba br2">
                    <legend class="f3">Tutorial Title</legend>
                    <input class="w-100 h3 pa2 br2 ba input-reset" type="text">
                  </fieldset>
                </div>

                <div class="w-100 mt2">
                  <fieldset class="w-100 ba br2">
                    <legend class="f3">Tutorial Description</legend>
                    <textarea class="w-100 h4 pa2 br2 ba input-reset" type="text" style="resize: none;"></textarea>
                  </fieldset>
                </div>
            </section>
            <!-- Sections -->
            <section class="w-100 h-auto br2 pb4">
              ${mySections.map( (d, idx) =>
                html`
                  <div class="w-100 flex flex-column mt3">
                    <fieldset class="w-100 ba br2 bg-washed-red pl3 pr3 pb3 bw2 ba b--dark-pink">
                      <legend class="f3 pa3 bw2 ba bg-washed-red br-pill">Section ${idx}</legend>
                      <div class="w-100 h2 flex flex-row justify-end items-center">
                        <button class="button-reset b--none br2 dark-pink bg-washed-red">remove</button>
                      </div>
                      <input class="w-100 h3 pa2 br2 ba input-reset mb2" type="text" placeholder="Section Title" value=${d.title}>
                      <textarea class="w-100 h4 pa2 br2 ba input-reset" type="text" value=${d.description} style="resize: none;">${d.description}</textarea>

                      <div class="w-100 h2 flex flex-row justify-start items-center mt3">
                        <button class="button-reset pa2 bw2 ba b--dark-pink br2 dark-pink bg-washed-red">add resource</button>
                      </div>
                    </fieldset>
                  </div>
                `)}
            </section>
            <div class="w-100 h4 flex flex-row justify-start items-center pt3 pb3">
              <button class="button-reset ba bw2 b--dark-pink br-pill dark-pink bg-washed-red pa3 h-100 f3" style="box-shadow:none;">+ section</button>
            </div>
          </section>
        </section>
      </main>
      ${state.cache(NavbarBottom, "NavbarBottom")}
    </body>
  `
}
