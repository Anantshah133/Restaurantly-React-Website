import React from 'react'

export default function HeroSection() {
    return (
        <section id='hero' className='d-flex align-items-center'>
            <div className='container position-relative text-center text-lg-start'>
                <div className="row">
                    <div className="col-lg-8">
                        <h1>Welcome to <span>Restaurantly</span></h1>
                        <h2>Delivering great food for more than 18 years!</h2>
                        <div class="btns">
                            <a href="#menu" class="btn-menu">Our Menu</a>
                            <a href="#book-a-table" class="btn-book">Book a Table</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}