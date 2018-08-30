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



function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  let toggleResourceModal = function(e){
    let sectionid = e.target.dataset.sectionid;
    let tutorialid = e.target.dataset.tutorialid;
    emit("db:addResourceModalState:toggled", tutorialid, sectionid)

  }


  let toggleSectionModal = function(e){
    let tutorialid = e.target.dataset.tutorialid;
    emit("db:addSectionModalState:toggled", tutorialid)
  }

  function removeResource(e){
    console.log(e);
    emit("tutorial:removeResource", e.target.dataset.tutorialid , e.target.dataset.sectionid, e.target.dataset.resourceid)
  }

  function removeSection(e){
    console.log(e);
    emit("tutorial:removeSection", e.target.dataset.tutorialid , e.target.dataset.sectionid)
  }

  let selectedData = state[state.params.featureType].filter( (feat) => feat.id === state.params.featureId )[0]
  console.log(selectedData);


  function onChange(e){
    // console.log(e.target.textContent)
    let d = e.target.textContent
    let id = e.target.dataset.id
    let featuretype = e.target.dataset.featuretype
    let property = e.target.dataset.property
    emit("db:updateProperty", d, id, featuretype, property )
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
              <div class="w-100 mt4 mb4" style="background: url('${selectedData.headerImage}'); background-position:center; background-repeat: no-repeat; background-size: auto; height:200px"></div>
              <h1 contenteditable="true" class="w-100 f1" onkeyup=${onChange} data-id=${selectedData.id} data-featuretype="tutorials" data-property="title">${selectedData.title}</h1>
              <small>a wonderful learning pathway curated by @username</small>
              <h3 contenteditable="true" class="w-100 f3" onkeyup=${onChange} data-id=${selectedData.id} data-featuretype="tutorials" data-property="description">${selectedData.description} </h3>
            </section>

            <h2 class="tc mt4 mb4">🌈 Sections 🌈</h2>

            <!-- Section area -->

            ${selectedData.sections.map( (section, sectionIdx) =>
              html`
                <section class="w-100 mt2 br1 b--none">
                  <div onclick=${removeSection} data-sectionid=${section.id} data-tutorialid=${section.tutorialId}>remove</div>
                  <h3 contenteditable="true" class="w-100 f3" onkeyup=${onChange} data-id=${section.id} data-featuretype="sections" data-property="title">${section.title}</h3>
                  <p contenteditable="true" class="w-100" onkeyup=${onChange} data-id=${section.id} data-featuretype="sections" data-property="description">${section.description}</p>

                  <section class="w-100 pl2 pr2">
                  ${section.resources.map( (resource, resourceIdx) =>
                    html`
                      <div class="w-100 h-auto mt2 mb2 flex flex-row">
                        <div class="w-100 h-auto mt2 mb2 ba br2 flex flex-row">
                          <div class="w-70 h-100 pa2">
                            <h4 class="pa0 ma0" contenteditable="true" onkeyup=${onChange} data-id=${resource.id} data-featuretype="resources" data-property="title">${resource.title}</h4>
                            <p class="pa0 ma0" contenteditable="true" onkeyup=${onChange} data-id=${resource.id} data-featuretype="resources" data-property="description">${resource.description}</p>
                            <small contenteditable="true">${resource.tags}</small>
                          </div>
                          <div class="w-30" style="height:150px; background: url(${resource.headerImage}); background-position:center; background-repeat: no-repeat; background-size: cover;">
                          </div>
                        </div>
                      <div onclick=${removeResource} data-sectionid=${resource.sectionId} data-tutorialid=${resource.tutorialId} data-resourceid=${resource.id}>╳</div>
                    `
                  )}

                  <!-- toggle addResource -->
                  <div class="w-100 mt2 mb2">
                    <button class="pa2 ba br2" onclick=${toggleResourceModal} data-sectionid=${section.id} data-tutorialid=${section.tutorialId}>+ add resource</button>
                  </div>

                  </section>

                </section>
              `
            )}

            <!-- toggle addSection -->
            <div class="w-100 mt2 mb2">
              <button class="pa2 ba br2" onclick=${toggleSectionModal} data-tutorialid=${selectedData.id}>+ add section</button>
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

      ${new AddResourceModal("AddResourceModal", state, emit)}
      ${new AddSectionModal("AddSectionModal", state, emit)}
    </body>

  `
}
