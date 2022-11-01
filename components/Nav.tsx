import Link from 'next/link';
import NavStyles from '../styles/Nav.module.css';
const Nav = () => {
	return (
		<div className="flex w-5/6 m-auto my-6 p-6">
			<h1 className="text-5xl mr-24 text-primary font-black tracking-tighter my-auto">MURE</h1>
			<ul className={NavStyles.NavLinkContainer}>
				<div className="absolute top-2 left-2 bg-accent w-full h-full -z-10 rounded-full"></div>
				<div className="absolute top-4 left-4 bg-secondary w-full h-full -z-20 rounded-full"></div>
				<li className={NavStyles.NavLink}>
					<Link href="/">HOME</Link>
				</li>
				<li className={NavStyles.NavLink}>
					<Link href="/top-artists">TOP ARTISTS</Link>
				</li>
				<li className={NavStyles.NavLink}>
					<Link href="/top-songs">TOP SONGS</Link>
				</li>
				<li className={NavStyles.NavLink}>
					<Link href="/about">ABOUT</Link>
				</li>
			</ul>
		</div>
	)
}

export default Nav;
