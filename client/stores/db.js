module.exports = store



function store (state, emitter) {
  state.tutorials = [];
  state.sections = [];
  state.resources = [];

  for(let i = 0; i < 3; i++){

    let output = {
      title: "hello I'm a title",
      url:"#",
      urlName:"Link",
      description: "Anim nisi nostrud aliquip officia eu laborum sint aliqua cupidatat minim dolor sint culpa."
    }

    state.tutorials.push( Object.assign({type:"tutorial"}, output) )
    state.sections.push(Object.assign({type:"section"}, output))
    state.resources.push(Object.assign({type:"resource"}, output))
  }

  state.sections = state.sections.map( (section) => {
      let output = {
        title: "hello I'm a resource",
        url:"#",
        urlName:"https://link-to-somewhere-awesome.com/amazing",
        description: "Resource description. Learn all the things",
        tags:['magic tracks', 'inspiration', 'itp', 'creative code', 'education']
      }
      section.resources = [];
      for(let i = 0; i < Math.random()*4; i++){
        section.resources.push(output)
      }

      return section
  })

  emitter.on('DOMContentLoaded', function () {

    emitter.on('db:addResource', function (count) {
      emitter.emit(state.events.RENDER)
    })


  })
}
