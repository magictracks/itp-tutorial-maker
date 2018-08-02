function getDataFromStorage(name){
	return JSON.parse(localStorage.getItem(name))[0];
}

function parseTemplateString(templateString){
		const parser = new DOMParser();

		let output = parser.parseFromString(templateString, "text/html");

		return output.body.firstChild

}
