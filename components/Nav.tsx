import Link from "next/link";
import { useState } from "react";

import NavStyles from "../styles/Nav.module.css";
import { ButtonPrimary } from "./Button/Button";
import Input from "./Input/Input";
import Modal from "./Modal/Modal";

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex z-40 items-center justify-between w-5/6 p-6 m-auto my-6 align-middle md:justify-start mb-0">

      <Modal isVisible={showModal}>
        <div>
          <div className="flex flex-col relative min-w-[160px] min-h-[68vh] bg-white w-full mx-auto rounded-md pb-8">
            <p onClick={() => setShowModal(false)} className="hover:cursor-pointer absolute -right-16 top-2 p-2 text-4xl text-white">X</p>

            <div className="relative flex gap-16 pt-4 px-8 justify-around items-center align-middle border-b-[2px]">
              {
                //  !TODO: This sucks change this, if we have more than two
                //  items this will not work
              }
              <div className={`absolute left-0 ${activeTab == 0 ? 'translate-x-16 ml-1' : 'translate-x-64 ml-6'} bottom-0 w-20 h-1 bg-primary transition-all`}></div>

              <h4 onClick={() => setActiveTab(0)} className={`font-bold text-xl pb-4 text-primary hover:cursor-pointer`}>Register</h4>
              <h4 onClick={() => setActiveTab(1)} className={`font-bold text-xl pb-4 text-primary hover:cursor-pointer`}>Sign In</h4>
            </div>
            <div className="py-8">
              <h4 className="font-bold text-center text-4xl text-sub-black">Join Us</h4>
              <h4 className="text-md text-center text-gray-600">Start sharing your own song</h4>
            </div>
            <div className="w-full px-8">
              {activeTab == 0 ?
                <form className="flex flex-col" onSubmit={(e) => { e.preventDefault() }}>
                  <div className="flex flex-col gap-y-6 mb-8">
                    <Input name="name" placeholder="Name" />
                    <Input name="email" placeholder="Email" />
                    <Input type="password" name="password" placeholder="Password" />
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
                :
                <form className="flex flex-col" onSubmit={(e) => { e.preventDefault() }}>
                  <div className="flex flex-col gap-y-6 mb-8">
                    <Input name="email" placeholder="Email" />
                    <Input type="password" name="password" placeholder="Password" />
                  </div>
                  <div className="flex flex-col gap-y-4 mb-4">
                    <ButtonPrimary onClick={() => {
                      console.log(process.env.NEXT_PUBLIC_API_URL);
                    }} type="submit">
                      Sign In
                    </ButtonPrimary>
                    <ButtonPrimary type="submit">
                      Sign In with G
                    </ButtonPrimary>
                  </div>
                </form>
              }
            </div>
          </div>
        </div>
      </Modal>
      <h1 className="my-auto mr-12 text-3xl font-[900] tracking-tighter text-primary">
        MURE
      </h1>
      <ul className={NavStyles.NavLinkContainer}>
        <div className="absolute w-full h-full rounded-full bg-primary left-0 top-0 z-30"></div>
        <div className="absolute w-full h-full rounded-full top-2 left-2 bg-accent z-20"></div>
        <div className="absolute w-full h-full rounded-full top-4 left-4 bg-secondary z-10"></div>
        <li className={NavStyles.NavLink}>
          <p onClick={() => { setShowModal(true) }} className="hover:cursor-pointer text-md">UPLOAD YOUR OWN SONG</p>
        </li>
      </ul>

      <div className="h-full cursor-pointer block lg:hidden">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <div className="w-2 h-2 my-2 rounded-full bg-secondary"></div>
        <div className="w-2 h-2 rounded-full bg-accent"></div>
      </div>
    </div>
  );
};

export default Nav;
