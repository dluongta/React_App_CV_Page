import React from 'react';
import { Link } from 'react-router-dom';

export const Contact = () => {
    return (
        <>
            <section className="contact">
                <div id="mySidenav" className="sidenav">
                    <Link to='/pages' id="pages"> Pages </Link>
                    <Link to='/blog' id="blog"> Blog </Link>
                    <Link to='/portfolio' id="portfolio"> Portfolio </Link>
                    <Link to='/contact' id="contact"> Contact </Link>
                </div>
                <div className="pdf-container">
                    <iframe className="pdf" src="/Resume.pdf" width="100%" height="500" title="Resume"></iframe>
                </div>
            </section>
        </>
    );
}
