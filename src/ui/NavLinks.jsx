import NavItem from "./NavItem";

function NavLinks() {
  return (
    <ul className="flex items-center gap-x-[150px]">
      <NavItem to="sports">Sports</NavItem>
      <NavItem to="sports">Casinos</NavItem>
      <NavItem to="sports">Poker</NavItem>
    </ul>
  );
}

export default NavLinks;
