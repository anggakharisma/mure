import { Search } from "../assets/icons/icons";
import { ButtonPrimary } from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import Input from "../components/Input/Input";
import Modal from "../components/Modal/Modal";
import Trending from "../components/Trending/Trending";

const Home = () => {
  return (
    <>
      <Hero />
      <form onSubmit={(e) => {
        e.preventDefault();
      }} className="w-5/6 md:w-1/2 flex mx-auto my-0 mb-16 gap-x-2">
        <input autoFocus onKeyDown={e => e.stopPropagation()} name="search" placeholder="Search for artist or song" className="w-full bg-[#ECECEC] py-6 px-8 text-md focus:border-primary focus:outline-primary" />
        <ButtonPrimary type="submit">
          <Search w={24} h={24} />
        </ButtonPrimary>
      </form>
      <div className="mb-16 w-5/6 mx-auto h-full">
        <h3 className="text-light-font-color mb-4 font-semibold text-4xl">Trending This Week</h3>
        <Trending />
      </div>
      <Footer />
      <div className="mb-20 pb-4"></div>
    </>
  );
};

export default Home;
