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

mySections = mySections.map( (section) => {
    let output = {
      title: "hello I'm a resource",
      url:"#",
      urlName:"https://link-to-somewhere-awesome.com/amazing",
      description: "Resource description. Learn all the things",
      tags:['magic tracks', 'inspiration', 'itp', 'creative code', 'education']
    }
    section.resources = [];
    for(let i = 0; i < Math.random()*4; i++){
      section.resources.push(output)
    }

    return section
})


function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)


  return html`
    <body class="code lh-copy w-100 h-100">
      ${state.cache(NavbarTop, "NavbarTop")}
      <main class="pl4 pr4 pb6 flex flex-column bg-washed-blue w-100 h-100 dark-pink mb4">
        <div class="h2 w-100 mt3 flex-column flex justify-center">
          ${state.cache(BackBtn, "BackBtn", state, emit)}
        </div>
        <h2 class="f2 ma0 pa0 pl2">Edit</h2>

        ${state.cache(EditorToolbar, "EditorToolbar", state, emit)}

        <section class="flex flex-row h-100 justify-start w-100 pb4 min-h-100">
          <section class="h-100 w-30 flex-column flex justify-center pr2">
            <section class="h-50 ba br2 bw1 pa2 mb2 overflow-y-auto">
              <div class="w-100">
                <h3 class="pa0 ma0">Overview</h3>
              </div>
              <div class="w-100">
                <h4 class="ma0 pa0">Sections</h4>
                <ul class="list pl1 ma0">
                  ${mySections.map( (d, idx) =>
                    html`
                    <li>🌈 ${idx}: ${d.title}
                      <ul>
                      ${d.resources.map( (resource) =>
                        html`
                        <li>🌴${resource.title}</li>
                        `
                      )}
                      </ul>
                    </li>
                    `)}
                </ul>
              </div>
            </section>
            <section class="h-50 ba br2 pa2 bw1">
              <div class="w-100">
                <h3 class="pa0 ma0">Unsorted Resources</h3>
              </div>
            </section>
          </section>

          <section class="ba br2 bw1 flex flex-column list pa2 mb4 h-100 w-100 overflow-y-auto">

            <!-- Tutorial info -->
            <section class="w-100 h-auto br2">
                <div class="w-100 mt2">
                  <fieldset class="w-100 ba br2 bg-yellow bw1 b--gold">
                    <legend class="f3 pa3 bw1 ba bg-yellow br2 mb2 b--gold navy">Tutorial Title</legend>
                    <input class="w-100 h3 pa2 br2 ba input-reset" type="text" placeholder="Tutorial Title">
                  </fieldset>
                </div>

                <div class="w-100 br2 mt2 h5">
                  <fieldset class="w-100 h-100 ba br1 bw1 b--gold bg-yellow">
                    <legend class="f3 pa3 bw1 ba bg-yellow br2 mb2 navy b--gold">Tutorial Image</legend>
                    <div class="flex flex-column justify-center items-center w-100 h-50 bg-gold bg-near-white br2">
                      <div class="w2 h2 navy tc flex flex-column justify-center items-center"><h3>+</h3></div>
                    </div>
                  </fieldset>
                </div>

                <div class="w-100 mt2">
                  <fieldset class="w-100 ba br2 bg-yellow bw1 b--gold">
                    <legend class="f3 pa3 bw1 ba bg-yellow br2 mb2 b--gold navy">Tutorial Description</legend>
                    <textarea class="w-100 h4 pa2 br2 ba input-reset" type="text" style="resize: none;">Some description text about your new tutorial</textarea>
                  </fieldset>
                </div>
            </section>
            <!-- Sections -->
            <section class="w-100 h-auto br2 pb4">
              ${mySections.map( (d, idx) =>
                html`
                  <div class="w-100 flex flex-column mt3">
                    <fieldset class="w-100 ba br2 bg-washed-red pl3 pr3 pb3 bw1 ba b--dark-pink">
                      <legend class="f3 pa3 bw1 ba bg-washed-red br2">Section ${idx}</legend>
                      <div class="w-100 h2 flex flex-row justify-end items-center">
                        <button class="button-reset b--none br2 dark-pink bg-washed-red">change</button>
                        <button class="button-reset b--none br2 dark-pink bg-washed-red">remove</button>
                      </div>
                      <input class="w-100 h3 pa2 br2 ba input-reset mb2" type="text" placeholder="Section Title" value=${d.title}>
                      <textarea class="w-100 h4 pa2 br2 ba input-reset" type="text" value=${d.description} style="resize: none;">${d.description}</textarea>

                      <!-- resources area -->
                      <section class="w-100 pa2">
                        ${d.resources.map((resource, idx2) =>
                          html`
                            <div class="w-100 flex flex-column mt2">
                              <fieldset class="w-100 ba br2 bg-washed-green pl3 pr3 pb3 bw1 ba b--dark-pink">
                                <legend class="f3 pa3 bw1 ba bg-washed-green br2">Resource ${idx2}</legend>
                                  <div class="w-100 h2 flex flex-row justify-end items-center">
                                    <button class="button-reset b--none br2 dark-pink bg-washed-green">change</button>
                                    <button class="button-reset b--none br2 dark-pink bg-washed-green">remove</button>
                                  </div>
                                  <div class="w-100">
                                    <a class="pl2">via ${resource.urlName}</a>
                                  </div>
                                  <section class="w-100 flex flex-row h-auto">
                                    <div class="w-60 h-100 flex flex-column">
                                      <input class="w-100 h3 pa2 br2 ba input-reset" type="text" placeholder="Resource Title" value=${resource.title}>
                                      <textarea class="w-100 h3 pa2 br2 ba input-reset mt1" type="text" value=${resource.description} style="resize: none;">${d.description}</textarea>
                                      <input class="w-100 h3 pa2 br2 ba input-reset mb2 mt1" type="text" placeholder="tags: e.g. javascript, creative code" value=${resource.tags.join(",")}>
                                      <select class="w-100">
                                        <option>no rating</option>
                                        <option>beginner friendly</option>
                                        <option>beginner - intermediate</option>
                                        <option>intermediate</option>
                                        <option>intermediate - advanced</option>
                                        <option>advanced</option>
                                      </select>
                                    </div>
                                    <div class="w-40 flex flex-column h-100 justify-center items-center pl2 ">
                                      <div class="w-100 h-100 flex-column justify-center items-center ba br2" style="min-height:200px">
                                        <div class="w-100 h-100 flex flex-column justify-center items center">
                                          <div class="w-100 tc"> + </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                              </fieldset>
                            </div>
                          `
                        )}
                      </section>

                      <div class="w-100 h2 flex flex-row justify-start items-center mt3">
                        <button class="button-reset pa2 bw1 ba b--dark-pink br2 dark-pink bg-washed-green">+ add resource</button>
                      </div>
                    </fieldset>
                  </div>
                `)}
            </section>
            <div class="w-100 h4 flex flex-row justify-start items-center pt3 pb3">
              <button class="ba bw1 b--dark-pink br2 dark-pink bg-washed-red pa3 h3 f3 mb3" style="box-shadow:none;">+ section</button>
            </div>
          </section>
        </section>
      </main>
      ${state.cache(NavbarBottom, "NavbarBottom")}
    </body>
  `
}
