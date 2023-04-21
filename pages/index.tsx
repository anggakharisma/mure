import type { NextPage } from "next";
import Charts from "../components/Charts/Charts";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Charts />
      <div className="mb-32"></div>
    </>
  );
};

export default Home;
