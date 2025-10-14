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
      link: "https://github.com/luen2003/NoteApp/releases/download/v1.0.0/app-release.apk",
      linkName: "Note App",
    },
    {
      id: "03",
      link: "https://github.com/luen2003/ChatApp/releases/download/v1.0.0/app-release.apk",
      linkName: "Chat App",
    },
    {
      id: "04",
      link: "https://github.com/luen2003/NewsApp/releases/download/v1.0.0/app-release.apk",
      linkName: "News App",
    },
    {
      id: "05",
      link: "https://github.com/luen2003/Flutter_Weather_App/releases/download/v1.0.0/app-release.apk",
      linkName: "Flutter Weather App",
    },
    {
      id: "06",
      link: "https://github.com/luen2003/VNKey/releases/download/v1.0.0/VNKey.exe",
      linkName: "VNKey Application",
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
        <div className="cards-wrapper">

          {data.map((value) => {
            return (<div className='card '>
              <div className="card-content">
                <h1>{value.linkName}</h1>
              </div>
              <Link className='link' to={{ pathname: value.link }} target="_blank">&rarr; {value.link}</Link>

            </div>)

          }

          )}
        </div>
      </section>
    </>
  )
}
