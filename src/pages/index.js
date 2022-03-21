import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Hero from "../components/Hero/Hero"
import CreatorQuotes from "../components/CreatorQuotes/CreatorQuotes"
import ChapterOne from "../components/ChapterOne/ChapterOne"

const IndexPage = ({data}) => {
  const frontmatter = data.allMarkdownRemark.edges[0].node.frontmatter;
  console.log(frontmatter.chapterOne[0].section2_quotes.items);
  return(
    <Layout>
      <Seo title="Home" />
      <Hero content={frontmatter.hero}/>
      <ChapterOne content={frontmatter.chapterOne}/>
      <CreatorQuotes 
        color='sky-blue'
        quotes={frontmatter.chapterOne[0].section2_quotes.items}
        paddingTop='0'
        paddingBottom='140'
      />
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
              section1_legend {
                item {
                  paragraph
                  title
                }
              }
              section2_headline
              section2_subhead
              section2_chart {
                item {
                  description
                  title
                  value
                }
              }
              section2_quotes {
                items {
                  creator
                  followers
                  link
                  quote
                  avatar {
                    childImageSharp {
                      gatsbyImageData (
                        quality: 100
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                      )
                    }
                  }
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
