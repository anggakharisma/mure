import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { UserContext, UserContextType } from "../context/userContext";
import { headersDefault } from "../helpers/header";

import NavStyles from "../styles/Nav.module.css";
import { ButtonPrimary } from "./Button/Button";
import Input from "./Input/Input";
import Modal from "./Modal/Modal";

const Nav = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext) as UserContextType;
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [respMessage, setRespMessage] = useState('');
  const registerRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const [registerData, setRegisterData] = useState<{ email: string, password: string, name: string }>({
    email: '',
    password: '',
    name: ''
  });

  const handleInputChange = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    setRegisterData((prevValue) => {
      const target = e.target as HTMLInputElement;

      return {
        ...prevValue,
        [target.name]: target.value
      }
    });
  }

  const onSubmitRegister = async (event: any) => {
    event.preventDefault();
    try {
      const regReq = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/register/`, {
        method: 'POST',
        headers: headersDefault,
        body: JSON.stringify(registerData),
      });
      const regResp = await regReq.json();
      if (!regReq.ok) throw regResp;

      setRespMessage(regResp.message);
    } catch (e: any) {
      setRespMessage(e.message);
    }

    setTimeout(() => setRespMessage(''), 1000);
  }

  const onSubmitLogin = async (event: any) => {
    event.preventDefault();
    try {
      const regReq = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/`, {
        method: 'POST',
        headers: headersDefault,
        body: JSON.stringify(registerData),
      });
      const regResp = await regReq.json();
      if (!regReq.ok) throw regResp;

      setRespMessage(regResp.message);
      setUser({
        email: regResp.userInfo.email,
        id: regResp.userInfo.id,
        token: regResp.token,
      });

      setShowModal(false);
      router.push('/dashboard');
    } catch (e: any) {
      setRespMessage(e.message);
    }

    setTimeout(() => setRespMessage(''), 1000);
  }

  return (
    <div className="flex z-40 items-center justify-between w-5/6 p-6 m-auto my-6 align-middle md:justify-start mb-0">
      <Modal isVisible={showModal}>
        <div>
          <div className="flex flex-col relative min-w-[160px] bg-white w-full mx-auto rounded-md pb-8 transition-all">
            {respMessage && <div className="absolute rounded-md text-white font-bold top-10 left-1/2 -translate-x-1/2 bg-emerald-400 px-4 py-2 z-40">
              {respMessage}
            </div>}
            <p onClick={() => setShowModal(false)} className="hover:cursor-pointer absolute -right-16 top-0 p-2 text-4xl text-white">X</p>

            <div className="relative flex gap-16 pt-4 px-8 justify-around items-center align-middle border-b-[2px]">
              {
                //  !TODO: This sucks change this, if we have more than two
                //  items this will not work
                //  or make tabs compoonent(?)
              }
              <div className={`absolute left-0 ${activeTab == 0 ? 'translate-x-16' : 'translate-x-64 ml-4'} bottom-0 w-24 h-1 bg-primary transition-all`}></div>

              <h4 onClick={() => {
                setActiveTab(0);
                registerRef.current?.reset();
              }} className={`font-bold text-xl pb-4 text-primary hover:cursor-pointer`}>Register</h4>
              <h4 onClick={() => {
                setActiveTab(1);

                registerRef.current?.reset();
              }} className={`font-bold text-xl pb-4 text-primary hover:cursor-pointer`}>Sign In</h4>
            </div>
            <div className="py-8">
              <h4 className="font-bold text-center text-4xl text-sub-black">Join Us</h4>
              <h4 className="text-md text-center text-sub-black">Start sharing your own song</h4>
            </div>
            <div className="w-full px-8">
              {activeTab == 0 ?
                <form name="register-form" ref={registerRef} className="flex flex-col" onSubmit={onSubmitRegister}>
                  <div className="flex flex-col gap-y-6 mb-8">
                    <Input onChange={handleInputChange} name="name" required placeholder="Name" />
                    <Input onChange={handleInputChange} name="email" type="email" required placeholder="Email" />
                    <Input onChange={handleInputChange} name="password" type="password" required placeholder="Password" />
                  </div>
                  <div className="flex flex-col gap-y-4 mb-4">
                    <ButtonPrimary type="submit">
                      Register
                    </ButtonPrimary>
                    <ButtonPrimary type="button">
                      Register with G
                    </ButtonPrimary>
                  </div>
                </form>
                :
                <form name="login-form" className="flex flex-col" onSubmit={onSubmitLogin}>
                  <div className="flex flex-col gap-y-6 mb-8">
                    <Input onChange={handleInputChange} name="email" placeholder="Email" />
                    <Input onChange={handleInputChange} type="password" name="password" placeholder="Password" />
                  </div>
                  <div className="flex flex-col gap-y-4 mb-4">
                    <ButtonPrimary onClick={() => {
                      console.log(process.env.NEXT_PUBLIC_API_URL);
                    }} type="submit">
                      Sign In
                    </ButtonPrimary>
                    <ButtonPrimary type="button">
                      Sign In with G
                    </ButtonPrimary>
                  </div>
                </form>
              }
            </div>
          </div>
        </div>
      </Modal>
      <Link href='/'>
        <h1 className="my-auto mr-12 text-3xl font-[900] tracking-tighter text-primary hover:cursor-pointer">
          MURE
        </h1>
      </Link>
      <ul className={NavStyles.NavLinkContainer}>
        <div className="absolute w-full h-full rounded-full bg-primary left-0 top-0 z-30"></div>
        <div className="absolute w-full h-full rounded-full top-2 left-2 bg-accent z-20"></div>
        <div className="absolute w-full h-full rounded-full top-4 left-4 bg-secondary z-10"></div>
        {user === null ?
          <li className={NavStyles.NavLink}>
            <p onClick={() => { setShowModal(true) }} className="hover:cursor-pointer text-md">UPLOAD YOUR OWN SONG</p>
          </li> :
          <>
            <li className={NavStyles.NavLink}>
              <Link href={`/profile/${user.id}`} className="hover:cursor-pointer text-md">UPLOAD SONG</Link>
            </li>
          </>
        }

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
