import React from 'react'

export const WrapperOne = () => {
    const data = [
        {
          num: "99%",
          text: "AWARDS WINNING",
        },
        {
          num: "99%",
          text: "SATISFIED CLIENTS",
        },
        {
          num: "8",
          text: "CREATIVE PROJECTS",
        },
        {
          num: "2999",
          text: "LINES OF CODE ",
        },
      ]
  return (
    <section className='branding wrapperOne'> 
        <div className="container grid1">
            {data.map((val) => {
                return (
            <>
                <div className="box">
                    <h1>{val.num}</h1>
                    <p>{val.text}</p>
                </div>
            </>                
                )
            })}
        </div>
    </section>
  )
}
