import Image from "next/image";

const SongCard = ({ artistInfo }: SongCardProps) => {
	const { image, artistName, title, year } = artistInfo;
	return <div className="flex items-center w-full my-24">
		<div className="relative mr-8 w-60 h-60">
			<Image
				layout="fill"
				src={image}
				objectFit="contain"
				alt="whatever"
			/>
		</div>
		<div>
			<p className="font-medium text-primary">{artistName}</p>
			<p className="my-1 font-semibold text-sub-black">{title}</p>
			<p className="text-sub-black">{year}</p>
		</div>
	</div>
}

export default SongCard;