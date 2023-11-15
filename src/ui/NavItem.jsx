import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
function NavItem({ children, to }) {
  return (
    <li className="text-base font-semibold text-white">
      <NavLink to={to} className="px-5 py-[6px]">
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
