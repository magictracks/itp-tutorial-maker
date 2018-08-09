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
        <meta charset="UTF-8">
        <meta name="description" content="magic tracks tutorial">
        <meta name="keywords" content="magic tracks">
        <meta name="author" content="educators of the internet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style type="text/css">
          *{
            box-sizing:border-box;
            font-family:helvetica, sans-serif;
          }
          html,body{
            width:100%;
            height:100%;
            margin:0;
          }
          .container{
            width:100%;
            height:auto;
            display:flex;
            flex-direction:column;
            align-items:center;
          }
          #Tutorial{
            width:100%;
            height:auto;
            display:flex;
            flex-direction:column;
            align-items:center;
            max-width:800px;
            border: 2px solid black;
            padding:10px;
          }
          header{
            width:100%;
            height:auto;
            display:flex;
            flex-direction:column;
            align-items:center;
            padding:10px;
          }
          header img{
            max-width:800px;
            width:100%;
          }
          main{
           width:100%;
           display:flex;
           flex-direction:column;
           align-items:flex-start;
           padding:10px; 
           margin: 10px;
           border: 2px solid black;
          }
          .section{
            width:100%;
            padding:10px;
            border: 2px solid black;
            margin:4px 0px 4px 0px;
          }
          .resource{
            width:100%;
            padding:10px;
            border: 2px solid black;
            margin:4px 0px 4px 0px;
          }
        </style>
      </head>
      <body>
        <div class="container">
        <div id="Tutorial">
          <header>
            <p>Brought to you by the Magic Tracks...</p>
            <h1>${this.state.tutorial.title}</h1>
            <h2>${this.state.tutorial.description}</h2>
            <img src="${this.state.tutorial.headerImageUrl}"/>
          </header>
          <main>
            ${this.state.sections.map( (section, sectionIndex) => html`
              <div class="section">
                <h3>Section ${sectionIndex + 1}: ${section.properties.title}</h3>
                <h4>${section.properties.description}</h4>
                <div class="resources">
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