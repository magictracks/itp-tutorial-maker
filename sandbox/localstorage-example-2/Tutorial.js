class Tutorial{
	constructor(name, description, headerImageUrl){
		this.name = name;
		this.description = description;
		this.headerImageUrl = headerImageUrl;

		this.resources = [];
		this.sections = [];

		// initialize by sending to localStorage
		// or by getting the existing data from storage
		if(localStorage.getItem(this.name) === null){
			localStorage.setItem(this.name, JSON.stringify( [this] ) )
		} else{
			let data = JSON.parse(localStorage.getItem(this.name))[0];
			this.name = data.name;
			this.description = data.description;
			this.headerImageUrl = data.headerImageUrl;
		}

	}
}


Store.