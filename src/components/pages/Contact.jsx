import React from 'react'
import { Link } from 'react-router-dom'


export const Contact = () => {
    return (
        <>
            <section className="contact">
                <div id="mySidenav" class="sidenav">
                    <Link to='/pages' id="pages"> Pages </Link>
                    <Link to='/blog' id="blog"> Blog </Link>
                    <Link to='/portfolio' id="portfolio"> Portfolio </Link>
                    <Link to='/contact' id="contact"> Contact </Link>
                </div>
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
                        <label htmlFor=''>Email: luen2k3@gmail.com</label>
                    </div>
                </div>

            </section>
        </>
    )
}
