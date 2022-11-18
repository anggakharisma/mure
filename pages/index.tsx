import type { NextPage } from "next";
import Charts from "../components/Charts/Charts";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Charts />
    </>
  );
};

export default Home;
