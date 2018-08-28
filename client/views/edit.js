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

  let closeModal = function(){
    console.log("clicked")
    let els = document.querySelectorAll("#addResourceModal")
    for(let i = 0; i < els.length; i++){
      console.log(els)
      els[i].classList.toggle("dn")
      els[i].classList.toggle("flex")
      els[i].classList.toggle("flex-column")
      els[i].classList.toggle("justify-center")
      els[i].classList.toggle("items-center")
    }
  }

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
                      <li class="list f6 blue" onclick=${closeModal}>+ add resource</li>
                      </ul>
                    </li>
                    `)}
                    <li class="list f6 blue">+ add section</li>
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
            <section class="w-100 h-auto br2 mt3">
                <div class="w-100 mt2">
                  <input class="w-100 h3 f2 pa4 bg-washed-blue ba b--washed-green black" type="text" value="Add a title here" placeholder="Title">
                </div>
                <div class="w-100 mt2">

                </div>
                <div class="w-100 mt2">
                    <textarea class="w-100 h4 pa2 br2 ba b--washed-green input-reset pl4 pr4 pt4 pb2 f2 bg-washed-blue" type="text" style="resize: none;">Some description text about your new tutorial</textarea>
                </div>
            </section>
            <!-- Sections -->
            <section class="w-100 h-auto br2 pb4">
              ${mySections.map( (d, idx) =>
                html`
                  <div class="w-100 flex flex-column mt3">
                    <fieldset class="w-100 ba br2 bg-washed-blue pl3 pr3 pb3 bw1 ba b--washed-green">
                      <legend class="f6 pa3 bw1 ba br2 b--washed-green">Section ${idx}</legend>
                      <div class="w-100 h2 flex flex-row justify-end items-center">
                        <button class="button-reset b--none br2 dark-pink bg-washed-red">change</button>
                        <button class="button-reset b--none br2 dark-pink bg-washed-red">remove</button>
                      </div>
                      <input class="w-100 h3 pa2 br2 bn bg-washed-blue b--washed-green f3 input-reset mb2" type="text" placeholder="Section Title" value=${d.title}>
                      <textarea class="w-100 h4 pa2 br2 bn bg-washed-blue f6 b--washed-green input-reset" type="text" value=${d.description} style="resize: none;">${d.description}</textarea>

                      <!-- resources area -->
                      <section class="w-100 pa2">
                        ${d.resources.map((resource, idx2) =>
                          html`
                            <div class="w-100 flex flex-column mt2">
                              <fieldset class="w-100 ba br2 bg-washed-green pl3 pr3 pb3 bw1 ba b--dark-pink">
                                <legend class="f6 pa3 bw1 ba bg-washed-green br2">Resource ${idx2}</legend>
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
                        <button class="button-reset pa2 bw1 ba b--dark-pink br2 dark-pink bg-washed-green" onclick=${closeModal}>+ add resource</button>
                      </div>
                    </fieldset>
                  </div>
                `)}
            </section>
            <div class="w-100 h4 flex flex-row justify-start items-center pt3 pb3">
              <button class="ba bw1 b--washed-green br2 dark-pink bg-washed-blue pa3 h3 f6 mb3" style="box-shadow:none;">+ section</button>
            </div>
          </section>
        </section>
      </main>
      ${state.cache(NavbarBottom, "NavbarBottom")}

      <!-- popups for add new, and change -->
      <!-- new resource -->
      <div id="addResourceModal" class="dn w-100 h-100" style="top:0; left:0; position:absolute; background-color:rgba(0,0,0,0.5)">
        <div class="w-50 bg-washed-blue pa2 ba br2">
          <div class="w-100 flex flex-row justify-end items-center"><small onclick=${closeModal}>close</small></div>
          <div class="w-100">
            <div class="w-100 flex flex-column mt2">
            <fieldset class="w-100 ba br2 bg-washed-green pl3 pr3 pb3 bw1 ba b--dark-pink">
              <legend class="f6 pa3 bw1 ba bg-washed-green br2">New Resource</legend>
                <div class="w-100">
                  <small>step 1: add the url to the resource - if it exists, we'll autofill the details.</small>
                  <input class="w-100 h3 pa2 br2 ba input-reset" type="text" placeholder="add resource url">
                </div>
                <div class="w-100">
                    <small>step 2: if you wish to edit the details or add extra notes, feel free.</small>
                </div>
                <section class="w-100 flex flex-row h-auto">
                  <div class="w-60 h-100 flex flex-column">
                    <input class="w-100 h2 pa2 br2 ba input-reset" type="text" placeholder="Resource Title">
                    <textarea class="w-100 h3 pa2 br2 ba input-reset mt1" type="text" style="resize: none;"></textarea>
                    <input class="w-100 h2 pa2 br2 ba input-reset mb2 mt1" type="text" placeholder="tags: e.g. javascript, creative code">
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
                <div class="w-100 flex flex-column mt2">
                  <small>step 3: select the section you want your resource to live in</small>
                  <select>
                    ${mySections.map((section, idx) =>
                      html`
                      <option>Section ${idx}: ${section.title}</option>
                      `
                    )}
                  </select>
                </div>
                <div class="w-100 flex flex-column mt3">
                  <small>step 4: add it to your project! (if the resource is new we'll also add it to our collective resources)</small>
                  <button>add</button>
                </div>
            </fieldset>
          </div>
          </div>
          </div>
      </div>

      <div class="dn w-100 h-100">
      </div>
    </body>
  `
}
