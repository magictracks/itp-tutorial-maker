var html = require("choo/html")

module.exports = function(d){

  let sectionResource = [];
  for(let i=0; i< Math.round(Math.random() * 20); i++ ){
    sectionResource.push({})
  }

  return html`
  <div class="card w-30 h4 pa2 mt3 bg-washed-red br2 flex flex-column grow" style="width:320px;">
    <div class="flex flex-column pl1 pr1">
      <p class="f6 ma0 pa0">${d.title}</p>
      <p class="f7 ma0 pa0">${d.description}</p>
    </div>

    <div class="flex flex-row w-100 h-100 flex-wrap items-start justify-start content-start overflow-y-auto">
      ${sectionResource.map( (d) => html`<div class="pa0 h2 bg-dark-pink br2 w2 mt1 mr1"></div>`)}
    </div>
  </div>
  `
}
