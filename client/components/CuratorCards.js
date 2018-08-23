var html = require("choo/html");
var CuratorCard = require("./CuratorCard")


module.exports = function(state, emit){
  let curators = [];
  curators.push({user:"joeyklee", name:"Joey L", description:"Skateboards + Pixels = tools for awesome"})
  curators.push({user:"sandy", name:"Sandy H", description:"I can make anything from fabric"})
  curators.push({user:"hongky", name:"Hong K", description:"prosthetics are my thing"})
  curators.push({user:"shiffman", name:"Dan Shiffman", description:"Prof. @ ITP"})
  curators.push({user:"dano1234", name:"Dan O", description:"Prof. @ ITP"})
  curators.push({user:"vanevery", name:"Shawn Van E", description:"Prof. @ ITP"})

  return html`
    <div class="w-100 pa2 flex flex-row items-center flex-wrap justify-between" >
      ${ curators.map((curator) => new CuratorCard(curator)) }
    </div>
    `
}
