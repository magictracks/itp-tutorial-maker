
var Component = require('choo/component')
var html = require('choo/html')




class OpenExistingJson extends Component {
  constructor(name, state, emit){

    super(name);

    this.state = state;
    this.emit = emit;

    this.handleJSONFile = this.handleJSONFile.bind(this);

  }


  update(){
    return true;
  }

  handleJSONFile(e){
    e.preventDefault();
    let file = e.target.files[0]
    let reader = new FileReader();

    reader.addEventListener("load", () =>{
      // reader.result
      
      let result = atob(reader.result.split(",")[1])
      // console.log(atob(reader.result.split(",")[1] ))
      this.emit("projects:openJsonFile", result);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }

  }



  createElement(){
    return html`
      <div class="pa2 mr2 self-end tr">
        <label for="openJsonFile">file dialog</label>
        <input onchange=${this.handleJSONFile} id="openJsonFile" type="file" style="position: fixed; top: -100em">
      </div>
    `

  }

}

module.exports = OpenExistingJson