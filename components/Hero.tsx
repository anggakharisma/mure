import Image from "next/image";
import HeroStyles  from '../styles/Hero.module.css';

const Hero = () => {
	return (
		<div className={HeroStyles.hero}>
			<div className="w-10/12 relative rounded-full mr-12">
				<Image src="/images/hero__image.jpg" alt="hero image left" layout="fill" objectFit="contain"/>
			</div>
			<div className="m-auto text-primary font-bold">
				<h1 className="text-8xl w-3/4 m-auto leading-snug">SHARE LISTEN DISCOVER</h1>
			</div>
		</div>
	);
}

export default Hero;