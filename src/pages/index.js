import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Hero from "../components/Hero/Hero"
import ChapterOne from "../components/ChapterOne/ChapterOne"
import ChapterTwo from "../components/ChapterTwo/ChapterTwo"
import ChapterThree from "../components/ChapterThree/ChapterThree"
import Footer from "../components/Footer/Footer"

const IndexPage = ({data}) => {
  const frontmatter = data.allMarkdownRemark.edges[0].node.frontmatter;
  return(
    <Layout>
      <Seo title="Home" />
      <Hero content={frontmatter.hero}/>
      <ChapterOne content={frontmatter.chapterOne}/>
      <ChapterTwo content={frontmatter.chapterTwo}/>
      <ChapterThree content={frontmatter.chapterThree}/>
      <Footer content={frontmatter.footer}/>
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
            chapterTwo {
              headline
              paragraph
              section1_tables {
                table {
                  headline
                  footnote
                  subhead
                  paragraph
                  image {
                    childImageSharp {
                      gatsbyImageData (
                        quality: 100
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                      )
                    }
                  }
                  item {
                    description
                    statistic
                  }
                }
              }
              section2_chart {
                headline
                subhead
                legend {
                  color
                  value
                }
                chartBox {
                  statistic
                  paragraph
                  color
                }
              }
              section2_tables {
                table {
                  headline
                  item {
                    description
                    statistic
                  }
                }
              }
              quotes {
                items {
                  quote
                  link
                  creator
                  followers
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
              section3_headline
              section3_subhead
            }
            chapterThree {
              headline
              paragraph
              tipOne {
                headline
                paragraph
              }
              pieChartsOne {
                footnote
                paragraph
                stat
                image {
                  publicURL
                }
              }
              tipTwo {
                headline
                paragraph
              }
              pieChartsTwo {
                footnote
                paragraph
                stat
                image {
                  publicURL
                }
              }
              impactTable {
                eyebrow
                headline
                tableColumn {
                  title
                }
                tableRows {
                  statA
                  statB
                  title
                }
              }
              tipThree {
                headline
                paragraph
              }
              biggestPlatform {
                text {
                  stat
                  paragraph
                  footnote
                }
                image {
                  publicURL
                }
              }
              quotes {
                items {
                  quote
                  link
                  creator
                  followers
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
            footer {
              headline
              paragraph
              subhead
              image {
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
`

export default IndexPage
