import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="object-cover py-10 text-white bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/simplotel/image/upload/w_1920,c_fill/q_80/crescent-water-park-indore/Group_583_equmfz')" }}>
        <p className="text-center px-4 md:px-16 lg:px-24 xl:mr-24 text-sm md:text-base lg:text-lg">
          Crescent Water Park, Indore <br />
          Gram Jamniya, Near Narmada Kshipra Devguradia Khurd, Kampel Rd, Indore, Madhya Pradesh - 452016
        </p>

        <div className="flex justify-center py-5 mt-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-20 items-center">
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon className="bg-white p-1 rounded-sm text-[#0097B2]" icon={faEnvelope} />
              <a href="#" className="text-sm md:text-base">ansh7567@gmail.com</a>
            </div>
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon className="bg-white text-[#0097B2] p-1 rounded-sm" icon={faPhone} />
              <p className="text-sm md:text-base">+91 8457454878</p>
            </div>
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon className="bg-white text-[#0097B2] p-1 rounded-sm" icon={faPhone} />
              <p className="text-sm md:text-base">+91 8457454878</p>
            </div>
          </div>
        </div>

        <p className="text-center text-base md:text-lg mt-5">
          Get in Touch
        </p>

        <div className="flex justify-center gap-4 mt-4">
          
            <a href="#" className="bg-white p-3 hover:bg-blue-500 hover:text-white"><FaInstagram className="text-[#0097B2] hover:text-white" /></a>          
            <a href="#" className="bg-white p-3 hover:bg-blue-500"><FaFacebookF className="text-[#0097B2] hover:text-white" /></a>
          
        </div>

        <div className="flex justify-center mt-8 border-t border-white pt-6">
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-5 text-sm md:text-base lg:text-lg">
            <li><a href="#">Home</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Facilities</a></li>
            <li><a href="#">Rules</a></li>
            <li><a href="#">Franchies</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
