// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

type PageContext = {
  currentPage: number
  numPages: number
}
type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const About = ({
  data,
  location,
  pageContext,
}: PageProps<Data, PageContext>) => {
  const siteTitle = data.site.siteMetadata.title


  return (
    <Layout location={location} title={siteTitle} type="about">
      <SEO title="About" />
      <h3
        style={{
          marginBottom: rhythm(1 / 3),
        }}
      >
        Coming Soon!
      </h3>
      <p className="pt-10">
        This page is under construction. Please wait for it :D 
      </p>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query aboutPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`