import InfoStyle from "../../styles/Info.module.css";
import Image from "next/image";

export const Info = () => {
  return (
    <div className="flex">
      <div className="relative mr-8 rounded-full">
        <Image
          className="rounded-full"
          src="/images/hero__image.jpg"
          alt="this is some alt"
          width={70}
          height={70}
        />
      </div>
      <div className="my-auto">
        <h2 className={InfoStyle.SongTitle}>WONDER POP</h2>
        <h3 className="font-light text-gray-500">Moe Shop</h3>
      </div>
    </div>
  );
};
