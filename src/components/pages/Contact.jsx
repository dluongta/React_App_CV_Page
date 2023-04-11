import React from 'react'

export const Contact = () => {
    return (
        <>
            <section className="contact">
            <div className="box">
                <div className="icon">
                    <i className='fa fa-map-marker-alt' ></i>
                    <label htmlFor=''>Location: Hanoi, Vietnam</label>
                </div>
                <div className="icon">
                    <i className='fa fa-phone'></i>
                    <label htmlFor=''>Phone: +123456789</label>                   
                </div>
                <div className="icon">
                    <i className='fa fa-envelope'></i>
                    <label htmlFor=''>Email: luen@example.com</label>                   
                </div>
            </div>
        
            </section>
        </>
    )
}
