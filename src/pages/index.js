import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  console.log(posts)
  // const featured = data.allMarkdownRemark.nodes
  // const featured = data.allMarkdownRemark.nodes.filter(function (el) {
  //   return el.frontmatter.featured === true;
  // })
  const featured = data.allMarkdownRemark.nodes.filter(el => el.frontmatter.featured === true)

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      {/* <Bio /> */}
      {/* <ol style={{ listStyle: `none` }} className="featured">
        {featured.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const thumbnail = post.frontmatter.thumbnail

          return (
            <li key={post.fields.slug} className="featuredItem">
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  {
                    thumbnail && (
                      <Img
                        fluid={thumbnail.src.childImageSharp.fluid}
                        alt={thumbnail.alt}
                      />
                    )
                  }
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small><sup>DATE</sup> {post.frontmatter.displayDate}</small>
                  {` `}
                  <small><sup>TYPE</sup> {post.frontmatter.type}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol> */}
      <p><i>Selected Works —</i></p>
      <div>
      <ol className="selected" style={{ listStyle: `none` }}>
        {featured.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const thumbnail = post.frontmatter.thumbnail

          return (
            <li key={post.fields.slug}>
              
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h1>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h1>
                  <div className="byline">
                    <small><sup>TYPE</sup>{` `}{post.frontmatter.type}</small>
                    {` `}
                    <small><sup>DATE</sup>{` `}{post.frontmatter.displayDate}</small>
                  </div>
                  {/* <div className="graphic">
                  {
                    thumbnail && (
                      <Img
                        fluid={thumbnail.src.childImageSharp.fluid}
                        alt={thumbnail.alt}
                      />
                    )
                  }
                  </div> */}
                </header>
                {/* <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section> */}
              </article>
            </li>
          )
        })}
      </ol>
      </div>
      <p><i>All Works —</i></p>
      <table className="other">
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th>Year</th>
        </tr>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          
          return (
            <tr key={post.fields.slug}>
              <td>
                <Link to={post.fields.slug} itemProp="url">
                  <span itemProp="headline">{title}</span>
                </Link>
              </td>
              <td>{post.frontmatter.type}</td>
              <td>{post.frontmatter.year}</td>
            </tr>
          )
        })}
      </table>
    </Layout>
  )
}

export default BlogIndex

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
