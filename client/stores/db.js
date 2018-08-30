module.exports = store



function store (state, emitter) {
  let initialState = initState();
  state.tutorials = initialState.tutorials;
  state.sections = initialState.sections;
  state.resources = initialState.resources;

  state.curators = [];
  state.curators.push({user:"joeyklee", name:"Joey L", description:"Skateboards + Pixels = tools for awesome"})
  state.curators.push({user:"sandy", name:"Sandy H", description:"I can make anything from fabric"})
  state.curators.push({user:"hongky", name:"Hong K", description:"prosthetics are my thing"})
  state.curators.push({user:"shiffman", name:"Dan Shiffman", description:"Prof. @ ITP"})
  state.curators.push({user:"dano1234", name:"Dan O", description:"Prof. @ ITP"})
  state.curators.push({user:"vanevery", name:"Shawn Van E", description:"Prof. @ ITP"})
  state.curators.push({user:"blahah", name:"Rik", description:"Computational Do-gooder"})

  state.tags =  [
      "javascript",
      "learning",
      "tutorial",
      "processing",
      "Processing (Programming Language)",
      "creative coding",
      "p5.js",
      "JavaScript (Programming Language)",
      "HTML (Programming Language)",
      "HTML5 (API)",
      "Cascading Style Sheets (Programming Language)",
      "Education (TV Genre)",
      "Tutorial (Media Genre)",
      "Intro",
      "Lesson",
      "Lessons",
      "Teacher",
      "p5js",
      "daniel shiffman",
      "p5 js",
      "p5.js tutorial",
      "coding",
      "programming"
    ]




  emitter.on('DOMContentLoaded', function () {

    // emitter.on('db:addResource', function (count) {
    //   emitter.emit(state.events.RENDER)
    // })

    emitter.on('db:addResource', function (count) {
      emitter.emit(state.events.RENDER)
    })


  })
}



// create a few tutorials

function initState(){
  let tutorials = [];
  let sections = [];
  let resources = [];


  // create initial tutorials dataset;
  for(let i = 0; i < 6; i++){

    let output = {
      title: "How about this cheeky title, eh?",
      url:"#",
      urlName:"https://link-to-somewhere-awesome.com/amazing",
      description: "This description is as good as it's going to get. Pretty much pulitzer prize level right here.",
      id:`uid-${i}`
    }

    tutorials.push( Object.assign({type:"tutorial", "sections":[]}, output) )
  }

  // fill it with sections and resources of random lengths
  tutorials = tutorials.map( (tutorial) => {
      let output = {
        title: "hello I'm a section title: I'm informative and wonderful.",
        url:"#",
        urlName:"https://link-to-somewhere-awesome.com/amazing",
        description: "Section description. Learn all the things. In this section we're going to learn about...",
        tags:['magic tracks', 'inspiration', 'itp', 'creative code', 'education']
      }
      for(let i = 0; i < Math.random()*4; i++){
        tutorial.sections.push( Object.assign({tutorialId:tutorial.id, id:`uid-${i}`, resources:[]} , output)  )
      }

      tutorial.sections = tutorial.sections.map( (section) => {
        let output = {
          title: "hello I'm a resource title. I'm smart and interesting.",
          url:"#",
          urlName:"https://link-to-somewhere-awesome.com/amazing",
          description: "Resource description. I'm a resource and I came from website XYZ",
          tags:['magic tracks', 'inspiration', 'itp', 'creative code', 'education']
        }
        for(let i = 0; i < Math.random()*4; i++){
          section.resources.push( Object.assign({sectionId: section.id, tutorialId: section.tutorialId, id:`uid-${i}`} , output)  )
        }

        return section
      })

      return tutorial
  })

  // set sections and resource from those nested in tutorial
  tutorials.forEach( (tutorial) => {
    tutorial.sections.forEach( (section) => {
      sections.push(section)

      section.resources.forEach( (resource) => {
        resources.push(resource);
      })
    })
  })

  return {tutorials, sections, resources}
}
