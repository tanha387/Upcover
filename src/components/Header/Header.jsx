import React, { useState } from 'react';
import icon from '../../assets/images/icon.png';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className='container flex justify-between mx-auto items-center mt-11'>
            <div>
                <img src={icon} alt="icon" className="h-10 w-auto" />
            </div>
            <div className='hidden md:flex'>
                <ul className='flex items-center space-x-6'>
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUTt</Link>
                    <Link>SERVICES</Link>
                    <Link>CONTACT</Link>
                    <Link>PRICING</Link>
                    <Link>BLOOGING</Link>
                    <Link>CONTACT US</Link>

                    <Link className='px-6 py-2 text-white rounded-md bg-teal-500 '>LOG IN</Link>


                </ul>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleDrawer} className='focus:outline-none'>
                    {/* Hamburger Icon */}
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Drawer Menu */}
            {
                isDrawerOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-end z-50">
                        <div className="bg-white w-64 p-4">
                            <button onClick={toggleDrawer} className="mb-4 focus:outline-none">
                                {/* Close Icon */}
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                            <ul className='flex flex-col space-y-4'>
                                <Link to="/">HOME</Link>
                                <Link to="/about">ABOUTt</Link>
                                <Link>SERVICES</Link>
                                <Link>CONTACT</Link>
                                <Link>PRICING</Link>
                                <Link>BLOOGING</Link>
                                <Link>CONTACT US</Link>
                                <Link className='px-6 py-2 text-white rounded-md bg-teal-500 '>LOG IN</Link>


                            </ul>
                        </div>
                    </div>
                )
            }
        </div >
    );
}
