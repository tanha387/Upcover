import React, { useState } from 'react';
import about from '../../assets/images/project.png';
import seo from '../../assets/images/seo.png';
import results from '../../assets/images/results.png';
function Marketing_angency() {

    const [activeTab, setActiveTab] = useState('profile');


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <div className="container mx-auto p-8 xl:p-36 sm:p-4 w-full mb-9 flex flex-col xl:flex-row ">
                <ul className=" text-sm font-medium text-gray-400 dark:text-gray-400 md:me-4 mb-4 md:mb-0 border xl:h-auto md:h-auto rounded-lg p-6 shadow-md ">
                    <li>
                        <button
                            onClick={() => handleTabClick('profile')}
                            className={`text-left px-4 py-8 rounded-lg w-full hover:bg-gray-300 ${activeTab === 'profile'
                                ? 'bg-teal-400 text-white'
                                : 'bg-white text-gray-600'
                                }`}
                            aria-current="page"
                        >
                            <span className={activeTab === 'profile' ? 'text-white' : 'text-gray-500'}>Step 1</span>
                            <span className={`text-lg mt-2 block ${activeTab === 'profile' ? 'text-white' : 'text-gray-500'}`}>SEO Audit</span>
                            <span className={`mt-2 ${activeTab === 'profile' ? 'text-white' : 'text-gray-500'}`}>We offer flexible and comprehensive online marketing plans</span>
                        </button>

                    </li >
                    <li>
                        <button
                            onClick={() => handleTabClick('dashboard')}
                            className={`text-left px-4 py-8 rounded-lg w-full hover:bg-gray-300 ${activeTab === 'dashboard'
                                ? 'bg-teal-400 text-white'
                                : 'bg-white text-gray-500'
                                }`}
                            aria-current="page"
                        >
                            <span className={activeTab === 'dashboard' ? 'text-white' : 'text-gray-500'}>Step 2</span>
                            <span className={`text-lg mt-2 block ${activeTab === 'dashboard' ? 'text-white' : 'text-gray-500'}`}>Resulting and Reporting</span>
                            <span className={`mt-2 ${activeTab === 'dashboard' ? 'text-white' : 'text-gray-500'}`}>We offer flexible and comprehensive online marketing plans</span>
                        </button>

                    </li>
                    <li>
                        <button
                            onClick={() => handleTabClick('settings')}
                            className={`text-left px-4 py-8 rounded-lg w-full hover:bg-gray-300 ${activeTab === 'settings'
                                ? 'bg-teal-400 text-white'
                                : 'bg-white text-gray-500'
                                }`}
                        >
                            <span className={activeTab === 'settings' ? 'text-white' : 'text-gray-500'}>Step 3</span>
                            <span className={`text-lg mt-2 block ${activeTab === 'settings' ? 'text-white' : 'text-gray-500'}`}>Project Execution</span>
                            <span className={`mt-2 ${activeTab === 'settings' ? 'text-white' : 'text-gray-500'}`}>We offer flexible and comprehensive online marketing plans</span>
                        </button>
                    </li>

                </ul >


                <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-white  rounded-lg w-auto border">
                    {activeTab === 'profile' && (
                        <div >
                            <img src={about} alt="Hero Banner" className="" />
                            <h5 className='text-black my-6'>SEO Aduit</h5>

                            <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, impedit vitae. Nobis, similique omnis cumque sapiente laboriosam animi quod cupiditate?</p>
                            <div className='mt-8'>
                                <a className=' py-3 text-teal-500 rounded-sm mt-6'>Read More</a>
                            </div>

                        </div>
                    )}

                    {activeTab === 'dashboard' && (
                        <>

                            <img src={seo} alt="Hero Banner" className="" />
                            <h5 className='text-black my-6'>Project Execution</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, impedit vitae. Nobis, similique omnis cumque sapiente laboriosam animi quod cupiditate?</p>
                            <div className='mt-8'>
                                <a className=' py-3 text-teal-500 rounded-sm mt-6'>Read More</a>
                            </div>
                        </>
                    )}

                    {activeTab === 'settings' && (
                        <>
                            <img src={results} alt="Hero Banner" className=" " />
                            <h5 className='text-black my-6'>Results & Reporting</h5>

                            <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, impedit vitae. Nobis, similique omnis cumque sapiente laboriosam animi quod cupiditate?</p>
                            <div className='mt-8'>
                                <a className=' py-3 text-teal-500 rounded-sm mt-6'>Read More</a>
                            </div>

                        </>
                    )}


                </div>
            </div >
        </div >
    );
}

export default Marketing_angency;
