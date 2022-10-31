import type { NextPage } from "next";
import Hero from "../components/Hero";

const Home: NextPage = () => {
	return (
		<>
			<Hero />
			<div className="fixed w-screen h-screen bg-gray-300 top-40 -z-10 rotate-45 -left-1/3"></div>
		</>
	);
};

export default Home;
