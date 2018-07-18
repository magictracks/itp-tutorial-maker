import Header from '../components/Header'
import Layout from '../components/MyLayout'

const data = [
		{
			name: "Arduino Blinky LED Light",
			description:"Lorem ipsum dolor sit amet, epicuri maluisset ei eam. Illud solet singulis vix eu, fastidii explicari ex vim. Ad diam semper viderer vis, ius lorem dicta pertinacia ad. Meis instructior mel ut, ea numquam debitis qui, ad summo congue gloriatur per. Ex vim elit aliquando disputationi, at movet dicam dolores eam. Dico habemus te est, eu vide verterem urbanitas vix.",
			collaborators:"@shiffman",
			imageUrl:"https://picsum.photos/200/300",
			tutorial:[
				{
					section: 0,
					name: "Section 0: Concepts",
					description: "Concepts about x, y, z",
					resources: [
						{
							name:"Arduino and Physical Computing Terms",
							description: "terms for getting started with physical computing with arduino",
							url: "https://github.com"
						},
						{
							name:"Shop Safety",
							description: "Shop safety course from ITP",
							url: "https://github.com"
						},
						{
							name:"How to use a volt meter",
							description: "How to use a volt meter",
							url: "https://github.com"
						},
					]
				},
				{
					section: 1,
					name: "Section 1: Wiring",
					description: "Concepts about x, y, z",
					resources: [
						{
							name:"How to use a breadboard",
							description: "Using a breadboard is great for doing ...",
							url: "https://github.com"
						}
					]
				},
				{
					section: 2,
					name: "Section 2: Coding in Arduino",
					description: "Concepts about x, y, z",
					resources: [
						{
							name:"Blinky light code",
							description: "Uploading sketches to arduino ...",
							url: "https://github.com"
						}
					]
				}
			]
		},

		{
			name: "Arduino Awesomeness",
			description:"Lorem ipsum dolor sit amet, epicuri maluisset ei eam. Illud solet singulis vix eu, fastidii explicari ex vim. Ad diam semper viderer vis, ius lorem dicta pertinacia ad. Meis instructior mel ut, ea numquam debitis qui, ad summo congue gloriatur per. Ex vim elit aliquando disputationi, at movet dicam dolores eam. Dico habemus te est, eu vide verterem urbanitas vix.",
			collaborators:"@vanevery",
			imageUrl:"https://picsum.photos/200/300",
			tutorial:[
				{
					section: 0,
					name: "Section 0: Concepts",
					description: "Concepts about x, y, z",
					resources: [
						{
							name:"Arduino and Physical Computing Terms",
							description: "terms for getting started with physical computing with arduino",
							url: "https://github.com"
						},
						{
							name:"Shop Safety",
							description: "Shop safety course from ITP",
							url: "https://github.com"
						},
						{
							name:"How to use a volt meter",
							description: "How to use a volt meter",
							url: "https://github.com"
						},
					]
				},
				{
					section: 1,
					name: "Section 1: Wiring",
					description: "Concepts about x, y, z",
					resources: [
						{
							name:"How to use a breadboard",
							description: "Using a breadboard is great for doing ...",
							url: "https://github.com"
						}
					]
				},
				{
					section: 2,
					name: "Section 2: Coding in Arduino",
					description: "Concepts about x, y, z",
					resources: [
						{
							name:"Blinky light code",
							description: "Uploading sketches to arduino ...",
							url: "https://github.com"
						}
					]
				}
			]
		},
		{
			name: "Animated Typography",
			description:"Lorem ipsum dolor sit amet, epicuri maluisset ei eam. Illud solet singulis vix eu, fastidii explicari ex vim. Ad diam semper viderer vis, ius lorem dicta pertinacia ad. Meis instructior mel ut, ea numquam debitis qui, ad summo congue gloriatur per. Ex vim elit aliquando disputationi, at movet dicam dolores eam. Dico habemus te est, eu vide verterem urbanitas vix.",
			collaborators:"@joeyklee",
			imageUrl:"https://picsum.photos/200/300",
			tutorial:[
				{
					section: 0,
					name: "Section 0: Concepts",
					description: "Concepts about x, y, z",
					resources: [
						{
							name:"Arduino and Physical Computing Terms",
							description: "terms for getting started with physical computing with arduino",
							url: "https://github.com"
						},
						{
							name:"Shop Safety",
							description: "Shop safety course from ITP",
							url: "https://github.com"
						},
						{
							name:"How to use a volt meter",
							description: "How to use a volt meter",
							url: "https://github.com"
						},
					]
				},
				{
					section: 1,
					name: "Section 1: Wiring",
					description: "Concepts about x, y, z",
					resources: [
						{
							name:"How to use a breadboard",
							description: "Using a breadboard is great for doing ...",
							url: "https://github.com"
						}
					]
				},
				{
					section: 2,
					name: "Section 2: Coding in Arduino",
					description: "Concepts about x, y, z",
					resources: [
						{
							name:"Blinky light code",
							description: "Uploading sketches to arduino ...",
							url: "https://github.com"
						}
					]
				}
			]
		}
	]


const TutorialCard = (props) => (

	<div className="tutorialCard">

		<div className="imageContainer"></div>
		<p>{props.name}</p>
		<p>{props.description}</p>
		<p>collaborators: {props.collaborators}</p>


		<style jsx>{`

			*{
				box-sizing:border-box;
			}

			.tutorialCard{
				width: 300px;
				height: 500px;
				border: 2px solid black;
				display: flex;
				flex-direction: column;
				padding:10px;
				margin: 4px;
			}

			.tutorialCard .imageContainer{
				width:100%;
				background-image: url(${props.imageUrl});
				 background-position:center;
				 background-repeat:none;
				 background-size:cover;
			}


		`}
		</style>
	</div>

)

const MyTutorials = (props) => {

let tutorials = data.map( tutorial => {
				return <TutorialCard {...tutorial} />
			})

return (
		<div id="myTutorials"> 

			{tutorials}

			<style jsx>{`

				#myTutorials{
					width:100%;
					height: 100%;
					display:flex;
					flex-direction: row;
					flex-wrap: wrap;
				}
				`}
				</style>
		</div>

	)	

}

// const DiscoverTutorials = (props) => {

// 	return (
		
// 	)	
// }

const Overview = () => (
  <Layout>
    <h1> Your Tutorials </h1>
    <MyTutorials />

    <h1> Discover Other Tutorials </h1>
    

    <style jsx>{`
          h1{
          	color: purple
          }
        `}</style>
  </Layout>

)

export default Overview