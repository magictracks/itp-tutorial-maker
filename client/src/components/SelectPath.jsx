// This is the Link API
import Header from '../components/Header'
import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


const Index = (props) => (
  <Layout>
    
    <h1> Hello Magic Tutorial Maker! </h1>

    <h1> I'm here to...</h1>

    <div className="actions">
      <Link href="/create">
        <a><h2> 👉 Create a new tutorial!</h2></a> 
      </Link>
      <h2><strike>👉 Add an existing tutorial from Github!</strike></h2>
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


export default Index