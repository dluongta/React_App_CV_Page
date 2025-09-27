import React from 'react'
import bannerImage from '../../../assets/banner-bg.png'


export const Service = ({ className }) => {
    const ServicesData = [
        {
          id: 1,
          title: "Web Design",
          desc: "Web Design is vital to make layout better.",
          cover: bannerImage,
        },
        {
          id: 2,
          title: "Web Development",
          desc: "I definitely want to have good web app.",
          cover: bannerImage,
        },
        {
          id: 3,
          title: "Content Writing",
          desc: "Application need an good content.",
          cover: bannerImage,
        },
        {
          id: 4,
          title: "Online Support",
          desc: "Website also provide support by everyone.",
          cover: bannerImage,
        },
        {
          id: 5,
          title: "Project Planning",
          desc: "It is predominant to have a good plan before creating application.",
          cover: bannerImage
        },
        {
          id: 6,
          title: "Time Management",
          desc: "Following to time arrangement is a supreme thing.",
          cover: bannerImage,
        },
      ]
      
  return (
    <section className={`services topMargin ${className}`}>
        <div className="container">
            <div className="heading">
                <h3>MY SERVICES</h3>
                <h1>Interactive Service Offerrd By Me</h1>
            </div>
            <div className="contain grid topMargin">
                {ServicesData.map((value) => {
                    return (
                        <>
                        <div className="box">
                            <div className="img">
                                <img src = {value.cover} alt =''/>
                            </div>
                            <div className="text">
                                <h2>{value.title}</h2>
                                <h4>{value.desc}</h4>
                            </div>
                        </div>
                        </>
                    )
                }

                )}
            </div>
        </div>
    </section>
  )
}
