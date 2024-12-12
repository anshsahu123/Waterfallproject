import Slides1 from "./images/Slides1.jpg";
import Slides2 from "./images/Slides2.jpg";
import Slides3 from "./images/Slides3.jpg";
import Slides4 from "./images/Slides4.jpg";
import Slides5 from "./images/Slides5.jpg"; // Corrected path
import  { useEffect, useState } from 'react';

const Slides = () => {
  const images = [
    {
      img: Slides1,
      heading: 'Experience',
      data: 'Experience the pure exhilaration of the white and blue Free Fall from 50 feet, where a heart-pounding drop propels you into an aquatic thrill ride that leaves you breathless.'
    },
    {
      img: Slides2,
      heading: 'Boomerango',
      data: "Plunge down the yellow and dark blue slide in a wavy free-fall frenzy, feeling the rush of the wind and water as you drop into an aquatic adventure."
    },
    {
      img: Slides3,
      heading: 'Racer',
      data: "Brace yourself for a pink-hued 90° plunge into Aqua Loop's twisty madness, defying gravity as you loop and swirl through a watery vortex of pure excitement."
    },
    {
      img: Slides4,
      heading: 'Freefall',
      data: "Venture into the red and white abyss of the Black Hole, where darkness and speed combine for an electrifying journey through turns and surprises."
    },
    {
      img: Slides5,
      heading: "Spiral Tycoon",
      data: "Spiral through a yellow and white whirlwind of excitement, where every twist and turn takes you on a high-speed journey through the slides of pure exhilaration."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGray, setIsGray] = useState(false);

  // Auto-slide effect to change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Toggle grayscale effect on and off
  useEffect(() => {
    const toggleGrayInterval = setInterval(() => {
      setIsGray((prevIsGray) => !prevIsGray);
    }, 2000);

    return () => clearInterval(toggleGrayInterval);
  }, []);

  // Get the current set of images to display for desktop
  const getVisibleImages = () => {
    return images.slice(currentIndex, currentIndex + 3).concat(
      images.slice(0, Math.max(0, (currentIndex + 3) - images.length))
    );
  };

  return (
    <div className="overflow-hidden w-full max-w-7xl mx-auto pt-14">
      {/** Mobile View - One Slide at a Time */}
      <div className="block sm:hidden">
        <div className="lg:bg-white sm:bg-transparent sm:text-white rounded-lg w-full ">
          <img
            src={images[currentIndex].img}
            alt={`Slide ${currentIndex}`}
            className={`w-full h-60 object-cover rounded-t-lg transition-all duration-1000 ${
              isGray ? 'filter grayscale' : ''
            }`}
          />
          <div className="text-center text-sm py-5 px-4 sm:text-white" style={{color:'white'}}>
            <p className="font-bold text-lg sm:text-white">{images[currentIndex].heading}</p>
            <p className="pt-2 font-thin leading-tight">{images[currentIndex].data}</p>
          </div>
        </div>
      </div>

      {/** Desktop View - Three Slides at a Time */}
      <div className="hidden sm:flex flex-row w-full transition-transform duration-500 gap-5 ease-in-out">
        {getVisibleImages().map((image, index) => (
          <div className="bg-white rounded-lg w-full sm:w-1/3 transition-opacity duration-1000" key={index}>
            <img
              src={image.img}
              alt={`Slide ${index}`}
              className={`w-full h-48 object-cover rounded-t-lg transition-all duration-1000 ${
                isGray ? 'filter grayscale' : ''
              }`}
            />
            <div className="text-center text-sm py-5 px-4">
              <p className="font-bold text-lg">{image.heading}</p>
              <p className="pt-2 font-thin leading-tight">{image.data}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slides;
