var Component = require('choo/component')
var html = require('choo/html')


class Resource extends Component{
  constructor(name, state, emit, feat){
    super(name)

    this.state = state;
    this.emit = emit;
    this.feat = feat;

  }

  update(){
    return true;
  }

  createElement(){
    return html`
      <div class="flex flex-column w-100 pa2" style="background-color:  #ffa3d7; margin-bottom:2px;">
        <select name="position" onchange="">
        </select>
        <form onkeypress="return event.keyCode != 13;" class="flex flex-column w-100 pa2">
          <textarea type="textarea" name="title" value=${this.feat.properties.title} onkeyup=${this.handleChange} style="width: 100%;
                  height: 60px;
                  padding: 12px 20px;
                  box-sizing: border-box;
                  border: 2px solid #ccc;
                  resize: none;">${this.feat.properties.title}</textarea>
        </form>
        <form onkeypress="return event.keyCode != 13;" class="flex flex-column w-100 pa2">
          <textarea type="textarea" name="description" value=${this.feat.properties.description} onkeyup=${this.handleChange} style="width: 100%;
                  height: 150px;
                  padding: 12px 20px;
                  box-sizing: border-box;
                  border: 2px solid #ccc;
                  resize: none;">${this.feat.properties.description}</textarea>
        </form>
        <div class="flex flex-row w-100 pa2 center">
          <div class="flex flex-row w-50 pa2 center">
            <button style="background-color:  #ffa3d7; border:2px solid white; color:white"> save to nyu tagged resources
            </button>
          </div>
          <div class="flex flex-row w-50 pa2 center">
            <button style="background-color:  #ffa3d7; border:2px solid white; color:white"> remove resource
            </button>
          </div>  
        </div>
      </div>
    `
  }
}

module.exports = Resource