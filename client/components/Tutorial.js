var Component = require('choo/component')
var html = require('choo/html')
var Section = require("./Section");

class Tutorial extends Component {

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
    this.emit("tutorial:update", k, e.target.value)
  }

  addSection(e){
    e.preventDefault();
    this.emit("sections:add")

  }

  update(){
    return true;
  }

  createElement(){
    return html`
      <div id="Tutorial" class="outline flex flex-column w-60">

        <form onkeypress="return event.keyCode != 13;" class="flex flex-column w-100 pa2">
          <textarea 
            type="textarea"
            name="title" 
            value=${this.state.tutorial.title}
            onkeyup=${this.handleChange} 
            style="width: 100%;
            height: 60px;
            padding: 12px 20px;
            box-sizing: border-box;
            border: 2px solid #ccc;
            resize: none;">${this.state.tutorial.title}</textarea>
        </form>
        <div class="w-100 flex flex-row justify-center pa2">
        <img src=${this.state.tutorial.headerImageUrl} style="width:80%"/>
        </div>
        <form onkeypress="return event.keyCode != 13;" class="flex flex-column w-100 pa2">
          <textarea 
            type="textarea"
            name="description" 
            value=${this.state.tutorial.description}
            onkeyup=${this.handleChange} 
            style="width: 100%;
            height: 150px;
            padding: 12px 20px;
            box-sizing: border-box;
            border: 2px solid #ccc;
            resize: none;">${this.state.tutorial.description}</textarea>
        </form>

        <div id="Section-container" class="outline ma2">
           ${this.state.sections.map((section) => this.state.cache(Section, section.id, section).render())}
        </div>
        <div class="flex flex-column w-50 pa2 center">
          <button id="AddSectionBtn" onclick=${this.addSection}> add section
          </button>
        </div>
      </div>
    `
  }

}

module.exports = Tutorial;