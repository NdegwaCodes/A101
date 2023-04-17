import React from 'react';
//import icons
import { BiBed, BiBath, BiArea} from 'react-icons/bi';

const House = ({House}) => {
  const { image, type, county, address, bedrooms, bathrooms, surface, price} = house;
  return (
    <div>
      <image src={image} alt=''/>
      <div className='flex justify-between items-center'>
        </div>
    </div>
  );
};

export default House;
