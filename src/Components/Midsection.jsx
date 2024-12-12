
import Slidessection from "./Slidessection"
import Scrollbar from "./Scrollbar"
import Aftermid from "./Aftermid";

const Midsection = () => {
  return (
    <>
    <div className="px-4 md:px-10 lg:px-20">
      <div className="text-[#F47C1F] py-10 font-bold text-2xl md:text-3xl lg:grid lg:place-items-center">
        <p>Welcome To Crisent Water Park</p>
        <p>Indore's Ultimate Splash-Tastic Heaven!</p>
      </div>
      <div className="flex flex-col md:flex-row lg:flex lg:flex-col lg:mt-5 lg:px-28 lg:text-center">
        <div className="mb-5 md:mb-0 ">
          <p>Tired of the same old 9-5 grind and never-ending assignments? Craving an escape that's packed with thrill and excitement? Well, guess what?</p>
          <p className="">Your perfect weekend getaway is right here, waiting for you at our amazing water park in Indore!</p>
        </div>
        <div className="lg:mt-5">
          <p>Get ready to ditch the mundane and dive into a world of pure adventure and fun. Let's make your weekend memorable at one of the best water <br /> parks in India, shall we?</p>
        </div>
      </div>
    </div>
    <Scrollbar></Scrollbar>
    <Aftermid></Aftermid>
    <Slidessection></Slidessection>

    </>
    
  );
};

export default Midsection;
