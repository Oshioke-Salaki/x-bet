import NavItem from "./NavItem";

function NavLinks() {
  return (
    <ul className="flex items-center gap-x-[150px]">
      <NavItem to="app/sports">Sports</NavItem>
      <NavItem to="app/casino">Casinos</NavItem>
      <NavItem to="sports">Poker</NavItem>
    </ul>
  );
}

export default NavLinks;
