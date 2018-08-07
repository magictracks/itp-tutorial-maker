var uniqid = require('uniqid');

module.exports = store


function store (state, emitter) {

  state.sections = [];

  emitter.on('DOMContentLoaded', function () {
    emitter.on('sections:add', function () {

      let sectionsLength = state.sections.length

      let newSection = {
        position: sectionsLength,
        id: uniqid(),
        tutorialId: state.tutorial.id,
        properties: {
          title:"I'm a section title",
          description:"I'm a section description",
          headerImageUrl:""
        }
      }

      state.sections.push(newSection)
      emitter.emit(state.events.RENDER)
    })

    emitter.on('sections:update', function (k, val, position) {
      // state.tutorial[k] = val;
      state.sections[position].properties[k] = val;
      emitter.emit(state.events.RENDER)
    })
  })
}