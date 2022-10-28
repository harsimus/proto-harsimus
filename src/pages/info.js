import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogInfo = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  console.log(posts)
  // const featured = data.allMarkdownRemark.nodes
  // const featured = data.allMarkdownRemark.nodes.filter(function (el) {
  //   return el.frontmatter.featured === true;
  // })
  const featured = data.allMarkdownRemark.nodes.filter(el => el.frontmatter.featured === true)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Info" />
      <p><i>Info —</i></p>
      <div>
        <section>
            <p>Michael C. Martinez is the 739th best Remy player in Street Fighter III: 3rd Strike.</p>
        </section>
      </div>
    </Layout>
  )
}

export default BlogInfo

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          displayDate
          year
          title
          type
          description
          featured
          thumbnail {
            src{
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
      }
    }
  }
`