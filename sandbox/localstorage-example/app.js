// Get View Class
let thing1, thing2, thing3;

window.onload = (function(){
	thing1 = new View(document.querySelector("#view1"), document.querySelector("#button1"), "yes", "test1")
	thing2 = new View(document.querySelector("#view2"), document.querySelector("#button2"), "maybe", "test2")
	thing3 = new View(document.querySelector("#view3"), document.querySelector("#button3"), "no", "test3")	

	// thing1.increment();
	console.log(localStorage)
})();






