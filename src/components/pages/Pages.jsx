import React from 'react'
import { Link } from 'react-router-dom'


export const Pages = () => {
  const data = [
    {
      id: "01",
      link: "https://dluongta.github.io/",
      linkName: "General Intoduce Page",
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
      link: "https://the-digital-shop.onrender.com",
      linkName: "The Shop Website",
    },
    {
      id: "05",
      link: "https://mgpost.onrender.com",
      linkName: "Post office website with live chat",
    },
    {
      id: "06",
      link: "https://react-app-blog-page.vercel.app/",
      linkName: "Blog App Website",
    },
    {
      id: "07",
      link: "https://github.com/luen2003/python-code",
      linkName: "Python Code",
    },
    {
      id: "08",
      link: "https://vietnam-map-platform.vercel.app/",
      linkName: "Vietnam Map Platform",
    },
    {
      id: "09",
      link: "https://qr-scanner-live.netlify.app/",
      linkName: "QR Code Scanner",
    },
    {
      id: "10",
      link: "https://react-app-videocall.onrender.com/",
      linkName: "Voice Or Video Call Using WebRTC",
    },
    {
      id: "11",
      link: "https://react-qr-code-generator-live.vercel.app/",
      linkName: "React QRCode Generator",
    },
    {
      id: "12",
      link: "https://chatdeepmind.vercel.app/",
      linkName: "Chat DeepMind",
    },
    {
      id: "13",
      link: "https://kbsv.vercel.app/",
      linkName: "Stock Application Using Ant Design, TSX, Tailwind CSS",
    },
    {
      id: "14",
      link: "https://react-app-google-login-page.vercel.app/",
      linkName: "React App Google Login Page",
    }, 
    {
      id: "15",
      link: "http://pdf-generator.atwebpages.com/",
      linkName: "PDF Generator",
    }, 
    {
      id: "16",
      link: "https://xlxs-reader.w3spaces.com/",
      linkName: "XLSX Reader",
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
