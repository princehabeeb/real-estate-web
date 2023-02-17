import React from 'react';
import CountryDropdown from '../components/CountryDropdown';
import PropertyDropdown from '../components/PropertyDropdown';
import PriceRangeDropdown from '../components/PriceRangeDropdown';


const Search = () => {
  return (
  <div>
    <CountryDropdown />
    <PropertyDropdown />
    <PriceRangeDropdown />
  </div>
  );
};

export default Search;
