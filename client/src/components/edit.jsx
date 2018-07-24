// This is the Link API
import Header from '../components/Header'
import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'



const Edit = (props) => (
  <Layout>
    <h1>Edit Your Tutorial!</h1>

    <h2>Add Sections and Resources...</h2>


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
        `}</style>
  </Layout>

)

export default Edit