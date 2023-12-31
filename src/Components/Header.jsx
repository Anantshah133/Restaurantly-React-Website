import React from 'react';

export default function Header() {
    return (
        <header id='header' className='fixed-top d-flex align-items-center'>
            <div className='container-fluid container-xl d-flex align-items-center justify-content-lg-between'>
                <h1 className='logo me-auto me-lg-0'><a href="/index.html">Restaurantly</a></h1>
                <nav id='navbar' className='navbar order-last order-lg-0 p-0'>
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
                        <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
                        <li><a className="nav-link scrollto" href="#events">Events</a></li>
                        <li><a className="nav-link scrollto" href="#chefs">Chefs</a></li>
                        <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
                        <li className="dropdown"><a href="/index.html"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <a href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a>
            </div>
        </header>
    )
}