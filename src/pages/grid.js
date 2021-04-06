import React, {useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {

  const [mediumColumns, setMediumColumns] = useState(4);
  const [smallColumns, setSmallColumns] = useState(1);

  const handleSetColumns = (e, value) => {
    value ? setMediumColumns(e.target.value) : setSmallColumns(e.target.value);
  }

  return (
    <Layout>
      <SEO title="Grid" />
      <h1 className="border-b-2">Grid</h1>

      <div className="w-72 grid gap-x-6 grid-cols-2">  
        <label className="mr-2" htmlFor="columnsMedium">Columns - med</label>
        <input 
          onChange={(e) => handleSetColumns(e,1)} 
          value={mediumColumns} 
          type="number" 
          name="columnsMedium" 
          id="columnPicker-med"
          className="border-2 mb-2 w-10 text-center"
        />
      </div>
      <div className="w-72 grid gap-x-6 grid-cols-2">  
        <label className="mr-2" htmlFor="smallColumns">Columns - sm</label>
        <input 
          onChange={(e) => handleSetColumns(e, 0)} 
          value={smallColumns} 
          type="number" 
          name="smallColumns" 
          id="columnPicker-sm"
          className="border-2 mb-2 w-10 text-center"
        />
      </div>
      <div 
        className={`
          mt-4
          grid 
          gap-x-2 
          gap-y-6 
          md:grid-cols-${mediumColumns}
          sm:grid-cols-${smallColumns}
        `}
      >
        <div className="box flex items-center justify-center"><span>1</span></div>
        <div className="box flex items-center justify-center"><span>1</span></div>
        <div className="box flex items-center justify-center"><span>1</span></div>
        <div className="box flex items-center justify-center"><span>1</span></div>
        <div className="box flex items-center justify-center"><span>1</span></div>
        <div className="box flex items-center justify-center"><span>1</span></div>
        <div className="box flex items-center justify-center"><span>1</span></div>
        <div className="box flex items-center justify-center col-start-1 col-end-5"><span>3</span></div>
        <div className="box flex items-center justify-center"><span>1</span></div>
      </div>
    </Layout>
  )
}

export default SecondPage
