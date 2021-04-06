import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const cardStyles = {
  gridTemplateRows: 'subgrid',
  gridRow: 'span 3',
}

const FocusWithin = () => {

  return (
    <Layout>
      <SEO title="Flex Gap" />
      <h1 className="border-b-2">Subgrid</h1>
      <p className="text-red-500">Firefox only</p>
      
      <div 
        className='
          gap-8 
          width-full
          grid
          grid-cols-3
        '
      >
        {[...Array(9)].map(i => <div key={i} className="box"><span>1</span></div>)}
        <div 
          className="box col-start-1 col-end-4 grid border-none gap-y-4 bg-gray-700 text-white"
          style={{
            height: 'initial',
            gridTemplateColumns: 'subgrid',
          }}
        >
          <div className="border-2 grid bg-gray-600"
            style={cardStyles}
          >
            <h3 className="m-0">title</h3>
            <p className="m-0 border-2">information about the box</p>
            <p className="m-0">footer</p>
          </div>
          <div className="border-2 grid bg-gray-600"
            style={cardStyles}
          >
            <h3 className="m-0">title that wraps to another line</h3>
            <p className="m-0 border-2"> Nesciunt expedita ab explicabo debitis odio numquam maxime, maiores, iusto vero molestias odit, eum quibusdam. Distinctio voluptas pariatur atque praesentium perferendis aperiam.</p>
            <p className="m-0">footer</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FocusWithin
