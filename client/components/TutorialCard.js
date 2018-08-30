var html = require("choo/html")

module.exports = function(tutorial){

  return html`

  <div class="card pa2 mt3 mb2 bg-light-green  br2 flex flex-column overflow-y-auto grow" style="width:324px; height:324px">
    <a href="/edit/tutorials/${tutorial.id}" class="link dark-pink">
        <!-- information -->
          <div class="flex flex-column pa2">
            <p class="f4 ma0 pa0">${tutorial.title}</p>
            <small>by @username</small>
            <p class="f7 ma0 pa0 mt1">${tutorial.description}</p>
            <p class="f7 ma0 pa0 mt1">tagged: magic, awesome, wonderful, computation</p>
          </div>

          <div class="flex flex-column w-100 h-auto overflow-y-auto pa1">
            ${tutorial.sections.map( (section) => {
              return html`<div class="h2 pa1 bg-washed-red br2 w-100 mt1 flex flex-row">
                ${section.resources.map((resource) => html`<div class="w1 bg-dark-pink mr1 br2 h1 mt1"></div>`
              )}
            </div>`
            })}
          </div>
    </a>
  </div>
  `
}
