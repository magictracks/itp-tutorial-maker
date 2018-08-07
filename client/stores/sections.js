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
        },
        resources:[]
      }

      state.sections.push(newSection)
      emitter.emit(state.events.RENDER)
    })

    emitter.on('sections:update', function (k, val, position) {
      state.sections[position].properties[k] = val;
      emitter.emit(state.events.RENDER)
    })


    emitter.on('sections:changePosition', function (k, newPosition, currentPosition) {
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

    emitter.on('sections:addResource', function (position) {
      let resourcesLength = state.sections[position].resources.length

      let newResource = {
        position: resourcesLength,
        id: uniqid(),
        sectionId: state.sections[position].id,
        tutorialId: state.tutorial.id,
        properties: {
          title:"I'm a resource title",
          description:"I'm a resource description",
          headerImageUrl:""
        }
      }

      state.sections[position].resources.push(newResource)
      emitter.emit(state.events.RENDER)
    })


    emitter.on('sections:updateResource', function (k, val, sectionPosition, featPosition ) {
      // let resourcesLength = state.sections[position].resources.length
      state.sections[sectionPosition].resources[featPosition].properties[k] = val;
      emitter.emit(state.events.RENDER)
    })

    emitter.on('sections:changeResourcePosition', function (k, val, sectionPosition, featPosition ) {
      
      state.sections[sectionPosition].resources[featPosition].properties[k] = val;
      // move the object to that position in the array
      state.sections[sectionPosition].resources = move(state.sections[sectionPosition].resources, val, featPosition)
      // then re-assign position numbers
      state.sections[sectionPosition].resources.forEach( (resource, idx) => {
        resource.position = idx;
      })

      emitter.emit(state.events.RENDER)
    })


  })
}

// via https://www.w3resource.com/javascript-exercises/javascript-array-exercise-38.php
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

