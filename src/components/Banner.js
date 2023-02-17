import React from 'react';
import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return (
  <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
       <div className='flex flex-col lg:flex-row'>
           <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center'>
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
