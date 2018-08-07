// let OpenProjectModal = require("../components/OpenProjectModal")

module.exports = store

function store (state, emitter) {
  state.projects =  {
      openModal: false,
      lastSavedToLocalStorage: new Date()
  }
  // state.projects.openExisting = false;
  // state.projects.lastSavedToLocalStorage = new Date();


  emitter.on('DOMContentLoaded', function () {
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

    emitter.on('projects:openSelectedProject', function (selected) {
      console.log(selected)

      state.tutorial = JSON.parse(localStorage.getItem(selected))[0].tutorial
      state.sections = JSON.parse(localStorage.getItem(selected))[0].sections
      
      emitter.emit(state.events.RENDER)
    })


  })
}
