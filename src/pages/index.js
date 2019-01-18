import React from 'react'
import { Link } from 'gatsby'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Wrap from '../components/wrap'

import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = ({data}) => {
  
// console.log(data)
return(
  // <Layout data={data}>
   
  // </Layout>
  <Wrap data={data}/>
)
}




export const query = graphql`
  query {
    allContentfulPortfolio {
      edges {
        node {
          title
          tags
          image {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
    
  }
`
export default IndexPage


