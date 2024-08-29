import React from 'react';
import icon from '../../assets/images/footer.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faPinterest, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-16 bg-black'>

            <div className='flex items-center justify-center'>
                <img src={icon} alt="Upcover Logo" className="h-10 w-32" />
            </div>


            <div className='flex items-center justify-center lg:justify-start'>
                <p className='text-white text-center lg:text-left text-sm md:text-base'>
                    © 2024 Upcover. Design & Develop by Shreethemes.
                </p>
            </div>


            <div className='flex items-center justify-center lg:justify-end space-x-4'>
                <FontAwesomeIcon icon={faFacebook} size="2x" color="#4267B2" />
                <FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2" />
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#E4405F" />
                <FontAwesomeIcon icon={faPinterest} size="2x" color="#E60023" />
                <FontAwesomeIcon icon={faYoutube} size="2x" color="#FF0000" />
            </div>
        </div>
    );
}

export default Footer;
