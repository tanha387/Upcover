import React from 'react'
import about from '../../assets/images/about.png';

export default function About() {
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2   p-28 items-center' id="about">
            < div >
                <img src={about} alt="Hero Banner" className="lg:w-full me-3 xl:w-3/4 mt-6  rounded-full object-cover " />

            </div >
            <div className='w-full   xl:w-3/4 '>
                <h4 className='text-sm text-teal-500 font-semibold leading-normal mb-3'>WHO ARE WE?</h4>
                <h3 className='font-semibold xl:text-3xl w-3/4  sm:text-2xl sm:w-full'>We're a global stakeholder
                    relations and partnership
                    building consultancy.</h3>

                <p className='text-slate-400 max-w-xl mb-6 mt-4'>Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>
                <div className='mt-8'>
                    <a className='px-8 py-3 text-white rounded-sm bg-teal-500 mt-6'>Read More</a>
                </div>

            </div>
        </div >
    )
}
