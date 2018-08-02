
window.onload = (function(){
	function createTutorial(title, description, headerImageUrl){
		return [{title, 
				description, 
				headerImageUrl,
				"type":"tutorial",
				"sections":[],
				id: "tutorial"
			}]
	}
	function createSection(title, description, headerImageUrl, id){
		return {title, 
				description, 
				headerImageUrl,
				"type":"section",
				"resources":[],
				"id": `section-${id}`
			}
	}
	function createResource(title, description, headerImageUrl, sectionId, id){
		return {title, 
				description, 
				headerImageUrl,
				"type":"resource",
				"sectionContainerId":sectionId,
				"id": `resource-${id}`
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

			// initialize with an empty tutorial if nothing is around
			if (localStorage.getItem("tutorial") === null ){
				localStorage.setItem("tutorial", JSON.stringify(createTutorial("i'm a title", "i'm a description", "")))
			}

			this.getState();

			document.querySelector("#addSection").addEventListener("click", e => {
				this.addSection("im a title", "im a desc", "", this.state.sections.length );
			}) 

		}


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
					<h1>${info.title}</h1>
					<p>${info.description}</p>
				</div>
			`
			return parseTemplateString(template);
		}

		makeSection(info){
			let template = `
				<div id="${info.id}" class="section">
					<button class="removeSection">remove section</button>
					<h3>${info.title}</h3>
					<small>${info.id}</small>
					<p>${info.description}</p>
					<button class="addResource">add resource</button>
				</div>
			`
			let templateDom = parseTemplateString(template);

			// attach event listener to that element
			templateDom.querySelector(".removeSection").addEventListener("click", e => {
				this.state.sections = this.state.sections.filter( section => {
					return section.id !== e.target.parentElement.id
				})
				e.target.parentElement.remove();
				this.updateState();
			})

			templateDom.querySelector(".addResource").addEventListener("click", e => {
				let sectionPosition;
				let sectionId;
				this.state.sections.forEach( (section, idx) => {
					if (section.id == e.target.parentElement.id){
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
					<button class="removeResource">remove resource</button>
					<h3>${info.title}</h3>
					<small>${info.id}</small>
					<p>${info.description}</p>
				</div>
			`
			let templateDom = parseTemplateString(template);

			templateDom.querySelector(".removeResource").addEventListener("click", e =>{
				this.state.sections.forEach( (section, idx) => {
					if(section.id == info.sectionContainerId){
						
						this.state.sections[idx].resources = this.state.sections[idx].resources.filter( resource => {
							return resource.id !== e.target.parentElement.id
						});
					}
				})

				e.target.parentElement.remove();
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






	