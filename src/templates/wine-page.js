import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const BlogPostTemplate = ({
  wineName,
  description,
}) => {

  return (
    <div>
      {wineName}
      <p>{description}</p>
    </div>
  );
}

BlogPostTemplate.propTypes = {
  description: PropTypes.string,
  wineName: PropTypes.string,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        description={post.frontmatter.description}
        tiwineNametle={post.frontmatter.wineName}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query Wine($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        description
        wineName
      }
    }
  }
`
