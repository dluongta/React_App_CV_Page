import React from 'react'
import { Link } from 'react-router-dom'


export const Portfolio = () => {
  const data = [
    {
      id: "01",
      link: "/graduation_thesis.pdf",
      linkName: "Graduation Thesis ",
    },
    {
      id: "02",
      link: "https://leetcode.com/luen2003",
      linkName: "Leetcode ",
    },
    {
      id: "03",
      link: "https://dluongta.github.io/",
      linkName: "General Intoduce Page",
    },
    {
      id: "04",
      link: "http://carttechnology.atwebpages.com",
      linkName: "Shopping Cart And Comment",
    },
    {
      id: "05",
      link: "https://github.com/luen2003/NoteApp/releases/download/v1.0.0/app-release.apk",
      linkName: "Note App",
    },
    {
      id: "06",
      link: "https://github.com/luen2003/ChatApp/releases/download/v1.0.0/app-release.apk",
      linkName: "Chat App",
    },
    {
      id: "07",
      link: "https://note-task.onrender.com",
      linkName: "Note Task Website",
    },
    {
      id: "08",
      link: "https://the-digital-shop.onrender.com",
      linkName: "MERN Shop Website",
    },
    {
      id: "09",
      link: "https://github.com/luen2003/NewsApp/releases/download/v1.0.0/app-release.apk",
      linkName: "News App",
    },
    {
      id: "10",
      link: "https://mgpost.onrender.com",
      linkName: "Post office website with live chat",
    },
    {
      id: "11",
      link: "https://react-app-blog-page.vercel.app/",
      linkName: "Blog App Website",
    },
    {
      id: "12",
      link: "https://github.com/luen2003/python-code",
      linkName: "Python Code Used For Predict Data, Face Detection, Color Map, Digit Recognizer, Video, Image And Audio Processing",
    },
    {
      id: "13",
      link: "https://vietnam-map-platform.vercel.app/",
      linkName: "Vietnam Map Platform",
    },
    {
      id: "14",
      link: "https://qr-scanner-live.netlify.app/",
      linkName: "QR Code Scanner",
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
