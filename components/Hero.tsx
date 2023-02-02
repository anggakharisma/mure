import Image from "next/image";
import HeroStyles from "../styles/Hero.module.css";
import Triangle from "./Triangle";

const Hero = () => {
  return (
    <div className={HeroStyles.hero}>
      <Triangle
        color="#9CCFE8"
        strokeWidth={7}
        width={104}
        position="top-0 right-10"
      />
      <Triangle
        color="#00FFB3"
        strokeWidth={14}
        width={50}
        position="top-18 right-52"
      />
      <Triangle
        color="#F5A9CB"
        strokeWidth={7}
        width={104}
        position="right-1/2 bottom-0"
      />

      <div className={HeroStyles.hero_image_container}>
        <Image
          src="/images/hero__image.jpg"
          alt="hero image left"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="z-30 m-auto">
        <h1 className="z-30 w-2/4 font-bold leading-snug tracking-widest text-8xl ml-28 text-primary">
          SHARE LISTEN DISCOVER
        </h1>
      </div>
    </div>
  );
};

export default Hero;
