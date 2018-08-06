module.exports = store

function store (state, emitter) {
  state.projects =  {
      openExisting: false,
      lastSavedToLocalStorage: new Date()
  }
  // state.projects.openExisting = false;
  // state.projects.lastSavedToLocalStorage = new Date();


  emitter.on('DOMContentLoaded', function () {
    emitter.on('projects:open', function () {
      state.projects.openExisting = true;

      // TODO: check localStorage
      // TODO: check local file system
      emitter.emit(state.events.RENDER)
    })

    emitter.on('projects:saveToLocalStorage', function () {
      state.projects.lastSavedToLocalStorage = new Date();

      localStorage.setItem(state.tutorial.id, [JSON.stringify(state.tutorial), JSON.stringify(state.sections), JSON.stringify(state.resources)])

      emitter.emit(state.events.RENDER)
    })
  })
}
