// const Resource = require("./Resource.js")
const Section = require("./Section.js")

class Tutorial{
	constructor(workspace, title, description, headerImageUrl){
		this.workspace = workspace;
		this.title = title;
		this.description = description;
		this.headerImageUrl = headerImageUrl;
		this.added = false;

		this.sections = [];

		this.TutorialStyle = `
		margin-top:40px;
		display: flex;
		flex-direction:column;
		width:100%;
		align-items:center;
		`;
		this.TutorialInfoStyle = `
		display: flex;
		flex-direction:column;
		text-align:center;
		align-items:center;
		width:100%;
		`;
		this.TutorialImageStyle = `
		height: 200px;
		width:80%;
		background-image:url(${this.headerImageUrl});
		background-position:center;
		background-size:cover;
		`;

	}
}

Tutorial.prototype.create = function(){

	if(this.added === false){
		let tutorial = `
		<div id="tutorial" style="${this.TutorialStyle}">
			<div class="tutorial-info" style="${this.TutorialInfoStyle}">
				<h2 contenteditable="true">${this.title}</h2>
				<h4 contenteditable="true">${this.description}</h4>
				<div class="tutorial-image" style="${this.TutorialImageStyle}"></div>
			</div>
			
		</div>
		`

		let doc = new DOMParser().parseFromString(tutorial, 'text/html');
		this.workspace.appendChild(doc.body.firstChild) 

		return tutorial;
	} else{
		console.log("from create: Tutorial already added!")
		return (new Error("Tutorial already added!")) 
	}
	
}

Tutorial.prototype.onAdded = function(){
	if(this.added == false){
		this.added = true;
		return true;
	} else{
		console.log("from onAdded: Tutorial already added!")
		return (new Error("Tutorial already added!")) 
	}
}

Tutorial.prototype.onDeleted = function(){
	this.added = false;
}


Tutorial.prototype.addSection = function(){
	let section, sectionsLength, sectionPosition;
	
	sectionsLength = this.sections.length;

	if( this.sections.length == 0) {
		sectionPosition = 0;
	} else{
		sectionPosition = sectionsLength;
	}
	
	section = new Section(this.workspace, sectionPosition, this)
	// add to 
	this.sections.push(section)
}


module.exports = Tutorial;