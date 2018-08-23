var html = require("choo/html")

module.exports = function(d){

  let sectionResource = [];
  for(let i=0; i< Math.round(Math.random() * 20); i++ ){
    sectionResource.push({})
  }

  return html`
  <div class="card w-100 h5 pa2 mr2 mt2 bg-light-pink br2 ba flex flex-column">
    <div class="flex flex-column pl1 pr1">
      <p class="f6 ma0 pa0">${d.title}</p>
      <p class="f7 ma0 pa0">${d.description}</p>
    </div>

    <div class="flex flex-row w-100 h-100 flex-wrap items-start justify-start content-start overflow-y-scroll">
      ${sectionResource.map( (d) => html`<div class="pa0 h2 bg-washed-green br2 w2 mt1 mr1"></div>`)}
    </div>
  </div>
  `
}
