import React from 'react'

export const Pages = () => {
  const data = [
    {
      id: "01",
      link: "https://cv-react.onrender.com",
      linkName: "CV - Portfolio ",
    },
    {
      id: "02",
      link: "https://carttechnology.000webhostapp.com",
      linkName: "Shopping Cart And Comment",
    },
    {
      id: "03",
      link: "https://news-api-95dr.onrender.com",
      linkName: "News API",
    },
  ]
  return (

    <>
      <section className='pages'>

        {data.map((value) => {
          return (<div className='card '>

            <h1>{value.linkName}</h1>
            <a className='link' href='{value.link}' >&rarr; {value.link} </a>


          </div>)

        }

        )}

      </section>
    </>
  )
}
