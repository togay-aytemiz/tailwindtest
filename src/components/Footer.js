import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magnam
          voluptatem aut quibusdam at repellendus totam eos quae in illo!
        </p>
        <div className="flex md:w-[75%] justify-start gap-2 my-2">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaGithubSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex flex-col sm:flex-row justify-between mt-8 mx-8 gap-8 items-center text-center sm:text-left">
        <div>
          <h6 className="font-bold text-gray-400 mb-2 uppercase">Solutions</h6>
          <ul>
            <li className="py-1 text-sm">Analytics</li>
            <li className="py-1 text-sm">Marketing</li>
            <li className="py-1 text-sm">Commerce</li>
            <li className="py-1 text-sm">Insight</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold text-gray-400 mb-2 uppercase">Support</h6>
          <ul>
            <li className="py-1 text-sm">Pricing</li>
            <li className="py-1 text-sm">Documents</li>
            <li className="py-1 text-sm">Guides</li>
            <li className="py-1 text-sm">Resouces</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold text-gray-400 mb-2 uppercase">Company</h6>
          <ul>
            <li className="py-1 text-sm">About</li>
            <li className="py-1 text-sm">Blog</li>
            <li className="py-1 text-sm">Career</li>
            <li className="py-1 text-sm">Press Releases</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold text-gray-400 mb-2 uppercase">Legal</h6>
          <ul>
            <li className="py-1 text-sm">Claim</li>
            <li className="py-1 text-sm">Policy</li>
            <li className="py-1 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
