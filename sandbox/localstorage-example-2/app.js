
window.onload = (function(){
	function createTutorial(title, description, headerImageUrl){
		return [{title, 
				description, 
				headerImageUrl,
				"type":"tutorial",
				"sections":[],
				id: "tutorial",
				editable: false
			}]
	}
	function createSection(title, description, headerImageUrl, id){
		return {title, 
				description, 
				headerImageUrl,
				"type":"section",
				"resources":[],
				"id": `section-${id}`,
				editable: false
			}
	}
	function createResource(title, description, headerImageUrl, sectionId, id){
		return {title, 
				description, 
				headerImageUrl,
				"type":"resource",
				"sectionContainerId":sectionId,
				"id": `resource-${id}`,
				editable: false
			}
	}


	class App {
		constructor(){
			this.state = {};

			this.getState = this.getState.bind(this);
			this.addSection = this.addSection.bind(this);
			this.updateState = this.updateState.bind(this);
			this.makeTutorial = this.makeTutorial.bind(this)
			this.makeSection = this.makeSection.bind(this);
			this.render = this.render.bind(this);
			// this.toggleEditable = this.toggleEditable.bind(this);

			// initialize with an empty tutorial if nothing is around
			if (localStorage.getItem("tutorial") === null ){
				localStorage.setItem("tutorial", JSON.stringify(createTutorial("i'm a title", "i'm a description", "")))
			}

			this.getState();

			document.querySelector("#addSection").addEventListener("click", e => {
				this.addSection("im a title", "im a desc", "", this.state.sections.length );
			}) 

			// document.querySelector("#editTutorial").addEventListener("click", e => {
			// 	this.toggleEditable(this.state, "h1", e)

			// }) 

		}

		// toggleEditable(obj, elem, btn){

		// 	if(obj.editable == false){
		// 		btn.target.innerHTML = "save";
		// 		obj.editable = true;
		// 		document.querySelector(elem).setAttribute("contenteditable", true)

		// 	} else {
		// 		btn.target.innerHTML = "edit";
		// 		obj.editable = false;

		// 		document.querySelector(elem).setAttribute("contenteditable", false)

		// 		this.updateState()
		// 	}

		// }


		getState() {
			this.state = JSON.parse(Object.keys(localStorage).map(name => localStorage.getItem(name)))[0]

			return this.state;
		}

		addSection(title, description, headerImageUrl, id){
			this.state.sections.push( 
				createSection(title, description, headerImageUrl, id) 
			)
			this.updateState();
		}

		addResource(title, description, headerImageUrl, sectionPosition, sectionId, id){
			this.state.sections[sectionPosition].resources.push( 
				createResource(title, description, headerImageUrl, sectionId, id) 
			)
			this.updateState();
		}

		updateState(){
			localStorage.setItem("tutorial", JSON.stringify([this.state]) )
			this.render();
		}

		makeTutorial(info){
			let template = `
				<div id="tutorial">
					<h1 class="tutorialTitle">${info.title}</h1>
					<p class="tutorialDescription">${info.description}</p>
				</div>
			`
			return parseTemplateString(template);
		}

		makeSection(info){
			let template = `
				<div id="${info.id}" class="section">
					
					<h3 class="sectionTitle">${info.title}</h3>
					<small>${info.id}</small>
					<p class="sectionDescription">${info.description}</p>

					<div class="controls">
					<button class="addResource">add resource</button>
					<button class="removeSection">remove section</button>
					</div>
					
				</div>
			`
			let templateDom = parseTemplateString(template);

			// attach event listener to that element
			templateDom.querySelector(".removeSection").addEventListener("click", e => {
				this.state.sections = this.state.sections.filter( section => {
					return section.id !== e.target.parentNode.parentElement.id
				})
				e.target.parentNode.parentElement.remove();
				this.updateState();
			})

			templateDom.querySelector(".addResource").addEventListener("click", e => {
				let sectionPosition;
				let sectionId;
				this.state.sections.forEach( (section, idx) => {
					if (section.id == e.target.parentNode.parentElement.id){
							sectionPosition = idx;
							sectionId = section.id;
					} 
				})

				console.log(sectionPosition);
				this.addResource("resource title", "resource desc", "", sectionPosition, sectionId, info.resources.length )
				this.updateState();
			})

			return templateDom;
		}

		makeResource(info){
			let template = `
				<div id="${info.id}" class="resource">
					
					<h3 class="resourceTitle">${info.title}</h3>
					<small>${info.id}</small>
					<p class="resourceDescription">${info.description}</p>
					<div class="controls">
					<button class="removeResource">remove resource</button>
					</div>
				</div>
			`
			let templateDom = parseTemplateString(template);

			templateDom.querySelector(".removeResource").addEventListener("click", e =>{
				this.state.sections.forEach( (section, idx) => {
					if(section.id == info.sectionContainerId){
						
						this.state.sections[idx].resources = this.state.sections[idx].resources.filter( resource => {
							return resource.id !== e.target.parentNode.parentElement.id
						});
					}
				})

				e.target.parentNode.parentElement.remove();
				this.updateState();
			})

			return templateDom
		}


		render(){
			let workspace = document.querySelector("#workspace")

			workspace.innerHTML = ""


			workspace.appendChild( this.makeTutorial(this.state) )

			this.state.sections.forEach( section => {
				workspace.appendChild( this.makeSection(section) )


				section.resources.forEach( resource => {
					let sectionDom = document.querySelector(`#${section.id}`)
					sectionDom.appendChild(this.makeResource(resource))
				})

			})


			
		}
	}

	/* ************************* */
	// TEMP: set state
	// get initial state

	let app = new App();
	// app.addSection("hello", "world", "")
	app.render();



	console.log(app.getState())
	// console.log(state)
})();






	