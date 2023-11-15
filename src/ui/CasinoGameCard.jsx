import { NavLink } from "react-router-dom";
import bingo from "../assets/bingo.png";

function CasinoGameCard() {
  return (
    <div className="flex items-center gap-x-5 rounded-[10px] bg-white p-4 text-black">
      <img src={bingo} alt="" className="w-[149px]" />
      <div>
        <h1 className="text-base font-bold">Daily Raffle</h1>
        <p className="text-xs font-bold">Share in the active daily pool</p>
        <NavLink
          to="casino/12"
          className="mt-[55px] w-full rounded-[5px] bg-primaryColor p-[10px] text-sm font-bold text-white"
        >
          Play Now
        </NavLink>
      </div>
    </div>
  );
}

export default CasinoGameCard;
