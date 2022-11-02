import Image from "next/image";
import HeroStyles  from '../styles/Hero.module.css';

const Hero = () => {
	return (
		<div className={HeroStyles.hero}>
			<div className={HeroStyles.hero_image_container}>
				<Image src="/images/hero__image.jpg" alt="hero image left" layout="fill" objectFit="contain" />
			</div>
			<div className="m-auto">
				<h1 className="text-8xl ml-28 w-2/4 leading-snug text-primary font-bold  tracking-widest">SHARE LISTEN DISCOVER</h1>
			</div>
		</div>
	);
}

export default Hero;