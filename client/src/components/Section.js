const Resource = require("./Resource.js");



class AddResourceBtn {
	constructor(elem, context){
		this._elem = elem;
		this.counter = 0;
		this.context = context;
		elem.onclick = this.onClick.bind(this);
	}

	add(){
		console.log("add me!", this.counter)
		
		this.context.addResource(this._elem.parentElement)
		console.log(this.context.resources, this._elem.parentElement)

		// this.context.resources[this.context.resources.length-1].create()


		this.counter++;
	}

	onClick(e){
		let action = e.target.dataset.action;
    if (action) {
      this[action]();
    }
	}

}




class Section {
	constructor(workspace, position, context){
		this.context = context;
		this.workspace = workspace;
		this.title = "i'm a section title";
		this.description = "i'm a section description";
		this.position = position;
		this.id = `section-${this.position}`;

		this.resources = [];

		this.SectionStyle =`
		width:100%;
		height: auto;
		padding:10px;
		border:2px solid grey;
		display:flex;
		flex-direction: column;
		align-items:center;
		margin-top:4px;
		`

		this.sectionResourcesStyle=`
		width:100%;
		`

	}
}


// <button id="addResourceTo-${this.id}" data-section="${this.id}">Add Resource</button>
Section.prototype.create = function(){
	

	let section = `
	<div id="${this.id}" style="${this.SectionStyle}">
		<div class="section-info">
			<h2 contenteditable="true">${this.title}</h2>
			<h4 contenteditable="true">${this.description}</h4>
		</div>
		<div class="section-resources" style="${this.sectionResourcesStyle}">

			<div class="menu">
				<button data-action="add">add resource</button>
			</div>
		</div>
	</div>
	`

	// this.workspace.innerHTML += section;

	let doc = new DOMParser().parseFromString(section, 'text/html');
	this.workspace.appendChild(doc.body.firstChild) 

	// let btn = new AddResourceBtn(document.createElement("button"))
	let menu = document.querySelector(`#${this.id} .section-resources .menu`)
	
	// event delegation to menu
	new AddResourceBtn(menu, this)
	
	return section;
}



Section.prototype.addResource = function(ws){
	let resource, resourcesLength, resourcePosition;
	
	resourcesLength = this.resources.length;
	if(this.resources.length == 0) {
		resourcePosition = 0;
	} else{
		resourcePosition = resourcesLength;
	}
	

	resource = new Resource(ws, resourcePosition, this)
	resource.create();
	// add to 
	this.resources.push(resource)

}



module.exports = Section;