import React, { Fragment, useState } from "react"
import ReactMarkdown from "react-markdown"

const App = () => {
  const [markDown, setMarkDown] = useState("## Markdown previewer")
  return (
    <Fragment>
      <div className="flex justify-center flex-row mt-5 font-semibold text-xl">
        <h1>Markdown Previewer</h1>
      </div>
      <div className="flex  w-full mt-14 justify-center font-sans">
      <section className='w-1/2'>
        <textarea
          className='overflow-y-scroll shadow-md rounded-lg focus:outline-0 p-5 resize overflow-hidden h-80 w-9/12'
          value={markDown}
          onInput={(e) => setMarkDown(e.target.value)}
        ></textarea>
      </section>
      <article className='p-5'>
        <ReactMarkdown>{markDown}</ReactMarkdown>
      </article>
      </div>
    </Fragment>
  )
}

export default App
