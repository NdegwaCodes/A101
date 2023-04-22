import React, { useContext} from 'react';
//import context
import {HouseContext} from '../context/HouseContext';
//import components
import House from '.House';
//import link
import {Link} from 'react-router-dom';
//import icons
import {ImSpinner2} from 'react-icons/ri';
const HouseList = () => {
  const { houses, loading} = useContext(HouseContext);
  //if loadiing is true
  if(loading){
    return (
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    );
  }
  if (houses.length < 1){
    return (
      <div className='mx-auto text-center mt-[200px]'>
        <h3 className='text-2xl text-gray-500'>Unfortunately no houses matched your search parameters</h3>
      </div>
    );
  }
  return <section className='mb-20'>
    <div className="container mx-auto">
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
        {houses.map((house,index) => {
          return (
            <Link to={`/property/${house.id}`} key={index}>
              <House house={house} />
            </Link>
          );
        })}
      </div>
    </div>
  </section>;
};

export default HouseList;
