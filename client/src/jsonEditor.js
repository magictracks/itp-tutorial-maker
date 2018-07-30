const beautify = require('js-beautify').js;
const CodeMirror = require("codemirror")
require("codemirror/mode/javascript/javascript.js")
require("codemirror/addon/edit/matchbrackets.js")
require("codemirror/addon/selection/active-line.js")

module.exports = function(){

	let editor = CodeMirror.fromTextArea(document.getElementById("code"), {
	  lineNumbers: true,
	  styleActiveLine: true,
	  matchBrackets: true,
	  theme: "monokai",
	  mode: "application/ld+json",
    lineWrapping: true
	});

	editor.setSize("100%", "100%");

	const dummyTextJson = {
  "title":"i'm a title",
  "description":"i'm a description"
	}

	let dummyText = beautify(JSON.stringify(dummyTextJson), { indent_size: 2, space_in_empty_paren: true })

	editor.replaceRange(dummyText, {line: Infinity});

	editor.on("change", function(e){
		console.log(e)
	})

}