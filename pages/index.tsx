import type { NextPage } from "next";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <div className="w-10/12 m-auto mt-16 p-4" id="charts">
        <h1 className="text-4xl text-black font-semibold mb-4 inline-block bg-secondary px-4 py-2">
          Charts
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          pariatur quisquam quo officia fugit maiores, nesciunt numquam ab
          voluptas perferendis tempore necessitatibus obcaecati quis ea, rerum
          saepe dicta facilis ullam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Architecto pariatur quisquam quo officia fugit
          maiores, nesciunt numquam ab voluptas perferendis tempore
          necessitatibus obcaecati quis ea, rerum saepe dicta facilis ullam?
        </p>
      </div>
    </>
  );
};

export default Home;
