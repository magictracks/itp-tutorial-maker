var html = require("choo/html")

module.exports = function(resource){
  return html`
  <div class="card pa2 mt3 bg-dark-pink moon-gray br2 flex flex-column grow" style="width:324px; height:324px">
    <div class="w-100 ba br2 mb2 mt1" style="height:100px"></div>
    <div class="flex flex-column pl1 pr1">
      <p class="f6 ma0 pa0">${resource.title}</p>
      <p class="f7 ma0 pa0">${resource.description}</p>
      <p class="f7 ma0 pa0 mt1">tagged: magic, awesome, wonderful, computation</p>
      <p class="f7 ma0 pa0 mt1">rating: beginner-friendly </p>
      <p class="f7 ma0 pa0"><a href="${resource.url}">${resource.url ? resource.urlName : ""}</a></p>
    </div>
  </div>
  `
}
