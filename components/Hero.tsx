import Image from "next/image";
import HeroStyles from "../styles/Hero.module.css";
import Triangle from "./Triangle";

const randomDuration = (): number =>
  Math.floor(Math.random() * (4 - 1 + 2)) + 2;

const Hero = () => {
  return (
    <div className={HeroStyles.hero}>
      <Triangle
        color="#9CCFE8"
        strokeWidth={7}
        width={104}
        position="top-0 right-10"
        duration={randomDuration()}
      />

      <Triangle
        color="#00FFB3"
        strokeWidth={14}
        width={50}
        position="top-18 right-52"
        duration={randomDuration()}
      />

      <Triangle
        color="#F5A9CB"
        strokeWidth={7}
        width={104}
        position="right-1/2 bottom-0"
        duration={randomDuration()}
      />

      <div className={HeroStyles.hero_image_container}>
        <div className="absolute z-10 block w-full h-full opacity-[72.5%] lg:opacity-0 bg-dark-primary lg:relative lg:none"></div>
        <Image
          src="/images/hero__image.jpg"
          alt="hero image left"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute z-30 m-auto lg:block lg:relative">
        <h1
          style={{ lineHeight: "1.35em" }}
          className="z-30 m-auto text-5xl font-bold leading-snug tracking-widest text-center lg:w-2/4 lg:text-[5rem] lg:ml-0 text-primary title-shadow lg:text-left"
        >
          SHARE
          <br /> LISTEN
          <br /> DISCOVER
        </h1>
      </div>
    </div>
  );
};

export default Hero;
