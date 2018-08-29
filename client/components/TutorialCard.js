var html = require("choo/html")

module.exports = function(d){
  let tutorialSections = [];
  for(let i=0; i< Math.round(Math.random() * 10); i++ ){
    tutorialSections.push({})
  }



  return html`

  <div class="card pa2 mt3 mb2 bg-light-green  br2 flex flex-column overflow-y-auto grow" style="width:324px; height:324px">
    <a href="/edit" class="link dark-pink">
        <!-- information -->
          <div class="flex flex-column pa2">
            <p class="f4 ma0 pa0">${d.title}</p>
            <small>by @username</small>
            <p class="f7 ma0 pa0 mt1">${d.description}</p>
            <p class="f7 ma0 pa0 mt1">tagged: magic, awesome, wonderful, computation</p>
          </div>

          <div class="flex flex-column w-100 h-auto overflow-y-auto pa1">
            ${tutorialSections.map( (d) => {
              let sectionResource = [];
              for(let i=0; i< Math.round(Math.random() * 20); i++ ){
                sectionResource.push({})
              }
              return html`<div class="h2 pa1 bg-washed-red br2 w-100 mt1 flex flex-row">
                ${sectionResource.map((section) => html`<div class="w1 bg-dark-pink mr1 br2 h1 mt1"></div>`) }
            </div>`
            })}
          </div>
    </a>
  </div>
  `
}
