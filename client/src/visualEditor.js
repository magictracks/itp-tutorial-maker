const Tutorial = require('./components/Tutorial.js');
// const Section = require('./components/Section.js');
const Resource = require('./components/Resource.js');

module.exports = function() {
	let workspace = document.querySelector("#workspace");
	let createTutorialBtn = document.querySelector("#create-tutorial-btn");
	let createSectionBtn = document.querySelector("#create-section-btn");
	let createResourceBtn = document.querySelector("#create-resource-btn");

	let tutorial;

	createTutorialBtn.addEventListener("click", function(e) {
		console.log("clicked")

		if (tutorial == undefined) {
			tutorial = new Tutorial(workspace,
				"I'm a title",
				"I'm a description",
				"https://user-images.githubusercontent.com/3622055/42908563-4778bd04-8aaf-11e8-95c1-47e18c0643a4.png");
		}

		if (tutorial.added == false) {
			tutorial.create()
			tutorial.onAdded();
		} else {
			console.log("already added")
		}


	})


	createSectionBtn.addEventListener("click", function(e) {
		tutorial.addSection();
		let latestSection = tutorial.sections.length - 1;
		tutorial.sections[latestSection].create();

	});



}