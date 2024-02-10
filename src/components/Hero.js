import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center gap-4">
        <p className="uppercase text-[#00df9a] font-bold">
          Growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center gap-2">
          <p className="md: text-4xl sm:text-3xl text-xl font-bold">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="md: text-4xl sm:text-3xl text-xl font-bold"
            strings={["BTB", "BTC", "SAAS"]}
            typeSpeed={120}
            backSpeed={130}
            loop
          />
        </div>
        <p className="md: text-2xl text-xl font-bold text-gray-600 mx-8">
          Monitor your data analytics to increase revenue for BTB, BTC and SAAS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-lg font-medium my-6 mx-auto px-8 py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Hero;
