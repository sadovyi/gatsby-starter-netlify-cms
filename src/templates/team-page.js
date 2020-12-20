import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/Layout";

const TeamPageTemplate = ({image, title, heading, description}) => {
  return (
    <div>
      <h1>test</h1>
      <h2>{title}</h2>
      <h3>{heading}</h3>
      <h4>{description}</h4>
    </div>
  )
}

const TeamPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
      <TeamPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
      />
    </Layout>
  )

}

export default TeamPage

export const teamPageQuery = graphql`
    query TeamPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                heading
                description
            }
        }
    }
`