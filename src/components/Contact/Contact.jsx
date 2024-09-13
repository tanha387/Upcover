import React from 'react'
import app from '../../assets/images/contact.png';

function Contact() {
    return (
        <div className='container px-4 md:px-8 lg:px-32 py-28 mx-auto mt-24 mb-10' id='contact'>
            <h3 className='text-center text-2xl mt-8'>Get in touch </h3>
            <p className='text-center text-gray-500 mt-5'>
                This is just a simple text made for this unique and awesome template
                <br />
                you can replace it with any text.
            </p>

            <div className='grid xl:grid-cols-2 sm:grid-cols-1 mt-20'>
                <div className=''>
                    <img
                        src={app}
                        alt="Design"
                        className="w-full h-auto "
                    />
                </div>
                <div>


                    <form class="max-w-sm mx-auto shadow-lg p-10">
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                            <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div class="mb-5">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your password</label>
                            <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div class="mb-5">
                            <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Repeat password</label>
                            <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div class="flex items-start mb-5">
                            <div class="flex items-center h-5">
                                <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-teal-600 hover:underline dark:text-teal-500">terms and conditions</a></label>
                        </div>
                        <button type="submit" class="text-white bg-teal-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Us</button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Contact