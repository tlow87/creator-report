import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Hero from "../components/Hero/Hero"
import ChapterOne from "../components/ChapterOne/ChapterOne"

const IndexPage = ({data}) => {
  const frontmatter = data.allMarkdownRemark.edges[0].node.frontmatter;
  return(
    <Layout>
      <Seo title="Home" />
      <Hero content={frontmatter.hero}/>
      <ChapterOne content={frontmatter.chapterOne}/>
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
            chapterOne {
              intro {
                headline
                paragraph
              }
              totalAddressableMarket {
                chartKey {
                  title1
                  paragraph1
                  title2
                  paragraph2
                  title3
                  paragraph3
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
