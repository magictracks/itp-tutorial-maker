var html = require("choo/html")
var TutorialCard  = require("./TutorialCard")


module.exports = function(state, emit){

  let myTutorials = [];
  for(let i = 0; i < 9; i++){
    let output = {title: "hello I'm a title", description: "I'm a description", user:Math.random()*1000}
    myTutorials.push( Object.assign({type:"tutorial"}, output) )
  }

  return html`
    <div class="w-100 pa2 flex flex-row items-center flex-wrap justify-between" >
      ${myTutorials.map((tutorial) => new TutorialCard(tutorial) )}
    </div>
  `
}
