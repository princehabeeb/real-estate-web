import React from 'react';
import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return (
  <section>
       <div>
           <div>
            <h1><span>Rent</span> Your Dream House With Us.</h1>
             <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Necessitatibus sapiente error, blanditiis incidunt aperiam ab 
              nostrum voluptatibus earum dignissimos sed!
              </p>
           </div>
           {/* images */}
           <div>
            <img src={Image} alt="" />
           </div>
       </div>
       <Search />
  </section>
  );
};

export default Banner;
