import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FocusWithin = () => {

  return (
    <Layout>
      <SEO title="Flex Gap" />
      <h1 className="border-b-2">Max / Min / Clamp</h1>
      
      <h3>Min</h3>
      <div 
        className="box"
        style={{width: 'min(100%, 1000px)'}}
      ></div>
      
      <h3 className="mt-32">Max</h3>
      <div 
        className="box"
        style={{width: 'max(100%, 1000px)'}}
      ></div>

      <h3 className="mt-32">Clamp</h3>
      <p style={{fontSize: 'clamp(1.5rem, 5vw, 3rem)'}}>The dog jumps over the moon</p>
    
    </Layout>
  )
}

export default FocusWithin
