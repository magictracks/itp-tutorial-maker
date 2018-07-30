class Tutorial{
	constructor(workspace, title, description, headerImageUrl){
		this.workspace = workspace;
		this.title = title;
		this.description = description;
		this.headerImageUrl = headerImageUrl;
		this.added = false;

		this.TutorialStyle = `
		border: 2px solid black;
		display: flex;
		flex-direction:row;
		`;
		this.TutorialInfoStyle = `
		border: 2px solid black;
		display: flex;
		flex-direction:column;
		width:60%;
		height:100px;
		`;
		this.TutorialImageStyle = `
		border: 2px solid black;
		height: 100px;
		width:40%;
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
			</div>
			<div class="tutorial-image" style="${this.TutorialImageStyle}"></div>
		</div>
		`

		this.workspace.innerHTML +=  tutorial;
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


// Tutorial.prototype.update = function(){
	
// }

// Tutorial.prototype.display = function(){

// }



module.exports = Tutorial;