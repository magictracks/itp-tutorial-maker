
var html = require("choo/html");



module.exports = function(name, state, emit){

  let toggleResourceModal = function(e){
    emit("db:addResourceModalState:toggled", state.editing.tutorialid, state.editing.sectionid)
  }



  function handleChange(e){
    e.preventDefault();
    // console.log(e.target.name)
    let k = e.target.name;
    let v = e.target.value;

    emit("db:updateNewResource", k, v)

  }


  function isToggled(){
    if(state.addResourceModalState.toggled === true){
      return ""
    } else{
      return "dn"
    }
  }

  function isCurrentStep(step){
    if(state.addResourceModalState.currentStep === step){
      return ""
    } else{
      return "dn"
    }
  }

  function stepForward(e){
    emit("db:addResourceModalState:stepForward");
  }
  function stepBack(e){
    emit("db:addResourceModalState:stepBack");
  }

  function addResource(e){
    console.log("added resource!")
    if(state.newResource.sectionId){
        emit("tutorial:addResource", state.editing.tutorialid, state.newResource.sectionId)
    } else{
        emit("tutorial:addResource", state.editing.tutorialid, state.editing.sectionid)
    }

    stepForward();
    toggleResourceModal();
  }

  function updateResourceLocation(e){
    console.log(e.target.value)

    let sectionId = e.target.value
    state.newResource.sectionId = sectionId;

  }

  return html`
  <div id="addResourceModal" class="${isToggled()} w-100 h-100">
    <div class="w-100 h-100 fixed flex flex-column justify-center items-center dark-pink" style="top:50%; left:50%; transform: translate(-50%, -50%); max-height:100%; max-width:100%; background-color:rgba(0,0,0,0.5);">
          <div class="w-100 h-100 flex flex-column justify-center items-center">
            <div class="w-50 bg-washed-blue pa2 ba br2">
              <div class="w-100 flex flex-row justify-end items-center"><small onclick=${toggleResourceModal}>close</small></div>
              <ul class="w-100 flex flex-row justify-center items-center">
                <li class="list mr2">1: add url</li>
                <li class="list mr2"> → </li>
                <li class="list mr2">2: edit details</li>
                <li class="list mr2"> → </li>
                <li class="list mr2">3: modify/choose section</li>
              </ul>
                <div class="w-100">
                  <div class="w-100 flex flex-column mt2">
                    <fieldset class="w-100 flex flex-column ba br2 bg-washed-green pl3 pr3 pb3 bw1 ba b--dark-pink">
                      <legend class="f6 pa3 bw1 ba bg-washed-green br2">New Resource</legend>
                        <section id="addResourceStep-0" class="addResourceStep ${isCurrentStep(0)}">
                          <div class="w-100 pa2"><small>step 1: add the url to the resource - if it exists in our collections, we'll autofill the details.</small></div>
                          <div class="w-100 flex flex-row">
                            <div class="w-80">
                              <input class="w-100 h3 pa2 br2 ba input-reset" type="text" name="url" onkeyup=${handleChange} placeholder="add resource url">
                            </div>
                            <div class="w-20 flex flex-row justify-start items-center">
                              <div class="w-100 flex flex-row justify-start items-center"><button class="ba br2 w-100 h3 bg-washed-red dark-pink" data-step="0" onclick="${stepForward}">next</button></div>
                            </div>
                          </div>
                        </section>
                        <section id="addResourceStep-1" class="addResourceStep ${isCurrentStep(1)}">
                          <div class="w-100 flex flex-column h-auto">
                            <div class="w-100">
                              <small>url: ${state.newResource.url}</small>
                            </div>
                            <div class="w-100 h-100 flex flex-row">
                              <div class="w-60 h-100 flex flex-column">
                                <input class="w-100 h2 pa2 br2 ba input-reset" onkeyup=${handleChange} name="title" type="text" placeholder="Resource Title">
                                <textarea class="w-100 h3 pa2 br2 ba input-reset mt1" onkeyup=${handleChange} name="description" type="text" style="resize: none;"></textarea>
                                <input class="w-100 h2 pa2 br2 ba input-reset mb2 mt1" onkeyup=${handleChange} name="tags" type="text" placeholder="tags: e.g. javascript, creative code">
                                <!-- TODO -->
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
                            </div>
                            <div class="w-100 flex flex-row">
                              <div class="w-20 flex flex-row justify-start items-center"><button class="ba br2 w-100 h3 bg-light-gray dark-pink" data-step="1" onclick="${stepBack}">go back</button></div>
                              <div class="w-20 flex flex-row justify-start items-center"><button class="ba br2 w-100 h3 bg-washed-red dark-pink" data-step="1" onclick="${stepForward}">next</button></div>
                            </div>
                          </div>
                        </section>
                        <section id="addResourceStep-2" class="addResourceStep ${isCurrentStep(2)}">
                          <div class="w-100 flex flex-column mt2 mb2">
                            <small>step 3: select the section you want your resource to live in</small>
                            <select style="max-width:370px;" onchange=${updateResourceLocation}>
                            ${state.tutorials.map( (tutorial) => {
                              if(tutorial.id === state.editing.tutorialid){
                                return tutorial.sections.map((section, idx) => {
                                  if(section.id === state.editing.sectionid){
                                      return html`
                                      <option value=${section.id} selected>Section ${idx}: ${section.title}</option>
                                      `
                                  } else{
                                    return html`
                                      <option value=${section.id}>Section ${idx}: ${section.title}</option>
                                      `
                                  }
                                })
                              }
                            })}
                            </select>
                          </div>
                          <small>step 4: add it to your project! (if the resource is new we'll also add it to our collective resources)</small>
                          <div class="w-100 flex flex-row mt3">
                            <div class="w-20 flex flex-row justify-start items-center"><button class="ba br2 w-100 h3 bg-light-gray dark-pink" data-step="2" onclick="${stepBack}">go back</button> </div>
                            <div class="w-20 flex flex-row justify-start items-center"><button class="ba br2 w-100 h3 bg-washed-red dark-pink" data-step="2" onclick=${addResource}>add</button> </div>
                          </div>
                        </section>
                    </fieldset>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </div>
  `
}
