import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const links = [
  { to: "/grid-base", label: "Grid Base" },
  { to: "/flex-base", label: "Flex Base" },
  { to: "/insta", label: "Insta" },
];

export const Navbar = () => {
  return (
    <header>
      <h1 className={s.title}>My Personal SuperApp</h1>
      <h2 className={s.section}>Layout</h2>
      <nav className={s.nav} aria-label="Main navigation">
        <ul className={s.list}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end
                className={({ isActive }) =>
                  isActive ? `${s.link} ${s.active}` : s.link
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
