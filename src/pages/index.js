import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Hero from "../components/Hero/Hero"

const IndexPage = ({data}) => {
  const frontmatter = data.allMarkdownRemark.edges[0].node.frontmatter;
  return(
    <Layout>
      <Seo title="Home" />
      <Hero content={frontmatter.hero}/>
      
    </Layout>
  )
  }

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "Page"}}}) {
      edges {
        node {
          frontmatter {
            hero {
              headline
              subhead
              paragraph
            }
          }
        }
      }
    }
  }
`

export default IndexPage
