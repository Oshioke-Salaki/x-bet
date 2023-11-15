import bingo from "../assets/bingo.png";

function CasinoGameCard() {
  return (
    <div className="flex items-center gap-x-5 bg-white p-4 text-black">
      <img src={bingo} alt="" />
      <div>
        <h1 className="text-base font-bold">Daily Raffle</h1>
        <p className="text-xs font-bold">Share in the active daily pool</p>
        <button className="w-full bg-primaryColor px-[29px] py-[11px] text-sm font-bold text-white">
          Play Now
        </button>
      </div>
    </div>
  );
}

export default CasinoGameCard;
