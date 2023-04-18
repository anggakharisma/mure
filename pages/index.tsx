import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import NewWindow from "react-new-window";
import Charts from "../components/Charts/Charts";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const [popup, setPopUp] = useState<boolean>(false);
  return (
    <>
      <Hero />
      <Charts />
      <div className="mb-32"></div>
    </>
  );
};

export default Home;
