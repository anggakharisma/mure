import Link from "next/link";
import route from "../config/route";

import NavStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <div className="flex w-5/6 p-6 m-auto my-6">
      <h1 className="my-auto mr-24 text-5xl font-black tracking-tighter text-primary">
        MURE
      </h1>
      <ul className={NavStyles.NavLinkContainer}>
        <div className="absolute w-full h-full rounded-full top-2 left-2 bg-accent -z-10"></div>
        <div className="absolute w-full h-full rounded-full top-4 left-4 bg-secondary -z-20"></div>
        {route.map((item) => {
          return (
            <li className={NavStyles.NavLink} key={item.id}>
              <Link href={item.to}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
