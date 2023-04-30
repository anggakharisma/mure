import Link from "next/link";

import NavStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <div className="flex items-center justify-between w-5/6 p-6 m-auto my-6 align-middle md:justify-start">
      <h1 className="my-auto mr-24 text-5xl font-black tracking-tighter text-primary">
        MURE
      </h1>
      <ul className={NavStyles.NavLinkContainer}>
        <div className="absolute w-full h-full rounded-full top-2 left-2 bg-accent -z-10"></div>
        <div className="absolute w-full h-full rounded-full top-4 left-4 bg-secondary -z-20"></div>
        <li className={NavStyles.NavLink}>
          <Link href="/">HOME</Link>
        </li>

        <li className={NavStyles.NavLink}>
          <Link href="#charts">CHARTS</Link>
        </li>

        <li className={NavStyles.NavLink}>
          <p className="hover:cursor-pointer">SIGN IN</p>
        </li>
      </ul>

			<div className="hidden h-full cursor-pointer sm:block md:hidden">
				<div className="w-2 h-2 rounded-full bg-primary"></div>
				<div className="w-2 h-2 my-2 rounded-full bg-secondary"></div>
				<div className="w-2 h-2 rounded-full bg-accent"></div>
			</div>
    </div>
  );
};

export default Nav;
