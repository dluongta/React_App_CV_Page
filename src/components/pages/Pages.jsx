import React from 'react'
import { Link } from 'react-router-dom'


export const Pages = () => {
  const data = [
    {
      id: "01",
      link: "https://cv-react.onrender.com",
      linkName: "CV - Portfolio ",
    },
    {
      id: "02",
      link: "http://carttechnology.atwebpages.com",
      linkName: "Shopping Cart And Comment",
    },
    {
      id: "03",
      link: "https://note-task.onrender.com",
      linkName: "Note Task Website",
    },
    {
      id: "04",
      link: "https://luen2003-mern-shop.onrender.com",
      linkName: "MERN Shop Website",
    },
    {
      id: "05",
      link: "https://mgpost.onrender.com",
      linkName: "Post office website with live chat",
    },
    {
      id: "06",
      link: "https://blog-app-conduit.onrender.com/",
      linkName: "Blog App Website",
    }
  ]
  return (

    <>
      <section className='pages'>
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
