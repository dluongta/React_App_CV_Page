import React from 'react'
import logo from '../../../../assets/Luen_logo.png'

export const Branding = () => {
    const data = [
        {
          id: "01",
          heading: "Digital Branding",
          desc: "I always want to create quality products.",
        },
        {
          id: "02",
          heading: "Team Management",
          desc: "Working with team is also an important thing in programming. ",
        },
        {
          id: "03",
          heading: "Creative Mind",
          desc: "Creativity will be thr core to develop program.",
        },
      ]
  return (
    <>
    <section  className='branding'>
        <div className='container grid'>
            {data.map((value) => {
                return <div className='box flex'>
                    <div className="text">
                        <h1>{value.id}</h1>
                    </div>
                    <div className="para">
                        <h2>{value.heading}</h2>
                        <p>{value.desc}</p>
                    </div>
                </div>

            }

            )}
        </div>
    </section>
    <img width={'100%'} src={logo}/>
    <iframe src="https://luen2003.github.io/Rubik.html"></iframe>
    <iframe src="https://vietnam-map-platform.vercel.app/"></iframe>
    </>
  )
}
