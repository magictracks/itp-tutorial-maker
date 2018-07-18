// This is the Link API
import Header from '../components/Header'
import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import CreateProjectForm from '../components/CreateProjectForm'



const Create = (props) => (
  <Layout>
    
    <h1> Create New Tutorial!</h1>

    <h2> Let's get started...</h2>

    <div className="actions">
      <CreateProjectForm />
    </div>

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

          a {
            text-decoration:none;
          }


          .actions{
            margin:30px 30px 0px 0px;
          }
        `}</style>
  </Layout>

)


export default Create