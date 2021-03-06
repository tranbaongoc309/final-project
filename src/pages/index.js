import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <h2>This is my blog!</h2>
    <p> Need an instructor? <Link to="/contact">Click here!</Link></p>
  </Layout>
)

export default IndexPage
