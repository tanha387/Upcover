import React from 'react';
import heroBanner from '../../assets/images/hero_banner.png';



function HeroBanner() {

    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  p-28 items-center">
            <div className="flex flex-col justify-center ">
                <h1 className="font-semibold lg:leading-normal leading-normal tracking-wide text-3xl lg:text-5xl mb-5">Get Creative & Modern With Upcover</h1>
                <p className="text-slate-400 text-lg max-w-xl">
                    This is just a simple text made for this unique and awesome template, you can replace it with any text.
                </p>
                <div className='mt-8'>
                    <a className='px-8 py-4 text-white rounded-sm bg-teal-500 mt-6'>Contact Us</a>
                </div>

            </div>
            <div className="flex justify-center items-center">
                <img src={heroBanner} alt="Hero Banner" className="md:w-full mt-6 lg:w-full xl:w-3/4 h-auto object-cover rounded-full " />
            </div>

        </div>





    );

}

export default HeroBanner;
