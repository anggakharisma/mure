import NavStyles from '../styles/Nav.module.css';
const Nav = () => {
	return (
		<div className="flex w-5/6 m-auto my-6 p-6">
			<h1 className="text-5xl mr-24 text-primary font-black tracking-tighter my-auto">MURE</h1>
			<ul className={NavStyles.NavLinkContainer}>
				<li className={NavStyles.NavLink}><a href="#">HOME</a></li>
				<li className={NavStyles.NavLink}><a href="#">TOP ARTISTS</a></li>
				<li className={NavStyles.NavLink}><a href="#">CHARTS</a></li>
				<li className={NavStyles.NavLink}><a href="#">TOP SONGS</a></li>
			</ul>
		</div>
	)
}

export default Nav;
