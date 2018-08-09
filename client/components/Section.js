var Component = require('choo/component')
var html = require('choo/html')
var Resource = require('./Resource')


class Section extends Component {
  constructor(name, state, emit, feat){
      super(name)

      this.state = state;
      this.emit = emit;
      this.feat = feat;


      this.handleChange = this.handleChange.bind(this);
      this.addResource = this.addResource.bind(this);
      this.removeSection = this.removeSection.bind(this);
      this.changePosition = this.changePosition.bind(this);
    }

    handleChange(e){
      e.preventDefault();
      let k = e.target.name
      this.emit("sections:update", k, e.target.value, this.feat.position)
    }


    addResource(e){
      e.preventDefault();
      console.log("adding resource")
      this.emit("sections:addResource", this.feat.position)
    }

    removeSection(e){
      e.preventDefault();
      console.log("removing section")
      this.emit("sections:removeSection", this.feat.position)
    }

    changePosition(e){
      e.preventDefault();
      
      let k = e.target.name;
      let val = e.target.value;
      this.emit("sections:changePosition", k, val, this.feat.position)
    }

    update(){
      this.emit("projects:saveAsJSON");
      return true;
    }
    

    createElement(){
      return html`
        <div class="flex flex-column w-100 pa2" style="background-color: #9EEBCF; margin-bottom:2px;">
          <select name="position" onchange=${this.changePosition}>
              ${this.state.sections.map( (section) => html`<option ${section.position == this.feat.position ? "selected" : ""}>${section.position}</option>` )}
          </select>
          <button onclick=${this.removeSection}> remove section</button>

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
          <div class="resource-container ma3">
           ${this.feat.resources.map((resource) => this.state.cache(Resource, resource.id, resource, this.feat.position).render()) }
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