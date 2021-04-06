import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Queries = () => {

  return (
    <Layout>
      <SEO title="Flex Gap" />
      <h1 className="border-b-2">Level 5 Queries</h1>
      
      <ul>
        <li><span>prefers-reduced-motion</span></li>
        <li><span>prefers-color-scheme</span></li>
        <li><span>prefers-contrast</span></li>
        <li><span>prefers-reduced-transparency</span></li>
        <li><span>forced-colors</span></li>
        <li><span>inverted-colors</span></li>
      </ul>
    </Layout>
  )
}

export default Queries
