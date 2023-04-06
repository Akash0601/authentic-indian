import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour' />
      <h1 className='app__header-h1'>Welcome to The Royal Table</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
      Welcome to our Authentic Indian, where culinary excellence and exceptional service come together to provide a dining experience like no other.
      </p>
      {/* <button type='button' className='custom__button'>Explore Menu</button> */}
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
