import React from "react"
import Layout from "../components/layout"
//import SEO from "../components/seo" - removed as I ddin't seem need. If we think it is I grabbed this code from ELC blog file which was based 
// off the Gatsby Starter Default template

const NotFoundPage = () => (
  <Layout>
    <h1>404: NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage