var html = require('choo/html')
var NavbarTop = require("../components/NavbarTop")
var BackBtn = require("../components/BackBtn")
var NavbarBottom = require("../components/NavbarBottom")
var EditorToolbar = require("../components/EditorToolbar")
var AddResourceModal = require("../components/AddResourceModal")
var AddSectionModal = require("../components/AddSectionModal")
var ResourceCard = require("../components/ResourceCard")

var css = require("sheetify")

css`
::placeholder{
  color:#D5008F;
}
`

var TITLE = 'client - edit'



module.exports = view

let myTutorials = [];
let mySections = [];
let myResources = [];

for(let i = 0; i < 6; i++){
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

  let toggleResourceModal = function(){
    let modal = document.querySelector("#addResourceModal")
    modal.classList.toggle("dn")

    let els = document.querySelectorAll(".addResourceStep")
    for(let i = 0; i < els.length; i++){
      els[i].classList.add("dn")
    }
    // default to having step 1 open
    document.querySelector("#addResourceStep-1").classList.remove("dn");
  }


  let toggleSectionModal = function(){
    let modal = document.querySelector("#addSectionModal")
    modal.classList.toggle("dn")

    let els = document.querySelectorAll(".addSectionStep")
    for(let i = 0; i < els.length; i++){
      els[i].classList.add("dn")
    }
    // default to having step 1 open
    document.querySelector("#addSectionStep-1").classList.remove("dn");
  }



  return html`
  <body class="code w-100 h-100 bg-washed-blue flex flex-column items-center min-h-100">
    ${state.cache(NavbarTop, "NavbarTop", state, emit)}
    <main class="w-100 h-auto mt2 mb2 pr4 pl4 dark-pink" style="max-width:1200px">
        <div class="h2 w-100 mt3 flex-column flex justify-center">
          ${state.cache(BackBtn, "BackBtn", state, emit)}
        </div>
        <h2 class="f2 ma0 pa0 pl2">Edit</h2>


        ${state.cache(EditorToolbar, "EditorToolbar", state, emit)}

        <!-- editor main area -->
        <section class="w-100 h-auto flex flex-column items-center bg-near-white mb4">

          <div class="w-80 pa2">
            <!-- title area -->
            <section class="w-100">
              <div class="w-100 mt4 mb4" style="background: url(../assets/magic-tracks-logo.png); background-position:center; background-repeat: no-repeat; background-size: auto; height:200px"></div>
              <h1 contenteditable="true" class="w-100 f1">How about this cheeky title, eh?</h1>
              <small>a wonderful learning pathway curated by @username</small>
              <h3 contenteditable="true" class="w-100 f3">This description is as good as it's going to get. Pretty much pulitzer prize level right here. </h3>
            </section>

            <h2 class="tc mt4 mb4">🌈 Sections 🌈</h2>
            <!-- Section area -->
            <section class="w-100 mt2 br1 b--none">
              <h3 contenteditable="true" class="w-100 f3">Section titles get even cheekier</h3>
              <p contenteditable="true" class="w-100">What would a section be without a really nice description?</p>
              <div class="w-100 mt2 mb2">
                <button class="pa2 ba br2" onclick=${toggleResourceModal}>+ add resource</button>
              </div>
            </section>

            <div class="w-100 mt2 mb2">
              <button class="pa2 ba br2" onclick=${toggleSectionModal}>+ add section</button>
            </div>
          </div>

        </section>

        <!-- resources not yet added to a section  -->
        <section class="w-100 flex flex-column overflow-x-scroll pa2 justfy-between ba br2">
          <p class="w-100 ma0 pa2">Saved while browsing the web - Organize us into sections!</p>
          <div class="w-100 flex flex-row">
            ${myResources.map( (resource) =>
              html`
                <div class="mr2">
                  ${new ResourceCard(resource)}
                </div>
              `
            )}
          </div>
        </section>

      </main>

      ${state.cache(NavbarBottom, "NavbarBottom")}
      <!-- popups for add new, and change -->
      ${state.cache(AddResourceModal, "AddResourceModal", state, emit)}
      ${state.cache(AddSectionModal, "AddSectionModal", state, emit)}
    </body>

  `
}


/**

// sidebar
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
              <li class="list f6 blue" onclick=${toggleResourceModal}>+ add resource</li>
              </ul>
            </li>
            `)}
            <li class="list f6 blue" onclick=${toggleSectionModal}>+ add section</li>
        </ul>
      </div>
    </section>
    <section class="h-50 ba br2 pa2 bw1">
      <div class="w-100">
        <h3 class="pa0 ma0">Unsorted Resources</h3>
      </div>
    </section>
  </section>


  // main

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
                <button class="button-reset pa2 bw1 ba b--dark-pink br2 dark-pink bg-washed-green" onclick=${toggleResourceModal}>+ add resource</button>
              </div>
            </fieldset>
          </div>
        `)}
    </section>
    <div class="w-100 h4 flex flex-row justify-start items-center pt3 pb3">
      <button class="ba bw1 b--washed-green br2 dark-pink bg-washed-blue pa3 h3 f6 mb3" style="box-shadow:none;" onclick=${toggleSectionModal}>+ section</button>
    </div>
  </section>
</section>



 */




 /**
  *



  <!-- editor main area -->
  <section class="w-100 h-auto flex flex-column items-center bg-near-white">

    <div class="w-80 pa2">
      <!-- title area -->
      <section class="w-100">
        <div class="w-100 mt4 mb4" style="background: url(../assets/magic-tracks-logo.png); background-position:center; background-repeat: no-repeat; background-size: auto; height:200px"></div>
        <form>
          <fieldset class="b--dotted b--washed-blue">
            <legend class="pink">tutorial title</legend>
            <textarea class=" dark-pink pt4 ma0 f2 tl w-100 bg-near-white b--none" type="text" style="resize:none;vertical-align:middle;" placeholder=""></textarea>
          </fieldset>

          <p class="tl pa2">a tutorial curated by @username</p>
          <fieldset class="b--dotted b--washed-blue">
              <legend class="pink">tutorial description</legend>
            <textarea class="dark-pink pt2 ma0 f4 tl w-100 bg-near-white b--none" type="text" style="resize:none;vertical-align:middle;" placeholder=""></textarea>
          </fieldset>
        </form>
      </section>

      <h2>Sections</h2>
      <!-- Section area -->
      <section class="w-100 pa2 br1 b--none">
          <form>
          <fieldset class="b--dotted b--washed-blue">
            <legend class="pink">section title</legend>
            <textarea class=" dark-pink pt2 ma0 f3 tl w-100 bg-near-white b--none" type="text" style="resize:none;vertical-align:middle;" placeholder=""></textarea>
          </fieldset>

          <fieldset class="b--dotted b--washed-blue">
              <legend class="pink">section description</legend>
            <textarea class="dark-pink pt2 ma0 f4 tl w-100 bg-near-white b--none" type="text" style="resize:none;vertical-align:middle;" placeholder=""></textarea>
          </fieldset>
        </form>
        <div class="w-100 mt2 mb2">
          <button class="pa2 ba br2">+ add resource</button>
        </div>
      </section>

      <div class="w-100 mt2 mb2">
        <button class="pa2 ba br2">+ add section</button>
      </div>
    </div>

  </section>
  */
