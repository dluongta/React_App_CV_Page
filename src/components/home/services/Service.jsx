import React from 'react'
import bannerImage from '../../../assets/banner-bg.png'

export const Service = () => {
    const ServicesData = [
        {
          id: 1,
          title: "Web Design",
          desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
          cover: bannerImage,
        },
        {
          id: 2,
          title: "Web Development",
          desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
          cover: bannerImage,
        },
        {
          id: 3,
          title: "Photography",
          desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
          cover: bannerImage,
        },
        {
          id: 4,
          title: "Live Support",
          desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
          cover: bannerImage,
        },
        {
          id: 5,
          title: "Content Writing",
          desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
          cover: bannerImage,
        },
        {
          id: 6,
          title: "Timely Deliverables",
          desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
          cover: bannerImage,
        },
      ]
      
  return (
    <section className='services topMargin'>
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
