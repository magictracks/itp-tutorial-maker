module.exports = store

function store (state, emitter) {
  state.totalHellos = 0;
  state.hellos = [];

  emitter.on('DOMContentLoaded', function () {
    emitter.on('hellos:add', function (hello) {
      state.totalHellos += 1;
      state.hellos.push(hello);
      emitter.emit(state.events.RENDER)
    })
  })
}
