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

    const handleClick = () => {
      //set loading
      setLoading(true);
      //create a function that checks if the string includes '(any)
      const isDefault = (str) => {
        return str.split('').includes('(any)');
      };
      //get first value of price and parse it to number
      const minPrice = parseInt(price.split('')[0]);
      //get second value of price
      const maxPrice = parseInt(price.split('')[2]);
      //
      const newHouses = housesData.filter((house) => {
        const housePrice = parseInt(house.price);
        //if all values are selected
        if(
          house.country === country &&
          house.type===property &&
          housePrice >= minPrice &&
          housePrice <= maxPrice
          ){
          return house;
        }
        //if all values are default
        if(!isDefault(county) && isDefault(property) && isDefault(price)){
          return house;
        }
        //if country is default
        if(!isDefault(county) && isDefault(property) && isDefault(price)) {
          return house.country === country;
        }
        //if property is not default
        if(!isDefault(county) && !isDefault(property) && isDefault(price)) {
          return house.type === property;
        }
        //if price is not default
        if(!isDefault(county) && isDefault(property) && !isDefault(price)) {
          if(housePrice >= minPrice && housePrice <= maxPrice){
            return house;
          };
        }
        //if county and property is not default
        if(!isDefault(county) && !isDefault(property) && isDefault(price)) {
          return house.country === country && house.type === property;
        }
        //if county and price is not default
        if(!isDefault(county) && isDefault(property) && !isDefault(price)) {
          if(housePrice >= minPrice && housePrice <= maxPrice){
            return house.country === country;
          };
        }
        //if property and price is not default
        if(isDefault(county) && !isDefault(property) && !isDefault(price)) {
          if(housePrice >= minPrice && housePrice <= maxPrice){
            return house.type === property;
          };
        }
      });
      setTimeout(() =>{
        return newHouses.length < 1 ? setHouses([]):
        setHouses(newHouses);
        setLoading(false);
      }, 1000 );
    };

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
  };
  return ( 
  <HouseContext.Provider value={{
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
  handleClick,
  setLoading,
  }}>{children}
  </HouseContext.Provider>
  );
  

export default HouseContextProvider;
