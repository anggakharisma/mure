import Image from "next/image";
import HeroStyles from "../styles/Hero.module.css";
import Triangle from "./Triangle";

const Hero = () => {
  return (
    <div className={HeroStyles.hero}>
      <Triangle color="#9CCFE8" width={104} position="top-0 right-10" />
      <div className="absolute top-16 right-48">
        <svg
          width="50"
          height="104"
          viewBox="0 0 90 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.02851 97.7448L4.02851 6.81218L82.7785 52.2785L4.02851 97.7448Z"
            stroke="#00FFB3"
            stroke-width="9"
          />
        </svg>
      </div>

      <div className={HeroStyles.hero_image_container}>
        <Image
          src="/images/hero__image.jpg"
          alt="hero image left"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="m-auto z-30">
        <h1 className="text-8xl ml-28 w-2/4 leading-snug text-primary font-bold tracking-widest z-30">
          SHARE LISTEN DISCOVER
        </h1>
      </div>
    </div>
  );
};

export default Hero;
