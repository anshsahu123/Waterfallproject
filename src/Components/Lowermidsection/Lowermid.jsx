import Footer from "../Footer/Footer"
import Resort from "../Resort"
import Attraction from "./Attraction"
import Contentdata from "./Contentdata"
import Lowerdown from "./Lowerdown"
import Zoomimage from "./Zoomimage"
const content = () => {
  return (
    <div>
      <Contentdata></Contentdata> 
      <Zoomimage></Zoomimage>   
      <Attraction></Attraction>
      <Resort></Resort>  
      <Lowerdown></Lowerdown>
      <Footer></Footer>
    </div>
  )
}

export default content
