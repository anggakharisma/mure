import { useState } from "react";
import { Search } from "../assets/icons/icons";
import { ButtonPrimary } from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import Input from "../components/Input/Input";
import Modal from "../components/Modal/Modal";
import Trending from "../components/Trending/Trending";

const Home = () => {
  const [authModalVisible, setAuthModalVisible] = useState(true);
  return (
    <>
      <Hero />
      <Modal isVisible={authModalVisible}>
        <div>
          <div className="bg-white w-full mx-auto rounded-md pb-8">
            <div className="flex gap-16 pt-4 px-8 justify-around items-center align-middle border-gray-200 border-b-[2px]">
              <h4 className="font-bold text-xl pb-4 text-primary border-primary border-b-[4px] hover:cursor-pointer">Register</h4>
              <h4 className="font-bold text-xl pb-4 text-primary hover:cursor-pointer">Sign In</h4>
            </div>
            <div className="py-8">
              <h4 className="font-bold text-center text-4xl text-gray-700">Join Us</h4>
              <h4 className="text-md text-center text-gray-600">Start sharing your own song</h4>
            </div>
            <div className="w-full px-8">
              <form className="flex flex-col" onSubmit={(e) => { e.preventDefault() }}>
                <div className="flex flex-col gap-y-6 mb-8">
                  <Input name="name" placeholder="Name"  />
                  <Input name="email" placeholder="Email" />
                  <Input name="password" placeholder="Password" />
                </div>
                <div className="flex flex-col gap-y-4 mb-4">
                  <ButtonPrimary type="submit">
                    Register
                  </ButtonPrimary>
                  <ButtonPrimary type="submit">
                    Register with G
                  </ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
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
