
var html = require("choo/html");



module.exports = function(name, state, emit){

  let toggleSectionModal = function(e){
    emit("db:addSectionModalState:toggled", state.editing.tutorialid)
  }

  function handleChange(e){
    e.preventDefault();
    // console.log(e.target.name)
    let k = e.target.name;
    let v = e.target.value;

    emit("db:updateNewSection", k, v)

  }


  function isToggled(){
    if(state.addSectionModalState.toggled === true){
      return ""
    } else{
      return "dn"
    }
  }

  function isCurrentStep(step){
    if(state.addSectionModalState.currentStep === step){
      return ""
    } else{
      return "dn"
    }
  }

  function stepForward(e){
    emit("db:addSectionModalState:stepForward");
  }

  function stepBack(e){
    emit("db:addSectionModalState:stepBack");
  }

  function addSection(e){
    console.log("added section!")
    emit("tutorial:addSection", state.editing.tutorialid)
    stepForward();
    toggleSectionModal();
  }

  return html`

  <div id="addSectionModal" class="${isToggled()} w-100 h-100">
    <div class="w-100 h-100 fixed flex flex-column justify-center items-center dark-pink" style="top:50%; left:50%; transform: translate(-50%, -50%); max-height:100%; max-width:100%; background-color:rgba(0,0,0,0.5);">
          <div class="w-100 h-100 flex flex-column justify-center items-center">
            <div class="w-50 bg-washed-blue pa2 ba br2">
              <div class="w-100 flex flex-row justify-end items-center"><small onclick=${toggleSectionModal}>close</small></div>
              <ul class="w-100 flex flex-row justify-center items-center">
                <li class="list mr2">1: edit details</li>
                <li class="list mr2"> → </li>
                <li class="list mr2">2: modify/choose section</li>
              </ul>
                <div class="w-100">
                  <div class="w-100 flex flex-column mt2">
                    <fieldset class="w-100 flex flex-column ba br2 bg-washed-green pl3 pr3 pb3 bw1 ba b--dark-pink">
                      <legend class="f6 pa3 bw1 ba bg-washed-green br2">New Section</legend>
                        <section id="addSectionStep-0" class="addSectionStep ${isCurrentStep(0)}">
                          <div class="w-100 pa2"><small>step 1: add the url of an existing section (optional).</small></div>
                          <div class="w-100 flex flex-row">
                            <div class="w-100">
                              <input class="w-100 h3 pa2 br2 ba input-reset" type="text" onkeyup=${handleChange} name="url" placeholder="add section url (optional)">
                            </div>
                          </div>
                          <!-- -->
                          <div class="w-100 flex flex-column h-auto mt2">
                            <div class="w-100 h-100 flex flex-row">
                              <div class="w-100 h-100 flex flex-column">
                                <input class="w-100 h2 pa2 br2 ba input-reset" type="text" onkeyup=${handleChange} name="title" placeholder="Section Title">
                                <textarea class="w-100 h3 pa2 br2 ba input-reset mt1" type="text" onkeyup=${handleChange} name="description" style="resize: none;"></textarea>
                                <input class="w-100 h2 pa2 br2 ba input-reset mb2 mt1" type="text" onkeyup=${handleChange} name="tags" placeholder="tags: e.g. javascript, creative code">
                              </div>
                            </div>
                            <div class="w-100 flex flex-row">
                              <div class="w-20 flex flex-row justify-start items-center"><button class="ba br2 w-100 h3 bg-washed-red dark-pink" data-step="1" onclick="${stepForward}">next</button></div>
                            </div>
                          </div>
                        </section>
                        <section id="addSectionStep-1" class="addSectionStep ${isCurrentStep(1)}">
                          <div class="w-100 flex flex-column mt2 mb2">
                            <small>step 3: select the tutorial you want your resource to live in</small>
                            <select style="max-width:370px;">
                            ${state.tutorials.map((tutorial, idx) =>
                              html`
                              <option>Tutorial ${idx}: ${tutorial.title}</option>
                              `
                            )}
                            </select>
                          </div>
                          <small>step 4: add it to your project!</small>
                          <div class="w-100 flex flex-row mt3">
                            <div class="w-20 flex flex-row justify-start items-center"><button class="ba br2 w-100 h3 bg-light-gray dark-pink" data-step="2" onclick="${stepBack}">go back</button> </div>
                            <div class="w-20 flex flex-row justify-start items-center"><button class="ba br2 w-100 h3 bg-washed-red dark-pink" data-step="2" onclick=${addSection}>add</button> </div>
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
