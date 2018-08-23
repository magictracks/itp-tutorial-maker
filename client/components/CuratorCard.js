var html = require("choo/html");

module.exports = function(d){

  return html`
    <div class="card w4 h4 pa2 mt2 bg-washed-green br2 ba flex flex-column justify-end">
      <p class="ma0 pa0">${d.name}</p>
      <small>@${d.user}</small>
      <small>${d.description}</small>
    </div>
    `
}
