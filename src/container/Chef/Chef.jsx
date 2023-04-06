import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      < img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Message" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__wrapper-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>
          Welcome all!
          </p>
        </div>
        <p className='p__opensans'>
         As the Executive Chef, I am honored to lead our talented team of culinary professionals, 
        who are dedicated to creating exceptional dishes using only the freshest ingredients.
         Our menu is inspired by my travels and experiences around the country, 
        and I take great pride in incorporating unique flavors and techniques into our cuisine.
        </p>
      </div>

      <div className='app__chef-sign'>
        <p>Shening Dhupra</p>
        <p className='p__opensans'>Chef</p>
        {/* <img src={images.sign} alt="sign" /> */}
      </div>

    </div>
  </div>
);

export default Chef;
