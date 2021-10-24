import HeroImage from "../images/hero.png";
import Image from "next/image";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-between max-w-xl pt-0 pb-12 px-4 mx-auto lg:py-24 lg:flex-row md:px-8 lg:max-w-screen-xl">
        <div className="pt-24 pb-12 mb-8 lg:mb-0 lg:pt-12 lg:max-w-xl lg:pr-5 text-center md:text-left">
          <div className="max-w-xl mb-6">
            <h1 className="max-w-xl mb-6 text-4xl font-extrabold text-gray-900 sm:text-6xl md:leading-none leading-tighten">
              Discover You:&nbsp;
              <span className="pb-2 inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Cyber
              </span>
              store
            </h1>
            <h2 className="text-gray-600 text-base">
              Whatever ups and downs you may have encountered this year, the
              eCommerce market is still expanding bigger and brighter as ever.
              As we approach a new year, we’re here to give you an exclusive
              sneak peek of the eCommerce growth trends in 2022 and beyond.
            </h2>
          </div>
          <div className="flex justify-center md:justify-start z-50 items-center">
            <Link to="products" spy={true} smooth={true}>
              <p className="cursor-pointer inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide py-3 border-transparent text-base rounded-full text-white bg-gradient-to-r from-indigo-400 to-pink-500 shadow-xl hover:from-indigo-300 hover:to-pink-400 ">
                Discovery now
              </p>
            </Link>
            <Link to="products" spy={true} smooth={true}>
              <p className="cursor-pointer inline-flex items-center font-semibold text-base transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                Learn more
              </p>
            </Link>
          </div>
        </div>
        <div className="lg:w-2/5 mx-auto lg:mx-0">
          <Image
            src={HeroImage}
            alt="Hero"
            objectFit="cover"
            className="w-full "
          />
        </div>
      </div>

      <div
        id="slogan"
        className="max-w-xl mx-auto py-12 px-4 sm:px-8 lg:max-w-4xl"
      >
        <p className="mb-3 text-2xl font-bold tracking-tight text-center  sm:text-xl sm:leading-none">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Extremely&nbsp;
          </span>
          shopping experience
        </p>
        <p className="text-3xl font-bold tracking-tight text-center text-gray-800 sm:text-3xl sm:leading-none">
          Better experience, make&nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            smarter business&nbsp;
          </span>
          decisions and discovery top trending anywhere.
        </p>
      </div>
    </>
  );
};

export default Hero;
