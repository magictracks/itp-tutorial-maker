var uniqid = require('uniqid');

module.exports = store

function store (state, emitter) {
  state.tutorial = {
    title: "I'm a title",
    description: "I'm a description",
    headerImageUrl: "https://user-images.githubusercontent.com/3622055/42908563-4778bd04-8aaf-11e8-95c1-47e18c0643a4.png",
    id: uniqid() // TODO: if using localhost: check localhost ID before overriding
  }

  emitter.on('DOMContentLoaded', function () {
    emitter.on('tutorial:update', function (k, val) {
      state.tutorial[k] = val;
      emitter.emit(state.events.RENDER)
    })


    emitter.on('tutorial:updateImage', function (base64img) {
      state.tutorial.headerImageUrl = base64img;
      emitter.emit(state.events.RENDER)
    })

  })
}
