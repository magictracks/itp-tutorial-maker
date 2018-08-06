var Component = require('choo/component')
var html = require('choo/html')


class Section extends Component {
  constructor(name, state, emit, feat){
      super(name)

      this.state = state;
      this.emit = emit;
      this.feat = feat;


      this.handleChange = this.handleChange.bind(this);
      this.addReference = this.addReference.bind(this);
      this.removeSection = this.removeSection.bind(this);
      this.changePosition = this.changePosition.bind(this);
    }

    handleChange(e){
      e.preventDefault();

      let k = e.target.name
      console.log(k)
      // this.setState({k: e.target.value})
      // this.emit("section:update", k, e.target.value)
    }

    addReference(e){
      e.preventDefault();
      console.log("adding reference")
    }

    removeSection(e){
      e.preventDefault();
      console.log("removing section")
    }

    changePosition(){
      e.preventDefault();
      console.log("changing position")
    }

    update(){
      return true;
    }
    

    createElement(){
      return html`
        <div class="flex flex-column w-100 pa2" style="background-color: #9EEBCF; border-bottom:1px solid black;">
          <select>
              ${this.state.sections.map( (section) => html`<option ${section.position == this.feat.position ? "selected" : ""}>${section.position}</option>` )}
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
          <div class="resource-container">
          </div>
          <div class="flex flex-column w-50 pa2 center">
            <button onclick=${this.addResource}> add resource
            </button>
          </div>
        </div>
      `
    }

}

module.exports = Section