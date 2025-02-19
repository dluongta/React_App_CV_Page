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
      link: "https://chatdeepmind.vercel.app/",
      linkName: "Chat DeepMind",
    },
    {
      id: "16",
      link: "https://kbsv.vercel.app/",
      linkName: "Stock Application Using Ant Design, TSX, Tailwind CSS",
    },
    {
      id: "17",
      link: "https://react-app-google-login-page.vercel.app/",
      linkName: "React App Google Login Page",
    },
    {
      id: "18",
      link: "http://pdf-generator.atwebpages.com/",
      linkName: "PDF And Excel Generator",
    },
    {
      id: "19",
      link: "https://xlxs-reader.w3spaces.com/",
      linkName: "XLSX Reader",
    },
  ];
  return (
    <>
      <section className="portfolio">
        <div id="mySidenav" class="sidenav">
          <Link to="/pages" id="pages">
            {" "}
            Pages{" "}
          </Link>
          <Link to="/blog" id="blog">
            {" "}
            Blog{" "}
          </Link>
          <Link to="/portfolio" id="portfolio">
            {" "}
            Portfolio{" "}
          </Link>
          <Link to="/contact" id="contact">
            {" "}
            Contact{" "}
          </Link>
        </div>

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
      </section>
    </>
  );
};
