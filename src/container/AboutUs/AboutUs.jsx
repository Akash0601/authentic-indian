import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id='about'>
   

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>
        At our Michelin-starred restaurant, we believe that dining should be an experience that engages all the senses. 
        Our chefs use only the freshest ingredients and draw inspiration from the rich culinary traditions of our region.
        </p>
        {/* <button type='button' className='custom__button'>Know More</button> */}
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>
        Our Michelin-starred restaurant has a rich history that dates back to 1980 when it first opened its doors in the heart of the city. 
        The restaurant quickly gained a reputation for its innovative cuisine, exceptional service, and luxurious atmosphere
        </p>
        {/* <button type='button' className='custom__button'>Know More</button> */}
      </div>

    </div>
  </div>
);

export default AboutUs;
