import Link from "next/link";
import route from "../config/route";

import NavStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <div className="flex w-5/6 m-auto my-6 p-6 bg">
      <h1 className="text-5xl mr-24 text-primary font-black tracking-tighter my-auto">
        MURE
      </h1>
      <ul className={NavStyles.NavLinkContainer}>
        <div className="absolute top-2 left-2 bg-accent w-full h-full -z-10 rounded-full"></div>
        <div className="absolute top-4 left-4 bg-secondary w-full h-full -z-20 rounded-full"></div>
        {route.map((item) => {
          return (
            <li className={NavStyles.NavLink} key={item.id}>
              <Link href="/">{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
