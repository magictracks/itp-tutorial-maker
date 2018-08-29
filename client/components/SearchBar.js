var html = require("choo/html");
var css = require("sheetify")


css`
#searchBar{
  min-height:150px;
}
`


module.exports = function(name, state, emit){

  let tags = ["coding train", "javascript", "p5js", "arduino", "open source", "github"]

  function navigate(){
     emit("pushState", "search")
  }

  return html`
    <section id="searchBar" class="flex flex-column w-100 mt3 mb2 br2 pa2 bg-washed-red h-auto">
            <div>
              <h3 class="ma0 pa0 mb2"> What will you learn today? </h3>
            </div>
            <div class="w-100 h2 br2 flex flex-column justify-center items-center">
              <form class="w-100" onsubmit=${navigate}>
                <input class="pa2 w-100 ba br2 bn h-100" type="text" placeholder="🔍 Search by tags, user, topic">
                <input type="submit" style="display: none" />
              </form>
            </div>
            <div class="w-100 h-auto br2 flex flex-column items-start mt2">
              <small>some popular tags: </small>
              <ul class="list ma0 pa0 pl0 flex flex-row flex-wrap justify-between">
                ${tags.map((tag) => html`<li class="mr2 pa1 ba f6 br2"><a class="link dark-pink" href="/search">${tag}</a></li>`)}
              </ul>
            </div>
      </section>
  `
}
