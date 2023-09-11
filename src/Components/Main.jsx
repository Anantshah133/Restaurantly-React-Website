import React from 'react'
import About from './About'
import WhyUs from './WhyUs'
import Specials from './Specials'
import Events from './Events'
import Booking from './Booking'
import Testimonials from './Testimonials'
import Gallery from './Gallery'
import Contact from './Contact'

export default function Main() {
    return (
        <main id='main'>
            <About />
            <WhyUs />
            <Events />
            <Specials />
            <Testimonials />
            <Booking />
            <Gallery />
            <Contact />
        </main>
    )
}