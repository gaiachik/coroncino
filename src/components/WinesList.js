
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class WinesList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: wines } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        <ul>
          {wines &&
            wines.map(({ node: wine }) => (
              <li>
                <h2>
                  <Link
                    to={wine.fields.slug}
                  >
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
    );
  }
}

WinesList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
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
                        templateKey
                        wineName
                        description
                    }
                }
            }
        }
    }

    `}
    render={(data, count) => <WinesList data={data} count={count} />}
  />
)
