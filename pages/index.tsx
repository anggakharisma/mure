import type { NextPage } from "next";
import Hero from "../components/Hero";
import HomeStyle from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <div className={HomeStyle.GradientBg}></div>
    </>
  );
};

export default Home;
