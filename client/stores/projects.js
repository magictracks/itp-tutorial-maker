module.exports = store

function store (state, emitter) {
  state.projects =  {
      localStorageKeys: [],
      openModal: false,
      lastSavedToLocalStorage: new Date(),
      outputJSON:""
  }

  emitter.on('DOMContentLoaded', function () {

    emitter.on('projects:getLocalStorageKeys', function () {
      state.projects.localStorageKeys = Object.keys(localStorage);
      console.log(state.projects.localStorageKeys)
      // emitter.emit(state.events.RENDER)
    })

    emitter.on('projects:openModal', function () {
      state.projects.openModal = true;

      // TODO: check localStorage
      // TODO: check local file system
      emitter.emit(state.events.RENDER)
    })

    emitter.on('projects:closeModal', function () {
      state.projects.openModal = false;
      emitter.emit(state.events.RENDER)

    })

    emitter.on('projects:saveToLocalStorage', function () {
      state.projects.lastSavedToLocalStorage = new Date();
      /*
      JSON.parse(localStorage.getItem(choo.state.tutorial.id))[0]
      */
      localStorage.setItem(state.tutorial.id,  JSON.stringify([ {"tutorial": state.tutorial, "sections":state.sections}]) )

      emitter.emit(state.events.RENDER)
    })

    emitter.on('projects:saveAsJSON', function () {
      /*
      JSON.parse(localStorage.getItem(choo.state.tutorial.id))[0]
      */
      // first save to localStorage
      localStorage.setItem(state.tutorial.id,  JSON.stringify([ {"tutorial": state.tutorial, "sections":state.sections}]) )
      // write to json file
      // console.log(JSON.stringify({"tutorial": state.tutorial, "sections":state.sections}))
      state.projects.outputJSON = JSON.stringify({"tutorial": state.tutorial, "sections":state.sections})

      emitter.emit(state.events.RENDER)
    })

    emitter.on('projects:saveToHTML', function () {
      /*
      JSON.parse(localStorage.getItem(choo.state.tutorial.id))[0]
      */
      // first save to localStorage
      localStorage.setItem(state.tutorial.id,  JSON.stringify([ {"tutorial": state.tutorial, "sections":state.sections}]) )
      // write to json file
      console.log(JSON.stringify({"tutorial": state.tutorial, "sections":state.sections}))


      emitter.emit(state.events.RENDER)
    })

    emitter.on('projects:openSelectedProject', function (selected) {
      console.log(selected)

      state.tutorial = JSON.parse(localStorage.getItem(selected))[0].tutorial
      state.sections = JSON.parse(localStorage.getItem(selected))[0].sections
      // TODO: there's probably a better way to do this
      state.projects.outputJSON = JSON.stringify({"tutorial": state.tutorial, "sections":state.sections})

      emitter.emit(state.events.RENDER)
    })

    emitter.on('projects:openJsonFile', function (selected) {
      console.log(JSON.parse(selected))
      selected = JSON.parse(selected);

      console.log("i'm a tutorial", state.tutorial)

      state.tutorial = selected.tutorial
      state.sections = selected.sections

      emitter.emit(state.events.RENDER)
    })


  })
}
