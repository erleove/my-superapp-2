import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const links = [
  { to: "/my-superapp-2/grid-base", label: "Grid Base" },
  { to: "/my-superapp-2/flex-base", label: "Flex Base" },
  { to: "/my-superapp-2/insta", label: "Insta" },
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
