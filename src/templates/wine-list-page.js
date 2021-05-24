import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import WinesList from '../components/WinesList'

export const WinesListTemplate = ({
  title,
  description,
  lang
}) => (

  <div className="content">
  {console.log(`🦄`, lang)}
    <div
    //   className="full-width-image-container margin-top-0"
    //   style={{
    //     backgroundImage: `url(${
    //       !!image.childImageSharp ? image.childImageSharp.fluid.src : image
    //     })`,
    //   }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#f40',
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <WinesList lang={lang} />
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <p>{description}</p>
            </div>
          </div>
    §   </div>
      </div>
    </section>
  </div>
)

WinesListTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  
}

const WinesListPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
console.log(`📲`, frontmatter.lang)
  return (
    <Layout>
      <WinesListTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        lang={frontmatter.lang}
      />
    </Layout>
  )
}

WinesListPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default WinesListPage

export const winesPageQuery = graphql`
  query WinesListPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        lang
      }
    }
  }
`
