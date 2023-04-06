import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu That Fits your Palatte" />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>    

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_appetizers flex__center'>
        <p className='app__specialMenu-menu_heading'>Appetizers</p>
        <div className='app__specialMenu_menu_items'>
          {data.appetizers.map((appetizers, index) => (
            <MenuItem key={appetizers.title + index} title={appetizers.title} price={appetizers.price} tags={appetizers.tags} />
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt='menu img' />
      </div>

      <div className='app__specialMenu-menu_specials flex__center'>
        <p className='app__specialMenu-menu_heading'>House Special</p>
        <div className='app__specialMenu_menu_items'>
          {data.specials.map((specials, index) => (
            <MenuItem key={specials.title + index} title={specials.title} price={specials.price} tags={specials.tags} />
          ))}
        </div>
      </div>

    </div>
    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
