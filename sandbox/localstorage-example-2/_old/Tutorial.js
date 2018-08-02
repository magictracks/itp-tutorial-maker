class Tutorial{
	constructor(viewDom, name, title, description, headerImageUrl){
		this.name = name;
		this.type = "tutorial";
		this.title = title;
		this.description = description;
		this.headerImageUrl = headerImageUrl;
		this.viewDom = viewDom;

		this.sections = [];

		this.addSectionBtn = document.createElement("button")
		this.addSectionBtn.innerHTML = "add section"
		this.addSectionBtn.addEventListener("click", function(){

			console.log('add section!')
			// update and render
			this.update();
		}.bind(this))

		// initialize by sending to localStorage
		// or by getting the existing data from storage
		if(localStorage.getItem(this.name) === null){
			localStorage.setItem(this.name, JSON.stringify( [this] ) )
			console.log("new instance!")
			this.render();

		} else{
			let data = getDataFromStorage(this.name);
			this.name = data.name;
			this.title = data.title;
			this.description = data.description;
			this.headerImageUrl = data.headerImageUrl;
			this.sections = data.sections;
			console.log("pulling from ls!")
			// render!
			this.render();
		}

	}
}


Tutorial.prototype.update = function(){
	// console.log(document.querySelector("#tutorial h1").textContent)

	localStorage.setItem(this.name, JSON.stringify([this]) )
	this.render();
}

Tutorial.prototype.render = function(){
	let data = getDataFromStorage(this.name);	
	// clear the dom
	this.viewDom.innerHTML = "";

	let tutorialTemplate = `
	<div id="tutorial">
		<h1 contenteditable="true">${this.title}</h1>
		<h2 contenteditable="true">${this.description}</h2>
		<img src="">
		<div id="sections">
		</div>
	</div>
	`;

	let parsedTemplate = parseTemplateString(tutorialTemplate)
  parsedTemplate.appendChild(this.addSectionBtn)


  // add all the things to the page
  this.viewDom.appendChild(parsedTemplate)


	console.log("render!")
}










