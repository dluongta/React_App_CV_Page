import React from 'react'
import { Link } from 'react-router-dom'

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
        <div id="mySidenav" class="sidenav">
          <Link to='/pages' id="pages"> Pages </Link>
          <Link to='/blog' id="blog"> Blog </Link>
          <Link to='/portfolio' id="portfolio"> Portfolio </Link>
          <Link to='/contact' id="contact"> Contact </Link>
        </div>

        {data.map((value) => {
          return (<div className='card '>

            <h1>{value.linkName}</h1>
            <Link className='link' to={{ pathname: value.link }} target="_blank">&rarr; {value.link}</Link>

          </div>)

        }

        )}

      </section>
    </>
  )
}
