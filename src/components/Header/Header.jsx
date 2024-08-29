import React, { useState } from 'react';
import icon from '../../assets/images/icon.png';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <header className='fixed top-0 left-0 right-0 bg-white  z-50 p-4 '>
            <div className='container mx-auto flex justify-between items-center p-4'>
                <div>
                    <img src={icon} alt="icon" className="h-10 w-auto" />
                </div>
                <nav className='hidden lg:flex'>
                    <ul className='flex space-x-6 text-sm mt-2'>
                        <ScrollLink to="home" smooth={true} duration={500} className='hover:text-teal-500  hover:cursor-pointer'>HOME</ScrollLink>
                        <ScrollLink to="about" smooth={true} duration={500} className='hover:text-teal-500  hover:cursor-pointer' >ABOUT</ScrollLink>
                        <ScrollLink to="services" smooth={true} duration={500} className='hover:text-teal-500  hover:cursor-pointer'>SERVICES</ScrollLink>
                        <ScrollLink to="testimonial" smooth={true} duration={500} className='hover:text-teal-500  hover:cursor-pointer'>TESTIMONIAL</ScrollLink>
                        <ScrollLink to="pricing" smooth={true} duration={500} className='hover:text-teal-500  hover:cursor-pointer'>PRICING</ScrollLink>
                        <ScrollLink to="blogs" smooth={true} duration={500} className='hover:text-teal-500  hover:cursor-pointer'>BLOGGING</ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500} className='hover:text-teal-500  hover:cursor-pointer'>CONTACT US</ScrollLink>
                        <Link to="/login" className='px-6 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600  hover:cursor-pointer'>LOG IN</Link>
                    </ul>
                </nav>
                <button onClick={toggleDrawer} className='lg:hidden flex items-center justify-center p-2 text-gray-600 hover:text-teal-500'>
                    {/* Hamburger Icon */}
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Drawer Menu */}
            {isDrawerOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-start justify-end">
                    <div className="w-1/2 bg-white p-4 h-full">
                        <button onClick={toggleDrawer} className="absolute top-4 right-4 p-2 text-gray-600 hover:text-teal-500">
                            {/* Close Icon */}
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <ul className='flex flex-col items-start space-y-4'>
                            <ScrollLink to="home" smooth={true} duration={500} className='hover:text-teal-500  hover:cursor-pointer'>HOME</ScrollLink>
                            <ScrollLink to="about" smooth={true} duration={500} className='hover:text-teal-500  hover:cursor-pointer'>ABOUT</ScrollLink>
                            <ScrollLink to="services" smooth={true} duration={500} className='hover:text-teal-500  hover:cursor-pointer'>SERVICES</ScrollLink>
                            <ScrollLink to="testimonial" smooth={true} duration={500} className='hover:text-teal-500  hover:cursor-pointer'>TESTIMONIAL</ScrollLink>
                            <ScrollLink to="pricing" smooth={true} duration={500} className='hover:text-teal-500  hover:cursor-pointer'>PRICING</ScrollLink>
                            <ScrollLink to="blogs" smooth={true} duration={500} className='hover:text-teal-500  hover:cursor-pointer'>BLOGGING</ScrollLink>
                            <ScrollLink to="contact" smooth={true} duration={500} className='hover:text-teal-500  hover:cursor-pointer'>CONTACT US</ScrollLink>
                            <Link to="/login" className='px-6 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 text-lg  hover:cursor-pointer'>LOG IN</Link>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
}
