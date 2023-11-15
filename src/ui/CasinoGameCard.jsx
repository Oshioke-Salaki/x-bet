import bingo from "../assets/bingo.png";

function CasinoGameCard() {
  return (
    <div className="flex items-center gap-x-5 rounded-[10px] bg-white p-4 text-black">
      <img src={bingo} alt="" className="w-[149px]" />
      <div>
        <h1 className="text-base font-bold">Daily Raffle</h1>
        <p className="text-xs font-bold">Share in the active daily pool</p>
        <button className="w-full bg-primaryColor p-[10px] text-sm font-bold text-white">
          Play Now
        </button>
      </div>
    </div>
  );
}

export default CasinoGameCard;
