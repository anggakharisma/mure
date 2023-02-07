import SongCard from "../SongCard/SongCard";

const Charts = () => {
	return (
		<div className="w-full">
			<div className="w-10/12 p-4 m-auto mt-16 mb-24" id="charts">
				<h1 className="inline-block mb-4 text-6xl font-semibold tracking-widest text-primary">
					CHARTS
				</h1>
				<div className="flex justify-around w-full px-16 py-4 font-medium text-white bg-primary">
					<div>
						<h2 className="text-3xl tracking-widest text-center">NEW ARTISTS</h2>
					</div>
					<div>
						<h2 className="text-3xl tracking-widest text-center">NEW ARTISTS</h2>
					</div>
				</div>
				<div className="flex w-full">
					<div className="justify-between w-full mx-32 my-4 font-medium text-white flex-column">
						<SongCard artistInfo={{
							artistName: "Moe Shop",
							title: "You look so good",
							image: "/images/hero__image.jpg",
							year: "2024"
						}} />
						<SongCard artistInfo={{
							artistName: "Moe Shop",
							title: "You look so good",
							image: "/images/hero__image.jpg",
							year: "2024"
						}} />
						<SongCard artistInfo={{
							artistName: "Moe Shop",
							title: "You look so good",
							image: "/images/hero__image.jpg",
							year: "2024"
						}} />
					</div>
					<div className="justify-between w-full mx-32 my-4 font-medium text-white flex-column">
						<SongCard artistInfo={{
							artistName: "Moe Shop",
							title: "You look so good",
							image: "/images/hero__image.jpg",
							year: "2024"
						}} />
						<SongCard artistInfo={{
							artistName: "Moe Shop",
							title: "You look so good",
							image: "/images/hero__image.jpg",
							year: "2024"
						}} />
						<SongCard artistInfo={{
							artistName: "Moe Shop",
							title: "You look so good",
							image: "/images/hero__image.jpg",
							year: "2024"
						}} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Charts;
