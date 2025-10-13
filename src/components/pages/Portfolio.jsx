import React from "react";
import { Link } from "react-router-dom";

export const Portfolio = () => {
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
      link: "https://github.com/luen2003/NoteApp/releases/download/v1.0.0/app-release.apk",
      linkName: "Note App",
    },
    {
      id: "04",
      link: "https://github.com/luen2003/ChatApp/releases/download/v1.0.0/app-release.apk",
      linkName: "Chat App",
    },
    {
      id: "05",
      link: "https://github.com/luen2003/SDLGAME/archive/refs/tags/1.0.zip",
      linkName: "SDL Game - Water Pipe ",
    },
    {
      id: "06",
      link: "https://the-digital-shop.onrender.com",
      linkName: "The Shop Website",
    },
    {
      id: "07",
      link: "https://github.com/luen2003/NewsApp/releases/download/v1.0.0/app-release.apk",
      linkName: "News App",
    },
    {
      id: "08",
      link: "https://mgpost.onrender.com",
      linkName: "Post office website with live chat",
    },
    {
      id: "09",
      link: "https://react-app-blog-page.vercel.app/",
      linkName: "Blog App Website",
    },
    {
      id: "10",
      link: "https://github.com/luen2003/python-code",
      linkName: "Python Code",
    },
    {
      id: "11",
      link: "https://vietnam-map-platform.vercel.app/",
      linkName: "Vietnam Map Platform",
    },
    {
      id: "12",
      link: "https://qr-scanner-live.netlify.app/",
      linkName: "QR Code Scanner",
    },
    {
      id: "13",
      link: "https://react-app-videocall.onrender.com/",
      linkName: "Voice Or Video Call Using WebRTC",
    },
    {
      id: "14",
      link: "https://react-qr-code-generator-live.vercel.app/",
      linkName: "React QRCode Generator",
    },
    {
      id: "15",
      link: "https://react-app-google-login-page.vercel.app/",
      linkName: "React App Google Login Page",
    },
    {
      id: "16",
      link: "http://pdf-excel-generator.atwebpages.com/",
      linkName: "PDF And Excel Generator",
    },
    {
      id: "17",
      link: "https://xlsx-reader.w3spaces.com/",
      linkName: "XLSX Reader",
    },
    {
      id: "18",
      link: "https://github.com/luen2003/Flutter_Weather_App/releases/download/v1.0.0/app-release.apk",
      linkName: "Flutter Weather App",
    },
    {
      id: "19",
      link: "https://tiktok-short-video.vercel.app/",
      linkName: "TikTok Short Video",
    },
    {
      id: "20",
      link: "https://github.com/luen2003/BookingRoom",
      linkName: "Booking Laravel App",

    },
    {
      id: "21",
      link: "https://react-livestream-app.onrender.com/",
      linkName: "Livestream App",
    },
    {
      id: "22",
      link: "https://bank-qrcode.w3spaces.com/",
      linkName: "Bank QRCode",
    },
    {
      id: "23",
      link: "https://github.com/luen2003/Face-App",
      linkName: "Face Recognition Analysis",
    },
    {
      id: "24",
      link: "https://react-app-text-audio.onrender.com/",
      linkName: "Read Text + Translate + Record + Download MP3",
    },
    {
      id: "25",
      link: "https://github.com/luen2003/Styled_Python",
      linkName: "Styled Effect Python App",
    },
    {
      id: "26",
      link: "https://quizzes-app.w3spaces.com/",
      linkName: "Quizzes App",
    },
    {
      id: "27",
      link: "https://digital_calendar.playcode.io/",
      linkName: "Digital Calendar",
    },
    {
      id: "28",
      link: "https://custom_video.playcode.io/",
      linkName: "Custom Video",
    },
    {
      id: "29",
      link: "https://github.com/luen2003/ASPNET_API",
      linkName: "ASPNET API",
    },
    {
      id: "30",
      link: "https://github.com/luen2003/text-3d-video",
      linkName: "Text 3D Video",
    },
    {
      id: "31",
      link: "https://dluongta.github.io/runcodeonline.html",
      linkName: "Run Code Online",
    },
    {
      id: "32",
      link: "https://deeptankio.onrender.com/",
      linkName: "DeepTankIO",
    }
  ];
  return (
    <>
      <section className="portfolio">
        <div id="mySidenav" class="sidenav">
          <Link to="/pages" id="pages">
            Pages
          </Link>
          <Link to="/blog" id="blog">
            Blog
          </Link>
          <Link to="/portfolio" id="portfolio">
            Portfolio
          </Link>
          <Link to="/contact" id="contact">
            Contact
          </Link>
        </div>
        <div className="cards-wrapper">

          <div className="card ">
            <div className="card-content">
              <h1>Major: Information Of Technology - UET - VNU</h1>
              <h1>Time: 2021 - 2025</h1>
            </div>
          </div>

          {data.map((value) => {
            return (
              <div className="card ">
                <div className="card-content">
                  <h1>{value.linkName}</h1>
                </div>
                <Link
                  className="link"
                  to={{ pathname: value.link }}
                  target="_blank"
                >
                  &rarr; {value.link}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
