var html = require("choo/html")

module.exports = function(section){

  return html`
  <div class="card w-30 h4 pa2 mt3 bg-washed-red br2 flex flex-column grow" style="width:320px;">
    <a href="edit/sections/${section.id}">
    <div class="flex flex-column pl1 pr1">
      <p class="f6 ma0 pa0">${section.title}</p>
      <p class="f7 ma0 pa0">${section.description}</p>
    </div>

    <div class="flex flex-row w-100 h-100 flex-wrap items-start justify-start content-start overflow-y-auto">
      ${section.resources.map( (resource) => html`<div class="pa0 h2 bg-dark-pink br2 w2 mt1 mr1"></div>`)}
    </div>
  </div>
  `
}
