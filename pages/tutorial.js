import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'


// const Content = withRouter((props) => (
// 	<div>
// 		{console.log(props)}
// 		<h1>{props.router.query.title}</h1>
// 		<p>This is the blog post content.</p>
// 	</div>
// ))


const Tutorial = (props) => (
    <Layout>
      <div className="tutorial-container">

      <div className="tutorial">


        <div className="tutorial-info">
         <h1>{props.resource.name}</h1>
         <p>created by: @{props.resource.createdBy} | collaborators: {props.resource.collaborators.toString()}</p>
         <p className="tutorial-info-desc">{props.resource.description}</p>
        </div>
       
        <div className="sections">
          {
            props.resource.tutorial.map(section => (
              
                <div className="section">
                  <div className="section-header">
                    <h3>{section.name}</h3>
                    <p>{section.description}</p>
                  </div>
                  
                  {
                    section.resources.map(resource => (
                      <div className="resource">

                        <div className="resource-info">
                          <h4>{resource.name}</h4>
                          <p>{resource.description}</p>
                          <p>{resource.url} </p>
                        </div>
                        <div className="resource-image"></div>
                      </div>
                    ))
                  }

                  <button className="new-resource-btn">
                    add new resource
                  </button>
                </div>
            ))
          }

          <div className="new-section-container">
            <button className="new-section-btn">
                      add new section
            </button>
          </div>
        </div>
       </div>
       </div>
       
       <style jsx>{`

            *{
             box-sizing:border-box;
            }

            h1, h2, h3{
              margin:2px 0px 4px 0px;
            }
            p{
              margin:2px 0px 2px 0px;
            }
       		.tutorial-container{
            width:100%;
            height:100%;
            display: flex;
            flex-direction:column;
            align-items: center;
          }

          .tutorial-info{
            padding:10px;
            border:2px solid black;
          }
          .tutorial-info-desc{
            margin:10px 0px;
          }
          

          .tutorial{
            width:100%;
            height:100%;
            max-width:800px;
            padding: 10px;
            border: 2px solid black;
            display:flex;
            flex-direction: column;
          }

          .sections{
            width:100%;
            margin:4px 0px 10px 0px;
          }
          .section{
            width:100%;
            margin:15px 0px 15px 0px;
            border: 2px solid black;
            padding: 10px;
            background-color: #83428F;
          }

          .sections .new-section-btn{
            width:100%;
            height:90px;
            border:2px solid black;
            background-color:#F97CB4;
            font-size:24px;
            font-weight:bold;
          }

          .section .new-resource-btn{
            width:100%;
            height:30px;
            border:2px solid black;
            background-color:#33CFF8;
          }

          .new-section-container{
            width:100%;
          }
          .section-header{
            width:100%;
            display:flex;
            flex-direction:column;
            background-color:#F97CB4;
            height:90px;
            padding: 10px 10px 10px 10px;
            border: 2px solid black;
          }

          .resource{
            width:100%;
            height:200px;
            display:flex;
            flex-direction:row;
            margin:2px 0px 2px 0px;
            border: 2px solid black;
            background-color: white;
          }

          .resource .resource-image{
            width: 25%;
            height:100%;
            background: url("https://user-images.githubusercontent.com/3622055/42908563-4778bd04-8aaf-11e8-95c1-47e18c0643a4.png");
            background-position:center;
            background-repeat:none;
            background-size:cover;
            border-left: 2px solid black;
          }

          .resource .resource-info{
            width: 75%;
            height:100%;
            padding: 10px 10px 10px 10px;
          }
       	`}</style>
    </Layout>
)

Tutorial.getInitialProps = async function(context){
	const {id} = context.query

	const res = await fetch(`http://localhost:3000/api/tutorials/id/${id}`)
	const resource = await res.json()

  return { resource }
}

export default Tutorial