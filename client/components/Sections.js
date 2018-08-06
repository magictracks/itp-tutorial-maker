var html = require('choo/html')


function Sections(state){

   

  return html`
    ${state.sections.map((section) => html`<li>${todo.title}</li>`)}
  `
}