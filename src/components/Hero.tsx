export default function Hero() {
  return (
    <section className="pt-24 md:pt-5 pb-12 bg-gradient-to-b fromblue-50 towhite">
      {/* <div className="w-full flex items-center justify-center px-6"> */}
      {/* <div className="flex-1  flex flex-col items-center justify-center"> */}
      <div className="relative w-full">
        {/* hero image and cards */}
        <div>
          <img
            src="src/assets/images/hero-image.png"
            alt="hero-image"
            className=" w-full sm:w-[85%] lg:w-[60%] mx-auto h-full border"
          />

        </div>
        <img
          src="src/assets/images/Noise.png"
          alt="noise"
          className="w-full h-auto absolute top-0 bottom-0 right-0 left-0 opacity-70"
        />
      </div>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
}
