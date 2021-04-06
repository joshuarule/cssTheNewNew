import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const items = [
  {
    title: 'A',
    children: ['Ace', 'Angel', 'Anton', 'Ashley', 'Astrid', ]
  },
  {
    title: 'B',
    children: ['Beatrice', 'Brent', 'Bruce', 'Bud', 'Buffy']
  },
  {
    title: 'C',
    children: ['Carole', 'Cecil', 'Charles', 'Chris']
  },
  {
    title: 'D',
    children: ['Dierdre', 'Dirk', 'Donovan', 'Dustin' ]
  }
]

const FocusWithin = () => {

  return (
    <Layout>
      <SEO title="Flex Gap" />
      <h1 className="border-b-2">Position: Sticky</h1>
      <dl
        className="text-white bg-blue-500 rounded-md w-1/2"
        style={{
          height: '80vh',
          maxHeight: '35ex',
          overflowY: 'auto',
        }}
      >
        {items.map(section => {
          return (
            <>
              <dt className="bg-gray-300 text-black p-2 sticky top-0">{section.title}</dt>
              {section.children.map(name => <dd className="p-2 m-0">{name}</dd>)}
            </>
          )
        })}
      </dl>
    </Layout>
  )
}

export default FocusWithin
