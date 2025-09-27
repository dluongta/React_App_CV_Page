import React from 'react'

export const Wrapper = ({ className }) => {
  const data = [
    {
      title: "LOOKING FOR MORE SOLUTIONS",
      heading: "Get The Best For Your Career",
      desc: "I am always looking for jobs and developing my knowledge.",
    },
  ]
  return (
    <section className={`branding wrapper ${className}`}>
      <div className="container">
        {data.map((val) => {
          return (
            <div className="box">
              <h3>{val.title}</h3>
              <h2>{val.heading}</h2>
              <p>{val.desc}</p>
              <button className="primary-btn btn-led">
                Contact Me
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          )
        }
        )}
      </div>
    </section>
  )
}
