import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const menu = [
  {
    label: 'Company',
    children: [
      {
        label: 'About'
      },
      {
        label: 'Jobs'
      },
      {
        label: 'Partners'
      }
    ]
  },
  {
    label: 'Projects',
    children: [
      {
        label: 'Project 1'
      },
      {
        label: 'Project 2'
      },
      {
        label: 'Project 3'
      }
    ]
  }
]

const FocusWithin = () => {

  return (
    <Layout>
      <SEO title="Flex Gap" />
      <h1 className="border-b-2">Focus Within</h1>
      <nav >
        <ul className="flex gap-10 m-0">
          {menu.map(parent => {
            return (
              <li tabIndex="0" className="menu">
                <p>{parent.label}</p>
                <ul className="m-0 menu-item">
                  {parent.children.map(child => {
                    return (
                    <li><a href="/">{child.label}</a></li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </nav>

    </Layout>
  )
}

export default FocusWithin
