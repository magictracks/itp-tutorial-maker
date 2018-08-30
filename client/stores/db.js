module.exports = store



function store (state, emitter) {
  let initialState = initState();
  state.tutorials = initialState.tutorials;
  state.sections = initialState.sections;
  state.resources = initialState.resources;

  state.editing = {
    tutorialid: "",
    sectionid:"",
    resourceid:""
  }

  state.addResourceModalState = {
      toggled: false,
      currentStep: 0
  }

  state.addSectionModalState = {
      toggled: false,
      currentStep: 0
  }


  state.newTutorial = {
    title: "hello I'm a tutorial title: I'm informative and wonderful.",
    url:"#",
    urlName:"https://link-to-somewhere-awesome.com/amazing",
    description: "tutorial description. Learn all the things. In this tutorial we're going to learn about...",
    headerImage:"https://raw.githubusercontent.com/joeyklee/itp-tutorial-maker/client-refactor/client/assets/magic-tracks-logo.png",
    tags:['magic tracks', 'inspiration', 'itp', 'creative code', 'education'],
    sections:[]
  }
  state.newSection = {
    title: "hello I'm a section title: I'm informative and wonderful.",
    url:"#",
    urlName:"https://link-to-somewhere-awesome.com/amazing",
    description: "Section description. Learn all the things. In this section we're going to learn about...",
    headerImage:"https://raw.githubusercontent.com/joeyklee/itp-tutorial-maker/client-refactor/client/assets/magic-tracks-logo.png",
    tags:['magic tracks', 'inspiration', 'itp', 'creative code', 'education'],
    resources:[]
  }
  state.newResource = {
    title: "hello I'm a resource title: I'm informative and wonderful.",
    url:"#",
    urlName:"https://link-to-somewhere-awesome.com/amazing",
    description: "resource description. taken from XYZ",
    headerImage:"https://raw.githubusercontent.com/joeyklee/itp-tutorial-maker/client-refactor/client/assets/magic-tracks-logo.png",
    tags:['magic tracks', 'inspiration', 'itp', 'creative code', 'education']
  }


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

    emitter.on('db:updateProperty', function (d, id, featuretype, property) {
      // NOTE: NOT efficient at all? there must be a better way to do this?
      // Maybe it also is different using a different db.
      console.log(featuretype)
      state[featuretype].forEach( (feat) => {
        if(feat.id === id){
            feat[property] = d
        }
      })
      // emitter.emit(state.events.RENDER)
    })

    emitter.on('db:updateNewResource', function (k,v) {
      state.newResource[k] = v;
      // emitter.emit(state.events.RENDER)
    })

    emitter.on('db:updateNewSection', function (k,v) {
      state.newSection[k] = v;
      // emitter.emit(state.events.RENDER)
    })

    emitter.on('tutorial:removeSection', function (tutorialId, sectionId) {
      state.tutorials = state.tutorials.map( (tutorial) => {
        if(tutorial.id === tutorialId){
          tutorial.sections = tutorial.sections.filter( (section) => {
            return section.id !== sectionId
          })
        }
        return tutorial
      });
      emitter.emit(state.events.RENDER)
    })

    emitter.on('tutorial:removeResource', function (tutorialId, sectionId, resourceId) {
      state.tutorials = state.tutorials.map( (tutorial) => {
        if(tutorial.id === tutorialId){
          tutorial.sections = tutorial.sections.map( (section) => {
            if(section.id == sectionId){
                section.resources = section.resources.filter( (resource) => resource.id !== resourceId )
            }
            return section
          })
        }
        return tutorial
      });
      emitter.emit(state.events.RENDER)
    })

    emitter.on('tutorial:addResource', function (tutorialId, sectionId) {
      state.tutorials = state.tutorials.map((tutorial) => {
          if(tutorial.id === tutorialId){
            tutorial.sections = tutorial.sections.map( (section) => {
              if(section.id === sectionId){
                section.resources.push( Object.assign({id:`uid-${section.resources.length}`}, state.newResource ))
              }
              return section;
            })
          }
          return tutorial
      })
      emitter.emit(state.events.RENDER)
    })


    emitter.on('tutorial:addSection', function (tutorialId) {
      state.tutorials = state.tutorials.map((tutorial) => {
          if(tutorial.id === tutorialId){
            // add in the "uid-"
            tutorial.sections.push( Object.assign({id:`uid-${tutorial.sections.length}`}, state.newSection) )
          }
          return tutorial
      })
      emitter.emit(state.events.RENDER)
    })

    // handle modal popup states
    emitter.on('db:addResourceModalState:toggled', function (tutorialid, sectionid) {
      state.addResourceModalState.toggled = !state.addResourceModalState.toggled;
      // set which of the items is being edited
      state.editing.tutorialid = tutorialid;
      state.editing.sectionid = sectionid;

      emitter.emit(state.events.RENDER)
    })
    emitter.on('db:addSectionModalState:toggled', function (tutorialid) {
      state.addSectionModalState.toggled = !state.addSectionModalState.toggled;
      // set which of the items is being edited
      state.editing.tutorialid = tutorialid;

      emitter.emit(state.events.RENDER)
    })

    // handle modal popup states
    emitter.on('db:addResourceModalState:stepForward', function () {
      state.addResourceModalState.currentStep += 1;
      if(state.addResourceModalState.currentStep >= 3){
        state.addResourceModalState.currentStep = 0;
      }
      emitter.emit(state.events.RENDER)

    })
    emitter.on('db:addResourceModalState:stepBack', function () {
      state.addResourceModalState.currentStep -= 1;
      emitter.emit(state.events.RENDER)
    })

    emitter.on('db:addSectionModalState:stepForward', function () {
      state.addSectionModalState.currentStep += 1;
      if(state.addSectionModalState.currentStep >= 2){
        state.addSectionModalState.currentStep = 0;
      }
      emitter.emit(state.events.RENDER)

    })
    emitter.on('db:addSectionModalState:stepBack', function () {
      state.addSectionModalState.currentStep -= 1;
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
      headerImage:"https://raw.githubusercontent.com/joeyklee/itp-tutorial-maker/client-refactor/client/assets/magic-tracks-logo.png",
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
        headerImage:"https://raw.githubusercontent.com/joeyklee/itp-tutorial-maker/client-refactor/client/assets/magic-tracks-logo.png",
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
          headerImage:"https://raw.githubusercontent.com/joeyklee/itp-tutorial-maker/client-refactor/client/assets/magic-tracks-logo.png",
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
