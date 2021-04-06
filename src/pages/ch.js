import React, {useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {

  const [maxCharacters, setMaxCharacters] = useState(50);
  const [fontSize, setFontSize] = useState(2);

  const handleSetMaxCharacters = (e) => setMaxCharacters(e.target.value);
  const handleSetFontSize      = (e) => setFontSize(e.target.value);

  return (
    <Layout>
      <SEO title="Grid" />
      <h1 className="border-b-2">CH Unit (character)</h1>
      <div className="mb-4">

        <div className="w-96 grid gap-x-6 grid-cols-2">  
          <label className="mr-2" htmlFor="characters">Max Characters per line</label>
          <input 
            onChange={handleSetMaxCharacters} 
            value={maxCharacters} 
            type="number" 
            name="characters" 
            id="characters"
            className="border-2 mb-2 w-12 text-center"
          />
        </div>
        <div className="w-96 grid gap-x-6 grid-cols-2">  
          <label className="mr-2" htmlFor="characters">Font Size</label>
          <input 
            onChange={handleSetFontSize} 
            value={fontSize} 
            type="number" 
            step="0.1"
            name="characters" 
            id="characters"
            className="border-2 mb-2 w-12 text-center"
          />
        </div>
      </div>
      <p 
        style={{
          maxWidth: `${maxCharacters}ch`,
          fontSize: `${fontSize}em`,
          lineHeight: '1.2'
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem id quo magnam et amet quibusdam sint, unde facilis deserunt saepe, accusamus nihil quis ex perspiciatis at. Ipsam vel incidunt omnis.
      Ipsum eos ullam vel, suscipit quidem numquam, rem eligendi natus modi, et ex sint consectetur voluptas placeat fugit facere? Sequi ad possimus autem recusandae eaque, debitis fugit a delectus alias.
      Nemo, maxime? Ab eum exercitationem deserunt ratione nam quis ea fugiat hic velit fuga doloribus distinctio illum, magnam quas laboriosam doloremque incidunt, nisi neque quam vel debitis delectus praesentium ipsam!
      Laudantium in officiis sapiente explicabo eveniet mollitia tempora, veritatis harum beatae numquam incidunt aperiam, minima eligendi, earum hic. Repudiandae blanditiis vero repellat a accusantium sint odio sequi sunt tempore doloribus!
      Porro sequi dignissimos eius culpa hic molestias harum officiis! Autem aliquid, perferendis quos voluptas qui provident, enim, voluptatem alias voluptates vero eligendi? Ipsum libero eveniet nihil veritatis blanditiis magnam quo.
      Cumque minima voluptatum reiciendis eum explicabo possimus delectus placeat atque, hic illo ipsam vero nulla dolorum nihil commodi quisquam at voluptas sapiente beatae nemo? Fugiat commodi omnis totam quidem quos.</p>
    </Layout>
  )
}

export default SecondPage
