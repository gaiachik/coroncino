
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, Link, graphql } from 'gatsby'

export default function WinesList(props) {
  const data = useStaticQuery(graphql`
      query WinesList {
        allMarkdownRemark(
            filter: {frontmatter: {templateKey: {eq: "wine-page"}}}
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        lang
                        templateKey
                        wineName
                        description
                    }
                }
            }
        }
    }
  `)
  const { edges: wines } = data.allMarkdownRemark

  return (
    <div className="columns is-multiline">
        <ul>
          {wines &&
            wines
              .filter(
                ({ node: wine }) => wine.frontmatter.lang === props.lang
              )
              .map(({ node: wine }) => (
                <li>
                  <h2>
                    <Link to={wine.fields.slug}>
                      {wine.frontmatter.wineName}
                    </Link>
                    {wine.frontmatter.description && (
                      <p>description: {wine.frontmatter.description}</p>
                    )}
                  </h2>
                </li>
              ))}
        </ul>
      </div>
  )
}


WinesList.propTypes = {
  lang: PropTypes.string,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
