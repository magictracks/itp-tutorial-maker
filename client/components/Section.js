var Component = require('choo/component')
var html = require('choo/html')


class Section extends Component {
  constructor(name, state, emit){
      super(name)

      this.state = state;
      this.emit = emit;

      this.handleChange = this.handleChange.bind(this);
      this.addSection = this.addSection.bind(this);
    }

    handleChange(e){
      e.preventDefault();

      let k = e.target.name
      console.log(k)
      // this.setState({k: e.target.value})
      this.emit("section:update", k, e.target.value)
    }

    addReference(e){
      e.preventDefault();

    }

    update(){
      return true;
    }

    createElement(){
      return html`
        <div class="outline flex flex-column w-60">

          <form onkeypress="return event.keyCode != 13;" class="flex flex-column w-100 pa2">
            <textarea 
              type="textarea"
              name="title" 
              value=${this.state.section.title}
              onkeyup=${this.handleChange} 
              style="width: 100%;
              height: 60px;
              padding: 12px 20px;
              box-sizing: border-box;
              border: 2px solid #ccc;
              resize: none;">${this.state.section.title}</textarea>
          </form>
          <form onkeypress="return event.keyCode != 13;" class="flex flex-column w-100 pa2">
            <textarea 
              type="textarea"
              name="description" 
              value=${this.state.section.description}
              onkeyup=${this.handleChange} 
              style="width: 100%;
              height: 150px;
              padding: 12px 20px;
              box-sizing: border-box;
              border: 2px solid #ccc;
              resize: none;">${this.state.section.description}</textarea>
          </form>

          <div id="Section-container">
          
          </div>

          <div class="flex flex-column w-50 pa2 center">
            <button id="AddSectionBtn" onclick=${this.addSection}> add section
            </button>
          </div>
        </div>
      `
    }

}