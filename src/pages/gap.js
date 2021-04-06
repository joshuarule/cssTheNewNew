import React, {useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Box = ({val = 1}) => (
  <div className={`mx-5 flex-${val} box--secondary`}>
    <span>{val}</span>
  </div>
)

const Gap = () => {

  return (
    <Layout>
      <SEO title="Flex Gap" />
      <h1 className="border-b-2">Flex Gap</h1>
      <div className="flex width-full">
        {[...Array(3)].map(i => <Box key={i}/>)}
        <Box val={2} />
        {[...Array(3)].map(i => <Box key={i} />)}
      </div>

      <div className="gap-5 mt-8 flex width-full">
        <div className="box flex-2"><span>2</span></div>
        {[...Array(2)].map(i => <div key={i} className="box flex-1"><span>1</span></div>)}
        <div className="box flex-2"><span>2</span></div>
        {[...Array(2)].map(i => <div key={i} className="box flex-1"><span>1</span></div>)}
      </div>

      <div className="gap-5 mt-8 flex width-full">
        {[...Array(2)].map(i => <div key={i} className="box flex-1"><span>1</span></div>)}
        <div className="box flex-2"><span>2</span></div>
        <div className="box flex-1"><span>2</span></div>
        {[...Array(2)].map(i => <div key={i} className="box flex-1"><span>1</span></div>)}
      </div>


    </Layout>
  )
}

export default Gap
