import tick from "../assets/correct.png";
import usdt from "../assets/usdt.png";
import close from "../assets/closeDark.png";
import { useMyBets } from "../context/MyBetsContext";

function BetSlip() {
  const { myBets, tab, selectedBet, dispatch } = useMyBets();

  return (
    <div className="relative bg-ash30 pb-[34px] pt-[9.4px] text-black">
      {selectedBet ? (
        <>
          <button
            className="absolute right-[13px] top-2 z-[300] cursor-pointer"
            onClick={() => dispatch({ type: "clearSlip" })}
          >
            <img src={close} alt="" />
          </button>
          <div className="flex w-full gap-x-[9.4px] pl-[14px] pr-5">
            <img src={tick} alt="" className="h-[17.4px] w-[17.4px]" />
            <div className="w-full">
              <h1 className="text-sm font-bold">Anthony Joshua </h1>
              <div className="flex flex-col text-[10px] font-medium text-[#121212]">
                <div className="flex  w-full items-center justify-between">
                  <h2>Anthony Joshua VS Tyson Fury</h2>
                  <h1 className="text-base font-extrabold text-primaryColor">
                    WIN
                  </h1>
                </div>
                <h2>1 X 2</h2>
              </div>
            </div>
          </div>
          <div className="mt-[18px] px-[7px]">
            <div className="h-[0.5px] w-full bg-[#c4c4c4]"></div>
          </div>

          <div className="mt-5 flex flex-col gap-y-8 px-[13px] text-sm font-bold text-[#333]">
            <div className="flex items-center justify-between">
              <h2>Total Stake</h2>
              <div className="relative">
                <input
                  type="number"
                  defaultValue={10}
                  max={10000}
                  min={10}
                  className="h-12 w-[100px] rounded-sm border-[1px] border-solid border-[#c4c4c4] py-[15px] pl-4 pr-6 outline-none"
                />
                <img
                  src={usdt}
                  alt=""
                  className="absolute right-2 top-[16px] z-[300]"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h2>Est Pool Payment</h2>
              <div className="flex items-center gap-x-1">
                <h3>250</h3>
                <img src={usdt} alt="" />
              </div>
            </div>
            <button className="mt-10 flex h-[52px] w-[80%] items-center justify-center self-center rounded-[5px] bg-primaryColor p-[10px] text-center text-base font-bold text-white">
              Place Bet
            </button>
          </div>
        </>
      ) : (
        <p className="pl-4 text-base font-bold text-[#333]">Place a bet</p>
      )}
    </div>
  );
}

export default BetSlip;
