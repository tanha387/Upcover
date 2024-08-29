import React from 'react'
import HeroBanner from '../HeroBanner/HeroBanner'
import About from '../About/About'
import OurServices from '../OurServices/OurServices'
import Marketing_angency from '../Marketing_angency/Marketing_angency'
import Testimonial from '../Testimonial/Testimonial'
import Tutorial from '../Tutorial/Tutorial'
import Pricing from '../Pricing/Pricing'
import Blogs from '../Blogs/Blogs'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

export default function Home() {
    return (
        <div>

            <HeroBanner />
            <About />
            <OurServices />
            <Marketing_angency />
            <Testimonial />
            <Tutorial />
            <Blogs />
            <Pricing />
            <Contact />
            <Footer />

        </div>
    )
}
