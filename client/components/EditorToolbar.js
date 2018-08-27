var html = require("choo/html");

module.exports = function(name, state, emit){

  return html`
    <div class="flex flex-row items-center w-100 h3 mt3 mb2">
        <ul class="flex flex-row list pa2 ma0 items-center justify-end h-100 w-100">
          <li class="mr4">new</li>
          <li class="mr4">import</li>
          <li class="mr4">export</li>
          <li class="mr4"><a href="/preview">preview</a></li>
          <li class="">share</li>
        </ul>
    </div>
  `
}
