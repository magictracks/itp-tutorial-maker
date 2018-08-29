var html = require("choo/html");

module.exports = function(d){

  return html`
    <div class="card pa2 mt2 bg-hot-pink yellow br2 flex flex-column justify-around" style="width:200px; height:200px">
      <div class="w-100 flex flex-column justify-center items-center" style="height:80px">
        <div class="ba bg-gold br-100 flex flex-column justify-center items-center" style="width:80px; height:80px"><p class="f3">🧠</p></div>
      </div>
      <div class="w-100">
        <p class="ma0 pa0">${d.name}</p>
        <small>@${d.user}</small>
        <small>${d.description}</small>
      </div>
    </div>
    `
}
