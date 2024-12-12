import "./styling.css"
import image2 from "../Components/images/image2.jpg"
import Image3 from "../Components/images/image3.jpg"
import Image4 from "../Components/images/image4.jpg"
import Image5 from "../Components/images/image5.jpg"
import Image6 from "../Components/images/image6.jpg"
import image7 from "../Components/images/image7.jpg"

const HorizontalScrollBar = () => {
  const images = [
   image2, Image3, Image4, Image5,Image6, image7
  ];

  return (
    <div className="overflow-x-auto whitespace-nowrap scrollbar-hidden p-4 lg:w-full w-screen">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={''}
          className="inline-block  w-[250px] h-[250px] lg:w-[600px] lg:h-[600px] object-cover rounded-lg mr-4"
        />
      ))}
    </div>
  );
};

export default HorizontalScrollBar;
