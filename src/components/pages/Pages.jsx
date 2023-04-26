import React from 'react'
import { Link } from 'react-router-dom'


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
            <Link className='link' to={{ pathname: value.link }} target="_blank">{value.link}</Link>


          </div>)

        }

        )}

      </section>
    </>
  )
}
