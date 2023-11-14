import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
function NavItem({ children, to }) {
  return (
    <li className="text-base font-semibold text-white">
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}

export default NavItem;
