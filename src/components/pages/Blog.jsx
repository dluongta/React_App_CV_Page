import React from 'react'

export const Blog = () => {
  const data = [
    {
      id: "01",
      link: "https://github.com/luen2003/SDLGAME/archive/refs/tags/1.0.zip",
      linkName: "SDL Game - Water Pipe ",
    },
    {
      id: "02",
      link: "https://github.com/luen2003/Luen_News/releases/download/v1.0.0/app-release.apk",
      linkName: "News App",
    }

  ]
  return (

    <>
      <section className='blog'>

        {data.map((value) => {
          return (<div className='card '>

            <h1>{value.linkName}</h1>
            <a className='link' href='{value.link}' >&rarr; {value.link} </a>


          </div>)

        }

        )}

      </section>
    </>
  )
}
