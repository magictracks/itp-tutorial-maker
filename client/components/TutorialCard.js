var html = require("choo/html")

module.exports = function(d){
  let tutorialSections = [];
  for(let i=0; i< Math.round(Math.random() * 10); i++ ){
    tutorialSections.push({})
  }



  return html`
  <div class="card w-30 h5 pa2 mt2 mr2 bg-washed-yellow br2 ba flex flex-column">
    <div class="w-100 h3 ba br2 mb2 mt1" ></div>
    <div class="flex flex-column pl1 pr1">
      <p class="f6 ma0 pa0">${d.title}</p>
      <p class="f7 ma0 pa0">${d.description}</p>
    </div>

    <div class="flex flex-column w-100 h-100 overflow-y-scroll pa1">
      ${tutorialSections.map( (d) => {
        let sectionResource = [];
        for(let i=0; i< Math.round(Math.random() * 20); i++ ){
          sectionResource.push({})
        }

        return html`<div class="h2 pa1 bg-washed-red br2 w-100 mt1 flex flex-row">
          ${sectionResource.map((section) => html`<div class="w1 bg-washed-green mr1 br2 h1 mt1"></div>`) }
      </div>`
      })}
    </div>
  </div>
  `
}
