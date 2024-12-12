import zoom1 from "../images/zoom1.png";
import Zoom2 from "../images/Zoom2.png";
import zoom3 from "../images/zoom3.png";
import React from 'react';

const Zoomimage = () => {
  return (
    <div>
      <div className="flex flex-row sm:flex-row justify-center px-10 gap-4 sm:gap-7">
        <div className="overflow-hidden">
          <img src={zoom1} alt="" className="h-36 w-52 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-[25rem] xl:w-[25rem] object-cover delay-150 transition-transform duration-500 ease-in transform hover:scale-110" />
        </div>
        <div className="overflow-hidden">
          <img src={Zoom2} alt="" className="h-36 w-52 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-[25rem] xl:w-[25rem] object-cover delay-150 transition-transform duration-500 ease-in transform hover:scale-110" />
        </div>
        <div className="overflow-hidden">
          <img src={zoom3} alt="" className="h-36 w-52 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-[25rem] xl:w-[25rem] object-cover delay-150 transition-transform duration-500 ease-in transform hover:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default Zoomimage;
