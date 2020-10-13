import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { siteMetadata } from '../../gatsby-config';

const getData = graphql`
query FirstQuery {
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
const Header = () => {
    const {
        site: {
            siteMetadata: {
                title,
                person: { name },
            }, }, } = useStaticQuery(getData)
    

    return (
        <div>
            <h1>title: {title} </h1> 
            <h1>name: {name} </h1> 
        </div>
    )
}

export default Header
