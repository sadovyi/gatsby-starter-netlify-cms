import React from 'react'
import {graphql} from "gatsby"

const TestPageTemplate = () => {
  return (
    <h1>test</h1>
  )
}

const TestPage = ({data}) => {
  const { frontmatter } = data.markdownRemark
}

export default TestPage

export const testPageQuery = graphql`
    query TestPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
            }
        }
    }
`