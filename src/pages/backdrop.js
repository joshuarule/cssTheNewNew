import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FocusWithin = () => {

  return (
    <Layout>
      <SEO title="Flex Gap" />
      <h1 className="border-b-2">Background Filter</h1>
      <div
        className="flex items-center justify-center relative"
        style={{ aspectRatio: '3 / 1' }}
      >
        <img 
          className="absolute block w-full h-full top-0 object-cover object-center"
          src="https://picsum.photos/1920/1080" 
          alt="random image"
        />
        <h1 
          className="relative z-10 p-2 text-center text-7xl"
          style={{
            backdropFilter: `blur(15px) grayscale(.1)`
          }}
        >
          This amazing offer
        </h1>
      </div>
      
    </Layout>
  )
}

export default FocusWithin
