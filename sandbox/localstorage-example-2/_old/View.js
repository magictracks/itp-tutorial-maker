class View{
	constructor(viewDom, buttonDom, item, name){
		this.viewDom = viewDom;
		this.buttonDom = buttonDom;
		this.item = item;
		this.counter = 0;
		this.name = name;
		this.list = [];

		// initialize by sending to localStorage
		// or by getting the existing data from storage
		if(localStorage.getItem(this.name) === null){
			localStorage.setItem(this.name, JSON.stringify( [this] ) )
		} else{
			let data = JSON.parse(localStorage.getItem(this.name))[0];
			this.list = data.list;
			this.counter = data.counter;
			this.render();
		}

		this.buttonDom.addEventListener("click", function(e){
			this.increment();
			this.addToList();
			
			console.log(localStorage.getItem(this.name))
		}.bind(this))

	}
}

View.prototype.update = function(){
	localStorage.setItem(this.name, JSON.stringify([this]) )
	this.render();
}

View.prototype.increment = function(){

	this.counter += 1;
	this.update();
}

View.prototype.addToList = function(){
	let thing = { x:Math.round(Math.random()*200 ), y: Math.round(Math.random()*30 ) }
	this.list.push( thing );
	this.update();
}

View.prototype.render = function(){
	let data = JSON.parse(localStorage.getItem(this.name))[0];
	console.log("render!")
	// clear the dom
	this.viewDom.innerHTML = "";

	if(data.list.length > 0){

		data.list.forEach(item => {

			let dataPoint = document.createElement("div")
			dataPoint.setAttribute("style", `position:absolute; width:10px; height:10px; border-radius:50%; top:${item.y}px; left:${item.x}px; background-color:black`)
			this.viewDom.appendChild(dataPoint)
		});

	}

}
