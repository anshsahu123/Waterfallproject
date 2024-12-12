import Body from "./Body"
import Navbar from "./Header/Navbar"
import Midsection from "./Midsection"
import Lowermid from "./Lowermidsection/Lowermid"


const Hero = () => {
  return (
    <div className=" lg:w-full w-screen bg-[#F3FFFD]">
      <Navbar></Navbar>
      <Body></Body>
      <Midsection></Midsection>
      <Lowermid></Lowermid>
    </div>
  )
}

export default Hero
