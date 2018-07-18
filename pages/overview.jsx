import Header from '../components/Header'
import Layout from '../components/MyLayout'
import Link from 'next/link'

const data = [
		{
			name: "Arduino Blinky LED Light",
			repoName: "arduino-blinky-led-light",
			createdBy:"joeyklee",
			description:"Lorem ipsum dolor sit amet, epicuri maluisset ei eam. Illud solet singulis vix eu, fastidii explicari ex vim. Ad diam semper viderer vis, ius lorem dicta pertinacia ad. Meis instructior mel ut, ea numquam debitis qui, ad summo congue gloriatur per. Ex vim elit aliquando disputationi, at movet dicam dolores eam. Dico habemus te est, eu vide verterem urbanitas vix.",
			collaborators:"@shiffman",
			imageUrl:"https://picsum.photos/g/200/300/?image=24",
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
			repoName: "arduino-awesomeness",
			createdBy:"joeyklee",
			description:"Lorem ipsum dolor sit amet, epicuri maluisset ei eam. Illud solet singulis vix eu, fastidii explicari ex vim. Ad diam semper viderer vis, ius lorem dicta pertinacia ad. Meis instructior mel ut, ea numquam debitis qui, ad summo congue gloriatur per. Ex vim elit aliquando disputationi, at movet dicam dolores eam. Dico habemus te est, eu vide verterem urbanitas vix.",
			collaborators:"@vanevery",
			imageUrl:"https://picsum.photos/g/200/300/?image=100",
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
			repoName: "animated-typography",
			createdBy:"joeyklee",
			description:"Lorem ipsum dolor sit amet, epicuri maluisset ei eam. Illud solet singulis vix eu, fastidii explicari ex vim. Ad diam semper viderer vis, ius lorem dicta pertinacia ad. Meis instructior mel ut, ea numquam debitis qui, ad summo congue gloriatur per. Ex vim elit aliquando disputationi, at movet dicam dolores eam. Dico habemus te est, eu vide verterem urbanitas vix.",
			collaborators:"@shiffman",
			imageUrl:"https://picsum.photos/g/200/300/?image=135",
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
		<p className="description">{props.description}</p>
		<p className="collaborators">collaborators: {props.collaborators}</p>

		<div className="controls"> 
				
					<Link as={`/p/${props.repoName}`} href={`/post?title=${props.repoName}`}> 
							<button><a>Edit/Update</a></button> 
					</Link>
				
		</div>

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

			.tutorialCard .controls{
				display:flex;
				width:100%;
				flex-direction:column;
				align-items:center;
			}

			.tutorialCard .description{
				max-height:160px;
				overflow-y:scroll;
			}
			.tutorialCard .collaborators{
				max-height:30px;
				overflow-y:scroll;
			}

			.tutorialCard .imageContainer{
				width:100%;
				 background-image: url('${props.imageUrl}');
				 height:150px;
				 background-position:center;
				 background-repeat:none;
				 background-size:cover;
			}

			.tutorialCard button{
				width:200px;
				height:20px;
				border-radius:0px;
				background:none;
				background-color:#F4E68E;
				border:2px solid black;
				cursor:pointer;
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
	  <section>
    <h2> Your Tutorials </h2>
    <MyTutorials />
    </section>

    <section>
    <h2> Discover Other Tutorials </h2>
    </section>

    <style jsx>{`
          h1{
          	color: black;
            font-size:60px;
            margin:10px 0px 10px 0px;
          }

          h2{
            color: black;
            font-size:48px;
            margin:10px 0px 10px 0px;
          }

          section{
          	margin-bottom:40px;
          }
        `}</style>
  </Layout>

)

export default Overview