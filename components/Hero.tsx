import HeroStyles from '../styles/Hero.module.css';
const Hero = () => {
	return (
		<div className="flex w-5/6 bg-red-300 m-auto my-6 p-6">
			<h1 className="text-5xl mr-24">MURE</h1>
			<ul className="flex my-auto">
				<li className={HeroStyles.NavLink}><a href="#">HOME</a></li>
				<li className={HeroStyles.NavLink}><a href="#">TOP ARTISTS</a></li>
				<li className={HeroStyles.NavLink}><a href="#">CHARTS</a></li>
				<li className={HeroStyles.NavLink}><a href="#">TOP SONGS</a></li>
			</ul>
		</div>
	)
}

export default Hero;
