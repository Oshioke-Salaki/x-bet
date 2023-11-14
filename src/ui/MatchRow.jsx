/* eslint-disable react/prop-types */
import stat from "../assets/stat.svg";
import { useMyBets } from "../context/MyBetsContext";
import TimeBadge from "./TimeBadge";

const buttonClass =
  "flex h-[34px] w-[60px] items-center justify-center rounded-sm  bg-primaryColor text-center";
function MatchRow({ setShowModal }) {
  const { myBets, tab, selectedBet, dispatch } = useMyBets();

  function selectBetHandler() {
    dispatch({ type: "newBet", payload: { bet: "" } });
  }
  return (
    <div className="grid grid-cols-[630px_auto] gap-x-[2px] bg-[#d9d9d9]">
      <div className="flex items-center gap-x-[13px] bg-ash30 px-[17px] py-[17px]">
        <div className="flex flex-col gap-y-[3px]">
          <h6 className="text-[11px] font-bold text-black">1001</h6>
          <img src={stat} alt="" className="h-[18px] w-[18px]" />
        </div>
        <div className="flex flex-col gap-y-[4px] text-black">
          <h1 className="text-base font-medium ">
            Anthony Joshua - Tyson Fury
          </h1>
          <div className="flex items-center gap-x-2">
            <h2 className="text-[10px] font-bold">14/05/2023</h2>
            <TimeBadge />
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-x-7 bg-ash30">
        <div className="flex items-center text-[10px] font-bold text-white">
          <button className={buttonClass} onClick={selectBetHandler}>
            1
          </button>
          <div
            className={`${buttonClass} border-x-solid border-x-[0.5px] border-x-white`}
          >
            KO
          </div>
          <button className={buttonClass} onClick={selectBetHandler}>
            2
          </button>
        </div>
        <button
          className="rounded-[5px] bg-primaryColor px-[6px] py-[10.5px] text-[10px] font-bold text-white"
          onClick={() => setShowModal(true)}
        >
          See stake pool
        </button>
      </div>
    </div>
  );
}

export default MatchRow;
