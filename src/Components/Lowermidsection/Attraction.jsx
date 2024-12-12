import React from 'react';
import Tajmahal from "../images/Tajmahal.jpg";

const Attraction = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row pt-20 pb-20">
        <div className=''>
        <img 
          className="h-64 w-80 md:h-80 md:w-96 lg:h-[33.5rem] lg:w-[45rem] lg:pt-16 shadow-lg lg:absolute lg:ml-[6rem] mb-10 lg:mb-0" 
          src={Tajmahal} 
          alt="Taj Mahal" 
        />
        </div>
        <div className="h-auto w-full lg:h-[30rem] lg:w-[50rem] lg:ml-[37rem] p-8 lg:p-0 object-fill shadow-lg bg-cover bg-[url('https://res.cloudinary.com/simplotel/image/upload/w_1920,c_fill/q_80/crescent-water-park-indore/Group_584_emki5b')]">
          <p className="text-center pt-8 lg:pt-24 lg:ml-48 font-sans text-white tracking-tighter leading-tight text-2xl md:text-3xl lg:text-[3rem]">
            Attraction
          </p>
          <div className="h-[2px] w-16 md:w-20 lg:w-24 mx-auto lg:ml-[28rem] mt-3 md:mt-5 opacity-80 bg-white"></div>
          <p className="text-center mx-4 md:mx-10 lg:ml-[19rem] mt-5 leading-relaxed pr-4 md:pr-24 text-white text-sm md:text-base lg:text-lg">
            Explore the enchanting 7 Wonders Theme Park, take a refreshing dip in our infinity pool and get ready to experience the largest variety of attractions in Central India.
          </p>
          <p className="text-center mx-4 md:mx-10 lg:ml-[19rem] mt-5 leading-relaxed pr-4 md:pr-24 text-[#EE6E0C] text-sm md:text-base lg:text-lg">
            <a href="#">Know More</a>
          </p>
        </div>  
      </div>
    </div>
  );
};

export default Attraction;
