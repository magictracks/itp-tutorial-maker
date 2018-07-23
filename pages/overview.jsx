import Header from '../components/Header'
import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'


const TutorialCard = (props) => (

	<div className="tutorialCard">

		<div className="imageContainer"></div>
		<p>{props.name}</p>
		<p className="description">{props.description}</p>
		<p className="collaborators">collaborators: {props.collaborators}</p>

		<div className="controls"> 
				
					<Link as={`/tutorial/${props._id}`} href={`/tutorial?id=${props._id}`}> 
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
				 background-image: url('${props.imageUrls[0]}');
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
				background-color:#F97CB4;
				border:2px solid black;
				cursor:pointer;
			}


		`}
		</style>
	</div>

)

const MyTutorials = (props) => {

	let tutorials = props.data.map( tutorial => {
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

const Overview = (props) => (
  <Layout>
	  <section>
    <h2> Your Tutorials </h2>
    <MyTutorials {...props}/>
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

Overview.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/api/tutorials')
  const data = await res.json()

  console.log(`Resources data fetched. Count: ${data.length}`)

  return {
    data: data
  }
}

export default Overview