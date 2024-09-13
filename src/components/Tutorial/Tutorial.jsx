import React, { useState } from 'react';
import about from '../../assets/images/home.png';
import aboutt from '../../assets/images/play.png';

function Tutorial() {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <div className="relative mt-64">

            <img
                src={about}
                alt="Hero Banner"
                className="mx-auto mt-24 w-full max-w-5xl lg:max-w-6xl"
            />

            <div className="absolute inset-0 flex items-center justify-center">
                <button
                    onClick={toggleModal}
                    className="flex items-center justify-center focus:outline-none"
                    type="button"
                >
                    <img src={aboutt} alt="Play Button" className="w-32" />
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg overflow-hidden max-w-lg w-full mx-4">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/S_CGed6E610"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                        <div className="flex justify-end p-2">
                            <button
                                onClick={toggleModal}
                                className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            >
                                Close modal
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="w-full bg-teal-500 absolute  z-50  h-60">
            </div>
        </div>
    );
}

export default Tutorial;
