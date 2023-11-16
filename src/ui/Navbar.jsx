import ConnectBtn from "./ConnectBtn";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {
  return (
    <nav className="bg-secondaryColor flex items-center justify-between border-b-[0.6px] border-solid border-b-white px-[100px] pb-[6px] pt-[14px]">
      <Logo />
      <NavLinks />
      <ConnectButton/>
      {/* <ConnectBtn /> */}
    </nav>
  );
}

export default Navbar;
