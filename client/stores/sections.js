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

    emitter.on('sections:changePosition', function (k, newPosition, currentPosition) {
      // state.tutorial[k] = val;
      // state.sections[position].properties[k] = val;
      // console.log("new pos:" + newPosition, "current pos:" + currentPosition)
      // update the position in the data
      state.sections[currentPosition].properties[k] = newPosition;
      // move the object to that position in the array
      state.sections = move(state.sections, currentPosition, newPosition)
      // then re-assign position numbers
      state.sections.forEach( (section, idx) => {
        section.position = idx;
      })

      emitter.emit(state.events.RENDER)
    })
  })
}


function move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
   return arr;
}

