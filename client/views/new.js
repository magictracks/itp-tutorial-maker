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

var TITLE = 'client - new'



module.exports = view



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
            ${state.resources.map( (resource) =>
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
