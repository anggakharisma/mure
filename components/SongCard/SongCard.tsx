import Image from "next/image";

const SongCard = ({ artistInfo }: SongCardProps) => {
  const { image, artistName, title, year } = artistInfo;
  return (
    <div className="relative flex items-center w-full my-24 group">
      <div className="relative mr-12 w-60 h-60">
        <div className="top-0 bottom-0 left-0 z-10 w-full h-full transition-all bg-black opacity-0 none group-hover:opacity-40 group-hover:absolute hover:cursor-pointer"></div>
        <Image layout="fill" src={image} objectFit="contain" alt="whatever" />
      </div>
      <div>
        <p className="font-medium text-primary">{artistName}</p>
        <p className="my-1 font-semibold text-sub-black">{title}</p>
        <p className="text-sub-black">{year}</p>
      </div>
    </div>
  );
};

export default SongCard;
