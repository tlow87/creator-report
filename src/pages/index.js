import * as React from "react"
import { graphql } from "gatsby"

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
              paragraph
              subhead
            }
            chapterOne {
              headline
              paragraph
              section1_headline
              section1_subhead
              section1_legendOneParagraph
              section1_legendOneTitle
              section1_legendThreeParagraph
              section1_legendThreeTitle
              section1_legendTwoParagraph
              section1_legendTwoTitle
              section2_headline
              section2_subhead
            }
          }
        }
      }
    }
  }
`

export default IndexPage
