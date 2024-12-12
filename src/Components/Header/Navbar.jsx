import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Crisent from "../images/Crisent.png"; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed main w-full z-10 transition hover:bg-white hover:bg-opacity-70 duration-300 ease-in-out ${scrolled ? 'bg-white opacity-70' : 'bg-transparent'}`}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}>
      <div className='flex lg:px-20 justify-between items-center px-5 lg:py-1 sm:py-1 border-b border-white'>
        <div className='flex gap-5'>
          <div className={`text-${scrolled ? '[#0097B2]' : 'white'} ${isHovered ? 'text-cyan-800':'text-white'}`}>
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className={`text-${scrolled ? '[#0097B2]' : 'white'} ${isHovered ? 'text-cyan-800':'text-white'}`}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
        <img className='h-32 w-auto' src={Crisent} alt="Logo" />
        <button className={`py-2 rounded-sm bg-white lg:font-bold lg:px-10 ${isHovered?'bg-cyan-800':'text-white'} ${isHovered?'text-white':'text-cyan-800'}  ${scrolled ? 'text-white bg-[#0097B2]' : 'bg-transparent text-white'} transition duration-300 hidden md:block`}>
          BOOK NOW
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden text-${scrolled ? '[#0097B2]' : 'white'}`}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <div className={`flex flex-col md:flex-row justify-center md:flex md:gap-20 items-center md:gap-y-1 font-bold text-[10px] lg:text-[15px] ${isHovered ? 'text-cyan-800':'text-white'} ${scrolled ? 'text-cyan-800' : 'text-white'} transition duration-300 py-4 ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <p className='cursor-pointer'>HOME</p>
        <p className='cursor-pointer'>GALLERY</p>
        <p className='cursor-pointer'>FACILITIES</p>
        <p className='cursor-pointer'>RULES</p>
        <p className='cursor-pointer'>FRANCHIES</p>
        <p className='cursor-pointer'>CONTACT US</p>
      </div>
    </div>
  );
};

export default Navbar;
