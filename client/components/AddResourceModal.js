
var html = require("choo/html");





module.exports = function(name, state, emit){

  var mySections = [];

    for(let i = 0; i < 3; i++){
      let output = {
        title: "hello I'm a title",
        url:"#",
        urlName:"Link",
        description: "Anim nisi nostrud aliquip officia eu laborum sint aliqua cupidatat minim dolor sint culpa."
      }
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


  let toggleResourceModal = function(){
    console.log("clicked")
    let modal = document.querySelector("#addResourceModal")
    modal.classList.toggle("dn")

    let els = document.querySelectorAll(".addResourceStep")
    for(let i = 0; i < els.length; i++){
      console.log(els[i].classList)
      els[i].classList.add("dn")
    }
    // default to having step 1 open
    document.querySelector("#addResourceStep-1").classList.remove("dn");
  }

  let nextStep = function(e){

    let currentElNumber = e.target.dataset.step;
    let currentEl = document.querySelector(`#addResourceStep-${currentElNumber}`)
    currentEl.classList.add("class","dn");

    let nextElNumber = parseInt(currentEl.id.split("-").slice(-1)[0]) + 1
    let nextEl = document.querySelector(`#addResourceStep-${nextElNumber}`)
    nextEl.classList.remove("class", "dn");

  }
  let backStep = function(e,  step){
    let currentElNumber = e.target.dataset.step;
    let currentEl = document.querySelector(`#addResourceStep-${currentElNumber}`)
    currentEl.classList.add("dn");

    let nextElNumber = parseInt(currentEl.id.split("-").slice(-1)[0]) - 1
    let nextEl = document.querySelector(`#addResourceStep-${nextElNumber}`)
    nextEl.classList.remove("dn");
  }

  let addResource = function(e){
    console.log("added resource!")
    toggleResourceModal();
  }

  return html`
  <div id="addResourceModal" class="dn">
    <div class="w-100 h-100 absolute flex flex-column justify-center items-center dark-pink" style="top:0; left:0; background-color:rgba(0,0,0,0.5);">
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
                        <section id="addResourceStep-1" class="addResourceStep ">
                          <div class="w-100 pa2"><small>step 1: add the url to the resource - if it exists in our collections, we'll autofill the details.</small></div>
                          <div class="w-100 flex flex-row">
                            <div class="w-80">
                              <input class="w-100 h3 pa2 br2 ba input-reset" type="text" placeholder="add resource url">
                            </div>
                            <div class="w-20 flex flex-row justify-start items-center"><button class="ba br2 w-100 h3 bg-washed-red dark-pink" onclick=${nextStep} data-step="1">next</button></div>
                          </div>
                        </section>
                        <section id="addResourceStep-2" class="addResourceStep dn">
                          <div class="w-100 flex flex-column h-auto">
                            <div class="w-100 h-100 flex flex-row">
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
                            </div>
                            <div class="w-100 flex flex-row">
                              <div class="w-20 flex flex-row justify-start items-center"><button class="ba br2 w-100 h3 bg-light-gray dark-pink" data-step="2" onclick="${backStep}">go back</button></div>
                              <div class="w-20 flex flex-row justify-start items-center"><button class="ba br2 w-100 h3 bg-washed-red dark-pink" data-step="2" onclick="${nextStep}">next</button></div>
                            </div>
                          </div>
                        </section>
                        <section id="addResourceStep-3" class="addResourceStep dn">
                          <div class="w-100 flex flex-column mt2 mb2">
                            <small>step 3: select the section you want your resource to live in</small>
                            <select>
                            ${mySections.map((section, idx) =>
                              html`
                              <option>Section ${idx}: ${section.title}</option>
                              `
                            )}
                            </select>
                          </div>
                          <small>step 4: add it to your project! (if the resource is new we'll also add it to our collective resources)</small>
                          <div class="w-100 flex flex-row mt3">
                            <div class="w-20 flex flex-row justify-start items-center"><button class="ba br2 w-100 h3 bg-light-gray dark-pink" data-step="2" onclick="${backStep}">go back</button> </div>
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
