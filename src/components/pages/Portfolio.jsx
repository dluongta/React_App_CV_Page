import React from 'react'
import { Link } from 'react-router-dom'


export const Portfolio = () => {
  const data = [
    {
      id: "01",
      link: "https://leetcode.com/luen2003",
      linkName: "Leetcode ",
    },
    {
      id: "02",
      link: "https://cv-react.onrender.com",
      linkName: "CV - Portfolio ",
    },
    {
      id: "03",
      link: "https://carttechnology.000webhostapp.com",
      linkName: "Shopping Cart And Comment",
    },
    {
      id: "04",
      link: "https://news-api-95dr.onrender.com",
      linkName: "News API",
    },
    {
      id: "05",
      link: "https://github.com/luen2003/SDLGAME/archive/refs/tags/1.0.zip",
      linkName: "SDL Game - Water Pipe ",
    },
    {
      id: "06",
      link: "https://github.com/luen2003/Luen_News/releases/download/v1.0.0/app-release.apk",
      linkName: "News App",
    }

  ]
  return (

    <>
      <section className='portfolio'>

        <div className='card '>

          <h1>Major: Information Of Technology - UET - VNU</h1>
          <h1>Time: 2021 - 2025</h1>

        </div>

        {data.map((value) => {
          return (<div className='card '>

            <h1>{value.linkName}</h1>
            <Link className='link' to={{ pathname: value.link }} target="_blank">{value.link}</Link>


          </div>)

        }

        )}

      </section>
    </>
  )
}
