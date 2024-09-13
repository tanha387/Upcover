import React from 'react';
import design from '../../assets/images/design.png';
import app from '../../assets/images/apps.png';
import smart from '../../assets/images/smart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faBusinessTime } from '@fortawesome/free-solid-svg-icons';

function Blogs() {
    return (
        <div className='container px-4 md:px-8 lg:p-32 mx-auto mt-60' id='blogs'>
            <h3 className='text-center text-2xl mt-8'>Blog or News</h3>
            <p className='text-center text-gray-500 mt-5'>
                This is just a simple text made for this unique and awesome template, you can
                <br />
                replace it with any text.
            </p>

            <div className='grid gap-10 mt-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {/* Blog 1 */}
                <div className='h-auto w-full mx-auto'>
                    <img
                        src={design}
                        alt="Design"
                        className="w-full h-52 my-7 transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-md"
                    />
                    <div className="flex flex-row  md:flex-row items-center justify-start my-4 space-y-2 md:space-y-0 md:space-x-6">

                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faCalendarDays} className="mt-1 mr-2" />
                            <span className="text-gray-500 mt-1">13th March, 2000</span>
                        </div>


                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faBusinessTime} className="mt-1 mr-2 ms-3" />
                            <span className="text-gray-500">13th March, 2000</span>
                        </div>
                    </div>
                    <h3 className='text-lg'>How apps are changing the IT world</h3>
                    <p className="text-gray-500 mt-4">This is required when, for example, the final text is not yet available.</p>
                    <div className='mt-8'>
                        <a href="#" className='py-3 text-teal-500 rounded-sm mt-6 block'>Read More</a>
                    </div>
                </div>

                {/* Blog 2 */}
                <div className='h-auto w-full mx-auto'>
                    <img
                        src={app}
                        alt="App"
                        className="w-full h-52 my-7 transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-md"
                    />
                    <div className="flex flex-row ms-3 md:flex-row items-center justify-start my-4 space-y-2 md:space-y-0 md:space-x-6">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faCalendarDays} className="mt-1 mr-2" />
                            <span className="text-gray-500">13th March, 2000</span>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faBusinessTime} className="mt-1 mr-2" />
                            <span className="text-gray-500">13th March, 2000</span>
                        </div>
                    </div>
                    <h3 className='text-lg'>How apps are changing the IT world</h3>
                    <p className="text-gray-500 mt-4">This is required when, for example, the final text is not yet available.</p>
                    <div className='mt-8'>
                        <a href="#" className='py-3 text-teal-500 rounded-sm mt-6 block'>Read More</a>
                    </div>
                </div>

                {/* Blog 3 */}
                <div className='h-auto w-full mx-auto'>
                    <img
                        src={smart}
                        alt="Smart"
                        className="w-full h-52 my-7 transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-md"
                    />
                    <div className="flex flex-row ms-3  md:flex-row items-center justify-start my-4 space-y-2 md:space-y-0 md:space-x-6">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faCalendarDays} className="mt-1 mr-2" />
                            <span className="text-gray-500">13th March, 2000</span>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faBusinessTime} className="mt-1 mr-2" />
                            <span className="text-gray-500">13th March, 2000</span>
                        </div>
                    </div>
                    <h3 className='text-lg'>Smartest Applications for Business</h3>
                    <p className="text-gray-500 mt-4">This is required when, for example, the final text is not yet available.</p>
                    <div className='mt-8'>
                        <a href="#" className='py-3 text-teal-500 rounded-sm mt-6 block'>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
