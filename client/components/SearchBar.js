var html = require("choo/html");


module.exports = function(state, emit){

  let tags = ["coding train", "javascript", "p5js", "arduino", "open source", "github"]

  return html`
    <section class="flex flex-column w-100 mt3 mb2 br2 pa2 bg-washed-red">
            <div>
              <h3 class="ma0 pa0 mb2"> What will you learn today? </h3>
            </div>
            <div class="w-100 h2 br2 flex flex-column justify-center items-center">
              <input class="pa2 w-100 ba br2 bn h3" type="text" placeholder="🔍 Search by tags, user, topic">
            </div>
            <div class="w-100 h-auto br2 flex flex-column items-start mt2">
              <small>some popular tags: </small>
              <ul class="list ma0 pa0 pl0 flex flex-row flex-wrap justify-between">
                ${tags.map((tag) => html`<li class="mr2 pa1 ba f6 br2"><a>${tag}</a></li>`)}
              </ul>
            </div>
      </section>
  `
}
