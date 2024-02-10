import Image from "next/image";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className=" w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <Image src={Laptop} alt="/" className="w-[500px]  mx-auto my-4" />
        <div className=" flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            Data Analytics Dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            corrupti cum aliquam culpa quod cupiditate qui id facere nostrum
            aperiam possimus provident deserunt dicta, ab magni aspernatur,
            consectetur exercitationem modi.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-lg font-medium my-6 mx-auto md:mx-0 px-8 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default Analytics;

// #00df9a
