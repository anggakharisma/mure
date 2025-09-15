import Image from "next/image";
import HeroStyles from "../styles/Hero.module.css";
import Triangle from "./Triangle";

const randomDuration = (): number =>
  Math.floor(Math.random() * (4 - 1 + 2)) + 2;

const Hero = () => {
  return (
    <div className={HeroStyles.hero}>
      <div className="absolute top-1/2 left-1/2 h-full w-[90vw] lg:w-[99vw] overflow-hidden -translate-x-1/2 -translate-y-1/2">
        <Image src="/images/hero-graph.svg" alt="decoration" layout="fill" />
      </div>
      <Triangle
        color="#1CADFF"
        strokeWidth={7}
        width={104}
        position="top-0 right-10"
        duration={randomDuration()}
      />

      <Triangle
        color="#00FF75"
        strokeWidth={14}
        width={50}
        position="top-18 right-20"
        duration={randomDuration()}
      />

      <Triangle
        color="#FF59A3"
        strokeWidth={7}
        width={104}
        position="right-1/2 bottom-0"
        duration={randomDuration()}
      />

      <div className={HeroStyles.hero_image_container}>
        <Image
          src="/images/hero__image.jpg"
          alt="hero image left"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute -bottom-4 -z-10 left-0 right-0 h-40 bg-red-400 rounded-2xl" />
        <div className="absolute -bottom-8 -z-20 left-0 right-0 h-40 bg-primary rounded-2xl" />
      </div>

      <div className="z-30 mx-auto lg:block lg:relative">
        <h1
          data-text="SHARE LISTEN DISCOVER"
          style={{ lineHeight: "1.3em" }}
          className="z-30 mx-auto font-black leading-snug text-center lg:w-2/4 lg:text-[90px] lg:ml-0 text-accent text-6xl title-shadow lg:text-left tracking-wider"
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
