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
      link: "https://react-app-google-login-page.vercel.app/",
      linkName: "React App Google Login Page",
    },
    {
      id: "13",
      link: "http://pdf-excel-generator.atwebpages.com/",
      linkName: "PDF And Excel Generator",
    },
    {
      id: "14",
      link: "https://xlsx-reader.w3spaces.com/",
      linkName: "XLSX Reader",
    },
    {
      id: "15",
      link: "https://tiktok-short-video.vercel.app/",
      linkName: "TikTok Short Video",
    },
    {
      id: "16",
      link: "https://react-livestream-app.onrender.com/",
      linkName: "Livestream App",
    },
    {
      id: "17",
      link: "https://bank-qrcode.w3spaces.com/",
      linkName: "Bank QRCode",
    },
    {
      id: "18",
      link: "https://github.com/luen2003/Face-App",
      linkName: "Face Recognition Analysis",
    },
    {
      id: "19",
      link: "https://react-app-text-audio.onrender.com/",
      linkName: "Read Text + Translate + Record + Download MP3",
    },
    {
      id: "20",
      link: "https://github.com/luen2003/Styled_Python",
      linkName: "Styled Effect Python App",
    },
    {
      id: "21",
      link: "https://quizzes-app.w3spaces.com/",
      linkName: "Quizzes App",
    },
    {
      id: "22",
      link: "https://digital_calendar.playcode.io/",
      linkName: "Digital Calendar",
    },
    {
      id: "23",
      link: "https://custom_video.playcode.io/",
      linkName: "Custom Video",
    },
    {
      id: "24",
      link: "https://github.com/luen2003/ASPNET_API",
      linkName: "ASPNET API",
    },
    {
      id: "25",
      link: "https://github.com/luen2003/text-3d-video",
      linkName: "Text 3D Video",
    },
    {
      id: "26",
      link: "https://dluongta.github.io/runcodeonline.html",
      linkName: "Run Code Online",
    },
    {
      id: "27",
      link: "https://deeptankio.onrender.com/",
      linkName: "DeepTankIO",
    },
    {
      id: "28",
      link: "https://github.com/luen2003/VNKey/releases/download/v1.0.0/VNKey.exe",
      linkName: "VNKey Application",
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
