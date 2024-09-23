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
      link: "http://carttechnology.atwebpages.com",
      linkName: "Shopping Cart And Comment",
    },
    {
      id: "04",
      link: "https://github.com/luen2003/NoteApp/releases/download/v1.0.0/app-release.apk",
      linkName: "Note App",
    },
    {
      id: "05",
      link: "https://github.com/luen2003/ChatApp/releases/download/v1.0.0/app-release.apk",
      linkName: "Chat App",
    },
    {
      id: "06",
      link: "https://note-task.onrender.com",
      linkName: "Note Task Website",
    },
    {
      id: "07",
      link: "https://luen2003-mern-shop.onrender.com",
      linkName: "MERN Shop Website",
    },
    {
      id: "08",
      link: "https://github.com/luen2003/NewsApp/releases/download/v1.0.0/app-release.apk",
      linkName: "News App",
    },
    {
      id: "09",
      link: "https://mgpost.onrender.com",
      linkName: "Post office website with live chat",
    },
    {
      id: "10",
      link: "https://blog-app-conduit.onrender.com/",
      linkName: "Blog App Website",
    }
  ]
  return (

    <>
      <section className='portfolio'>
        <div id="mySidenav" class="sidenav">
          <Link to='/pages' id="pages"> Pages </Link>
          <Link to='/blog' id="blog"> Blog </Link>
          <Link to='/portfolio' id="portfolio"> Portfolio </Link>
          <Link to='/contact' id="contact"> Contact </Link>
        </div>

        <div className='card '>

          <h1>Major: Information Of Technology - UET - VNU</h1>
          <h1>Time: 2021 - 2025</h1>

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
