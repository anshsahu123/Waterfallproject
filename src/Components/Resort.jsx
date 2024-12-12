const Resortspa = () => {
  return (
    <div>
      <div
        className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://homesweb.staah.net/imagelibrary/1627479914_2874_EXTERIOR__(4).jpg')`,
        }}
      >
        {/* Gradient overlay to reduce opacity from top to bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-50 opacity-100 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-64">
          <p className="text-center mt-8 sm:mt-12 lg:mt-16 text-[#EE6E0C] text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-bold leading-tight tracking-tighter">
            Crescent Spa & Resort, Indore
          </p>
          <p className="text-center mt-6 sm:mt-8 lg:mt-14 text-sm sm:text-base lg:text-lg leading-relaxed">
            Experience a day of thrilling water adventures and then unwind at our adjoining resort for a truly blissful escape. Extend the magic of your visit by exploring the captivating beauty of Indore while resting in the comfort of Crescent Resort – where the fun never ends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resortspa;
