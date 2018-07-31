class Resource {
	constructor(workspace, position, context){

		this.context = context;
		this.workspace = workspace;
		this.headerImageUrl = "https://user-images.githubusercontent.com/3622055/42908563-4778bd04-8aaf-11e8-95c1-47e18c0643a4.png";
		this.title = "resource title"
		this.description = "resource description"
		this.position = position;


		this.ResourceStyle = `
		border: 2px solid black;
		display: flex;
		flex-direction:row;
		width:90%;
		`;
		this.ResourceInfoStyle = `
		border: 2px solid black;
		display: flex;
		flex-direction:column;
		width:60%;
		height:100px;
		`;
		this.ResourceImageStyle = `
		border: 2px solid black;
		height: 100px;
		width:40%;
		background-image:url(${this.headerImageUrl});
		background-position:center;
		background-size:cover;
		`;


	}
}

Resource.prototype.create = function(){

		let resource = `
		<div style="${this.ResourceStyle}">
			<div class="resource-info" style="${this.ResourceInfoStyle}">
				<h2 contenteditable="true">${this.title}</h2>
				<h4 contenteditable="true">${this.description}</h4>
			</div>
			<div class="resource-image" style="${this.ResourceImageStyle}"></div>
		</div>
		`


		// this.workspace.innerHTML +=  resource;
		// return resource;

		let doc = new DOMParser().parseFromString(resource, 'text/html');
		this.workspace.appendChild(doc.body.firstChild) 
	
}


module.exports = Resource;




		