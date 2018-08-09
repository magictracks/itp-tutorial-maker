var Component = require('choo/component')
var html = require('choo/html')


class SaveAsHTML extends Component {

  constructor(name, state, emit){
    super(name)
    this.state = state;
    this.emit = emit;

    this._onclick = this._onclick.bind(this);
    this.local = this.state.components[name] = {}
    this.renderTutorial = this.renderTutorial.bind(this);

  }


  update () {
      return true
  }

  _onclick(e) {
    this.emit("projects:saveAsJSON");
  }

  renderTutorial(){

    // let sections = html`
    //  ${this.state.sections.map( (section) => `<div class="section"><h3>${section.properties.title}</h3><h4>${section.properties.description}</h4></div>`)}
    // `

    let output = html`
    <html>
      <head>
        <title>Magic Tracks!</title>
      </head>
      <body>
        <div id="Tutorial">
          <header>
            <h1>${this.state.tutorial.title}</h1>
            <h2>${this.state.tutorial.description}</h2>
            <img src="${this.state.tutorial.headerImageUrl}"/>
          </header>
          <main>
            <h2>Sections </h2>
            ${this.state.sections.map( (section) => html`
              <div class="section">
                <h3>${section.properties.title}</h3>
                <h4>${section.properties.description}</h4>
                <div class="resources">
                  <h3>Resources</h3>
                  
                  ${section.resources.map( (resource) => html`
                  <div class="resource">
                    <h3>${resource.properties.title}</h3>
                    <h4>${resource.properties.description}</h4>
                  </div>
                  `
                  )}
                </div>
              </div>
              `
              )}
          </main>
        </div>
      </body>
    </html>
    `

    // console.log(output);
    return encodeURIComponent(output.outerHTML)
  }



  createElement () {
    // encodeURIComponent(document.querySelector("main").outerHTML)
    return html`
      <div class="pa2 mr2 self-end tr">
        <a class="tr" href="data:text/html;charset=utf-8,${this.renderTutorial()}" download="${this.state.tutorial.id}.html" onclick=${this._onclick}>Save as HTML</a>
      </div>
    `
  }

}

module.exports = SaveAsHTML;