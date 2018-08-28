
var html = require("choo/html");



module.exports = function(name, state, emit){

  var myTutorials = [];
  var mySections = [];

    for(let i = 0; i < 3; i++){
      let output = {
        title: "hello I'm a title",
        url:"#",
        urlName:"Link",
        description: "Anim nisi nostrud aliquip officia eu laborum sint aliqua cupidatat minim dolor sint culpa."
      }
      myTutorials.push(Object.assign({type:"tutorial"}, output))
      mySections.push(Object.assign({type:"section"}, output))
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


  let toggleSectionModal = function(){
    console.log("clicked")
    let modal = document.querySelector("#addSectionModal")
    modal.classList.toggle("dn")

    let els = document.querySelectorAll(".addSectionStep")
    for(let i = 0; i < els.length; i++){
      console.log(els[i].classList)
      els[i].classList.add("dn")
    }
    // default to having step 1 open
    document.querySelector("#addSectionStep-1").classList.remove("dn");
  }

  let nextStep = function(e){

    let currentElNumber = e.target.dataset.step;
    let currentEl = document.querySelector(`#addSectionStep-${currentElNumber}`)
    currentEl.classList.add("class","dn");

    let nextElNumber = parseInt(currentEl.id.split("-").slice(-1)[0]) + 1
    let nextEl = document.querySelector(`#addSectionStep-${nextElNumber}`)
    nextEl.classList.remove("class", "dn");

  }
  let backStep = function(e,  step){
    let currentElNumber = e.target.dataset.step;
    let currentEl = document.querySelector(`#addSectionStep-${currentElNumber}`)
    currentEl.classList.add("dn");

    let nextElNumber = parseInt(currentEl.id.split("-").slice(-1)[0]) - 1
    let nextEl = document.querySelector(`#addSectionStep-${nextElNumber}`)
    nextEl.classList.remove("dn");
  }

  let addSection = function(e){
    console.log("added resource!")
    toggleSectionModal();
  }

  return html`
  <div id="addSectionModal" class="dn w-100 h-100" style="top:0; left:0; position:absolute; background-color:rgba(0,0,0,0.5)">
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
                        <section id="addSectionStep-1" class="addSectionStep ">
                          <div class="w-100 pa2"><small>step 1: add the url of an existing section (optional).</small></div>
                          <div class="w-100 flex flex-row">
                            <div class="w-100">
                              <input class="w-100 h3 pa2 br2 ba input-reset" type="text" placeholder="add section url (optional)">
                            </div>
                          </div>
                          <!-- -->
                          <div class="w-100 flex flex-column h-auto mt2">
                            <div class="w-100 h-100 flex flex-row">
                              <div class="w-100 h-100 flex flex-column">
                                <input class="w-100 h2 pa2 br2 ba input-reset" type="text" placeholder="Section Title">
                                <textarea class="w-100 h3 pa2 br2 ba input-reset mt1" type="text" style="resize: none;"></textarea>
                                <input class="w-100 h2 pa2 br2 ba input-reset mb2 mt1" type="text" placeholder="tags: e.g. javascript, creative code">
                              </div>
                            </div>
                            <div class="w-100 flex flex-row">
                              <div class="w-20 flex flex-row justify-start items-center"><button class="ba br2 w-100 h3 bg-washed-red dark-pink" data-step="1" onclick="${nextStep}">next</button></div>
                            </div>
                          </div>
                        </section>
                        <section id="addSectionStep-2" class="addSectionStep dn">
                          <div class="w-100 flex flex-column mt2 mb2">
                            <small>step 3: select the tutorial you want your resource to live in</small>
                            <select>
                            ${myTutorials.map((tutorial, idx) =>
                              html`
                              <option>Tutorial ${idx}: ${tutorial.title}</option>
                              `
                            )}
                            </select>
                          </div>
                          <small>step 4: add it to your project!</small>
                          <div class="w-100 flex flex-row mt3">
                            <div class="w-20 flex flex-row justify-start items-center"><button class="ba br2 w-100 h3 bg-light-gray dark-pink" data-step="2" onclick="${backStep}">go back</button> </div>
                            <div class="w-20 flex flex-row justify-start items-center"><button class="ba br2 w-100 h3 bg-washed-red dark-pink" data-step="2" onclick=${addSection}>add</button> </div>
                          </div>
                        </section>
                    </fieldset>
                  </div>
                </div>
            </div>
          </div>
        </div>
  `
}
