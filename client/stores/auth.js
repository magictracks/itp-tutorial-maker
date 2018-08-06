module.exports = store

function store (state, emitter) {
  state.authenticated = false;

  emitter.on('DOMContentLoaded', function () {
    emitter.on('authenticate', function (authState) {

      state.authenticated = authState
      emitter.emit(state.events.RENDER)
    })
  })
}
