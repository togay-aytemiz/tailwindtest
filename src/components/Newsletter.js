const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-3 items-center">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date!</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full rounded-lg flex text-black"
            />
            <button className="bg-[#00df9a] sm:w-[250px] w-[100%] rounded-lg font-medium my-4 mx-auto px-8 py-3 text-black sm:ml-4">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a] hover:underline cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
