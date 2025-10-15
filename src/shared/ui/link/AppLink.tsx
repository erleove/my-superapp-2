import { NavLink, } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";
import s from "./AppLink.module.css";

export function AppLink(props: NavLinkProps) {
  return <NavLink {...props} className={({ isActive }) =>
    isActive ? `${s.link} ${s.active}` : s.link
  } />;
}
