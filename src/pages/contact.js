import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


const Contact = () => {
    return (
        <Layout>
          <SEO title="Contact"/>
          <h1> Contact</h1>
          <p>This is my Contact page!</p>
          <Link to="/"> Go home</Link>

        </Layout>
    )
}

export default Contact