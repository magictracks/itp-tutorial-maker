class Section {
	constructor(viewDom, name, title, description, headerImageUrl){
		this.viewDom = viewDom;
		this.name = name; 
		this.title = title;
		this.type = "section";
		this.description = description;
		this.headerImageUrl = headerImageUrl;
		this.position = null;

		this.resources = [];

		// initialize by sending to localStorage
		// or by getting the existing data from storage
		if(localStorage.getItem(this.name) === null){
			localStorage.setItem(this.name, JSON.stringify( [this] ) )
			this.render();
		} else{
			let data = getDataFromStorage(this.name);
			this.name = data.name;
			this.title = data.title;
			this.description = data.description;
			this.headerImageUrl = data.headerImageUrl;
			this.sections = data.resources;
			// render!
			this.render();
		}
	}
}


Section.prototype.update = function(){
	// this.title = document.querySelector(`#${this.name} h3`).textContent
	// this.description = document.querySelector(`#${this.name} h4`).textContent

	localStorage.setItem(this.name, JSON.stringify([this]) )
	this.render();
}

Section.prototype.render = function(){

	let data = getDataFromStorage(this.name)

	// remove the instance and re-add
	if(this.viewDom.querySelector(`#${this.name}`)){
		this.viewDom.querySelector(`#${this.name}`).remove();
	}

	let sectionTemplate = 
	`<div id=${this.name} class="section">
		<h3 contenteditable="true">${this.title}</h3>
		<h4 contenteditable="true">${this.description}</h4>
		<img src="">
		<button>&times;</button>
	</div>
	`
	let parsedTemplate = parseTemplateString(sectionTemplate)

	this.viewDom.appendChild(parsedTemplate)

}






/*
sections = tutorialTemplate.body.firstChild.querySelector(".sections")

if(this.sections.length > 0){
		console.log(data.sections[0])
	  this.sections.forEach( (section, idx) => {

	  	

	  	sectionTemplate = parser.parseFromString(sectionTemplate, "text/html")
	  	
			sections.appendChild( sectionTemplate.body.firstChild )
	  })	
}




*/