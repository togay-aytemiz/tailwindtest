import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-300">
          <Image src={Single} alt="/" className="w-20 mx-auto " />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2  mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] rounded-lg font-medium my-4 mx-auto px-8 py-3 text-black">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-2xl flex flex-col p-4 md:my-0 my-10 rounded-2xl hover:scale-105 duration-300  bg-gray-100">
          <Image src={Double} alt="/" className="w-20 mx-auto " />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2  mx-8">Send up to 2GB</p>
          </div>
          <button className=" rounded-lg font-medium my-4 mx-auto px-8 py-3 text-white bg-black">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-2xl hover:scale-105 duration-300">
          <Image src={Triple} alt="/" className="w-20 mx-auto " />
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center text-4xl font-bold">$299</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2  mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] rounded-lg font-medium my-4 mx-auto px-8 py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cards;
