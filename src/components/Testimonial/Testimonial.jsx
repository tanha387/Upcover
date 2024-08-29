import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import about from '../../assets/images/project.png';

const slideData = [
    {
        quote: "There is now an abundance of readable dummy texts. These are usually used when a text is required",
        name: "Jemina CLone",
        title: "Manager",
        image: about,
        rating: 3,
    },
    {
        quote: "There is now an abundance of readable dummy texts. These are usually used when a text is required",
        name: "Jemina CLone",
        title: "Manager",
        image: about,
        rating: 3,
    },
    {
        quote: "There is now an abundance of readable dummy texts. These are usually used when a text is required",
        name: "Jemina CLone",
        title: "Manager",
        image: about,
        rating: 3,
    },
    {
        quote: "There is now an abundance of readable dummy texts. These are usually used when a text is required",
        name: "Jemina CLone",
        title: "Manager",
        image: about,
        rating: 3,
    },

];


const Testimonial = () => {
    return (
        <div className='container px-4 sm:px-8 md:px-16 lg:px-32 xl:px-32 mx-auto' id="testimonial">
            <h3 className='text-center text-2xl mt-8'>What Our Users Say</h3>
            <p className='text-center text-gray-500 mt-5'>
                This is just a simple text made for this unique and awesome template,
                <br />
                you can replace it with any text.
            </p>
            <Swiper
                className='mt-24'
                modules={[Pagination, A11y, Autoplay]}
                spaceBetween={30}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    // when window width is <= 640px
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    // when window width is <= 768px
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    // when window width is <= 1024px
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {slideData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='h-56 border p-4 lg:h-auto sm:p-6 md:p-8 lg:p-9'>
                            <div className='flex items-center justify-center w-auto'>
                                <FontAwesomeIcon icon={faQuoteLeft} className='text-teal-500 w-12 h-auto' />
                            </div>

                            <p className='text-center text-slate-400'>"There is now an abundance of readable dummy texts. These are usually used when a text is required"</p>
                            <div className='star-rating flex items-center justify-center my-6'>
                                <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                                <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                                <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                                <FontAwesomeIcon icon={faStar} className='text-gray-400' />
                                <FontAwesomeIcon icon={faStar} className='text-gray-400' />
                                <FontAwesomeIcon icon={faStar} className='text-gray-400' />
                                <FontAwesomeIcon icon={faStar} className='text-gray-400' />
                            </div>
                        </div>

                        <img src={about} alt="Hero Banner" className="size-14 mx-auto rounded-full" />
                        <div className='text-center'>
                            <h6 className='text-center'>{slide.name}</h6>
                            <span className='text-center'>{slide.title}</span>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

export default Testimonial;
