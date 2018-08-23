var html = require("choo/html")

module.exports = function(d){
  return html`
  <div class="card w-100 h5 pa2 mr2 mt2 bg-washed-green br2 ba flex flex-column">
    <div class="w-100 h3 ba br2 mb2 mt1" ></div>
    <div class="flex flex-column pl1 pr1">
      <p class="f6 ma0 pa0">${d.title}</p>
      <p class="f7 ma0 pa0">${d.description}</p>
      <p class="f7 ma0 pa0"><a href="d.url">${d.url ? d.urlName : ""}</a></p>
    </div>
  </div>
  `
}
