var Component = require('choo/component')
var html = require('choo/html')


class OpenExistingProjectBtn extends Component {

  constructor(name, state, emit){
    super(name)
    this.state = state;
    this.emit = emit;

    this.display = "none"

    this.closeModal = this.closeModal.bind(this)

    this._onclick = this._onclick.bind(this);
    this.local = this.state.components[name] = {}
    this.getSavedProjects = this.getSavedProjects.bind(this) 
    this.openSelectedProject = this.openSelectedProject.bind(this)

    this.setState();
  }


  update () {
      return true
  }

  closeModal(e){
    e.preventDefault();

    
    this.emit("projects:closeModal");
    this.setState();
  }

   setState(){
    if(this.state.projects.openModal === false){
      this.display = "none"
    } else{
      this.display = "visible"
    }
  }


  _onclick(e) {
    
    this.emit("projects:openModal");
    this.setState();
  }

  getSavedProjects(){
    return Object.keys(localStorage)
    // return Object.keys(localState).map( k => JSON.parse(localState.getItem(k))[0]  )
  }

  openSelectedProject(e){
    e.preventDefault();

    let val = e.target.dataset.id;
    
    this.emit("projects:openSelectedProject", val)
    this.emit("projects:closeModal");
    this.setState();
  }

  createElement () {
    return html`
      <div>
        <div class="pa2 mr2 self-end tr">
          <a href="#" class="tr" onclick=${this._onclick}>Open Existing</a>
        </div>
        <!-- modal --> 
        <div id="OpenProjectModal" class="modal absolute flex flex-column justify-center items-center w-100 h-100 top-0 left-0 bg-white" style="display:${this.display}">
          <div class="modal-content flex flex-column w-60 pa2 outline">
            <span onclick=${this.closeModal} class="close">X</span>
            <ul>
              ${this.getSavedProjects().map(item => html`<li onclick=${this.openSelectedProject} data-id=${item}>${item}<li>`) }
            </ul>
          </div>
        </div>

      </div>
    `
  }

}

module.exports = OpenExistingProjectBtn;