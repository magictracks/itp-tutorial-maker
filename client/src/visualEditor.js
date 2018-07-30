const Tutorial = require('./components/Tutorial.js');

module.exports = function(){
	let workspace = document.querySelector("#workspace");
	let createTutorialBtn =  document.querySelector("#create-tutorial-btn");
	let tutorial = new Tutorial(workspace, "hello", "im a description", "https://user-images.githubusercontent.com/3622055/42908563-4778bd04-8aaf-11e8-95c1-47e18c0643a4.png");
	
	createTutorialBtn.addEventListener("click", function(e){
		console.log("clicked")
		 tutorial.create()
		 tutorial.onAdded();
	})

}