import React, {useState,useEffect, createContext} from 'react';

//import data
import {housesData} from '../data';
//create context
export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [county, setCounty] = useState('Location (any)');
  const [counties, setCounties] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [bedrooms, setBedrooms] = useState('Bedrooms (any)');
  const [bedroom, setBedroom] = useState([]);
  const [bathrooms, setBathrooms] = useState('Bathrooms (any)');
  const [bathroom, setBathroom] = useState([]);
  const [price, setPrice] = useState('Price range(any)');
  const [loading, setLoading] = useState(false);
  //return all counties
  useEffect(() => {
    const allCounties= houses.map((house) => {
      return house.county;
    });
    //remove duplicates
    const uniqueCounties = ['Location (any)', ...new Set(allCounties)];
    //set counties state
    setCounties(uniqueCounties);
  },[houses]);
  //return all properties
  useEffect(() => {
    const allProperties= houses.map((house) => {
      return house.type;
    });
    //remove duplicates
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];
    //set properties state
    setProperties(uniqueProperties);
  },[houses]);
  //return all bedrooms
  useEffect(() => {
    const allBedrooms= houses.map((house) => {
      return house.bedrooms;
    });
    //remove duplicates
    const uniqueBedrooms = ['Bedrooms (any)', ...new Set(allBedrooms)];
    //set bedrooms state
    setBedroom(uniqueBedrooms);
  },[houses]);
  //return all bathrooms
  useEffect(() => {
    const allBathrooms= houses.map((house) => {
      return house.bathrooms;
    });
    //remove duplicates
    const uniqueBathrooms = ['Bathrooms (any)', ...new Set(allBathrooms)];
    //set bathrooms state
    setBathroom(uniqueBathrooms);
  },[houses]);
  //return all prices
  useEffect(() => {
    const allPrices= houses.map((house) => {
      return house.price;
    });
    //remove duplicates
    const uniquePrices = ['Price range(any)', ...new Set(allPrices)];
    //set prices state
    setPrice(uniquePrices);
  },[houses]);
  //filter houses by county
  useEffect(() => {
    setLoading(true);
    let newHouses = [...housesData];
    if(county !== 'Location (any)') {
      newHouses = newHouses.filter((house) => house.county === county);
    }
    //filter houses by property
    if(property !== 'Property type (any)') {
      newHouses = newHouses.filter((house) => house.property === property);
    }
    //filter houses by bedrooms
    if(bedrooms !== 'Bedrooms (any)') {
      newHouses = newHouses.filter((house) => house.bedrooms === bedrooms);
    }
    //filter houses by bathrooms
    if(bathrooms !== 'Bathrooms (any)') {
      newHouses = newHouses.filter((house) => house.bathrooms === bathrooms);
    }
    //filter houses by price
    if(price !== 'Price range(any)') {
      newHouses = newHouses.filter((house) => house.price === price);
    }
    setHouses(newHouses);
    setLoading(false);
  },[county, property, bedrooms, bathrooms, price]);
  }
  return ( <HouseContext.Provider value={{
  county,
  setCounty,
  counties,
  property,
  setProperty,
  properties,
  bedrooms,
  setBedrooms,
  bedroom,
  setBedroom,
  bathrooms,
  setBathrooms,
  bathroom,
  setBathroom,
  price,
  setPrice,
  loading,
  }}>{children}
  </HouseContext.Provider>
  );
};

export default HouseContextProvider;
