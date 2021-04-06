import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function aspectRatio() {
  return (
    <Layout>
      <SEO title="Grid" />
      <h1 className="border-b-2 mb-0">Aspect Ratio</h1>
      <p>experimental flag</p>

      <div
        className="box--secondary relative flex items-center justify-center"
        style={{ paddingBottom: '56.25%'}}
      >
        <span
          style={{
            display: 'block',
            position: 'absolute',
            top: '50%',
            left: '50%',
            translate: '-50% -50%'
          }}
        >Title</span>
      </div>

      <div 
        className="box bg-blue-500 mt-4 flex items-center justify-center"
        style={{ aspectRatio: '4 / 1', height: 'auto', fontSize: '10vw' }}
      >
        <span className="text-white">Title</span>
      </div>
    </Layout>
  )
}
