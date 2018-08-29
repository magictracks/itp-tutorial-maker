var html = require('choo/html')
var NavbarTop = require("../components/NavbarTop")
var BackBtn = require("../components/BackBtn")
var NavbarBottom = require("../components/NavbarBottom")
var PreviewToolbar = require("../components/PreviewToolbar")

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

  //               <div class="w-100 h-100" style="background: url(../assets/magic-tracks-logo.png); background-position:center; background-repeat: no-repeat; background-size: cover;"></div>
  return html`
  <body class="code w-100 h-100 bg-washed-blue flex flex-column">
    ${state.cache(NavbarTop, "NavbarTop", state, emit)}
    <main class="w-100 h-auto mt2 mb2 pr4 pl4 dark-pink" style="max-width:1200px">
        <div class="h2 w-100 mt3 flex-column flex justify-center">
          ${state.cache(BackBtn, "BackBtn", state, emit)}
        </div>
        <h2 class="f2 ma0 pa0 pl2">Preview</h2>
        ${state.cache(PreviewToolbar, "PreviewToolbar", state, emit)}

        <section class="w-100 h-auto flex flex-row mb4">
          <!-- overview panel -->
          <section class="w-25 h-100 flex flex-column">
            <div class="w-100 h-100 br2 pt4">
              <section class="h-50 br2 bw1 pa2 mb2 overflow-y-auto">
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
            </div>
          </section>
          <!-- main body panel -->
          <section class="w-75 h-auto flex flex-column pl2">
            <div class="w-100 h-auto br2 pa4">
              <h1 class="pa0 ma0">Making Tutorials with the Magic Tutorial Maker</h1>
              <p>A tutorial curated by: @Joeyklee</p>
              <p>On this learning pathway, you will find the resources you'll need to make amazing tutorials with the Magic Tutorial Maker</p>
              <div class="flex flex-column justify-center items-center">
                <img class="w-50" src="../assets/magic-tracks-logo.png">
              </div>

              <section>
                ${mySections.map((section, idx1) =>
                  html`
                    <div>
                      <h2>Section ${idx1}: ${section.title}</h2>
                      <p>${section.description}</p>

                      <div class="pa2">
                        ${section.resources.map( (resource, idx) =>
                          html`
                            <div class="w-100 flex flex-row ba br2 mt1">
                              <div class="w-70 pa2">
                                <h3 class="pa0 ma0">${resource.title}</h3>
                                <p class="pa0 ma0">${resource.description}</p>
                                <small>${resource.urlName}</small> <br>
                                <small>tags: ${resource.tags.join(", ")}</small>
                              </div>
                              <div class="w-30" style="background: url(../assets/magic-tracks-logo.png); background-position:center; background-repeat: no-repeat; background-size: cover;"></div>
                            </div>
                          `
                        )}
                      </div>
                    </div>
                  `
                )}
              </section>
            </div>
          </section>
        </section>
      </main>

    </body>
  `
}
