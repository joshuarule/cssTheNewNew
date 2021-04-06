import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {

  return (
    <Layout>
      <SEO title="Grid" />
      <h1 className="border-b-2">Scroll Snap</h1>

      <div 
        className="flex border-2 w-96 h-36"
        style={{
          overflowX: 'auto',
          overscrollBehaviorX: 'contain',
          scrollSnapType: 'x mandatory',
          display: 'grid',
          gridAutoFlow: 'column',
          gap: '1rem',
        }}
      >
        <div style={{scrollSnapAlign: 'start'}} className="w-96 flex-grow-0 bg-gray-300 w-100 text-center">1</div>
        <div style={{scrollSnapAlign: 'start'}} className="w-96 flex-grow-0 bg-gray-400 w-100 text-center">2</div>
        <div style={{scrollSnapAlign: 'start'}} className="w-96 flex-grow-0 bg-gray-500 w-100 text-center">3</div>
        <div style={{scrollSnapAlign: 'start'}} className="w-96 flex-grow-0 bg-gray-500 w-100 text-center">4</div>
      </div>
    </Layout>
  )
}

export default SecondPage
