import Waterfall from "../Components/images/Waterfall.mp4";

const Body = () => {
  return (
    <div className="w-screen lg:w-full ">
      <div>
        <video
          className="top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline src={Waterfall}
        ></video>
      </div>
    </div>
  );
};

export default Body;

