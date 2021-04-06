import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link className="text-xl block pb-2" to="/grid/">Grid</Link>
    <Link className="text-xl block pb-2" to="/gap/">Flex Gap</Link>
    <Link className="text-xl block pb-2" to="/ch/">ch</Link>
    <Link className="text-xl block pb-2" to="/scroll-snap/">Scroll Snap</Link>
    <Link className="text-xl block pb-2" to="/aspect-ratio/">Aspect Ratio</Link>
    <Link className="text-xl block pb-2" to="/focus-within/">Focus Within</Link>
    <Link className="text-xl block pb-2" to="/sticky/">Sticky</Link>
    <Link className="text-xl block pb-2" to="/backdrop/">Backdrop Filter</Link>
    <Link className="text-xl block pb-2" to="/functions/">Min / Max / Clamp</Link>
    <Link className="text-xl block pb-2" to="/subgrid/">Subgrid</Link>

    <Link className="text-xl block pb-2" to="/is-where/">Is / Where</Link>
    <Link className="text-xl block pb-2" to="/level-5-queries/">Level 5 Queries</Link>
    {/* <Link className="text-xl block pb-2" to="/houdini/">Houdini</Link> */}

  </Layout>
)

export default IndexPage
