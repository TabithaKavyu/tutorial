import React from 'react'
import Header from "../examples/Header"
import Layout from '../components/layout'
import { graphql }  from "gatsby"
const examples = ({data}) => {
    const { site: { siteMetadata: { author } } } = data

    return (
        <div>
            <Layout>
                <p>Hello from my examples</p>
            <Header />
                <h5>author: {author}</h5>
            </Layout> 
            
        </div>
    )
}
export const data = graphql`
query MyQuery {
    site {
      siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`
export default examples
