import MyBets from "../ui/MyBets";
import usdt from "../assets/usdt.png";
import TopStakePool from "../ui/TopStakePool";

function CasinoGamePage() {
  return (
    <div className="grid grid-cols-[990px_auto] gap-x-6">
      <div className="grid w-full grid-cols-[653px_auto] rounded-[5px] bg-white p-6 ">
        <div className="grid grid-cols-9 gap-x-2 gap-y-4 bg-ash30 p-6">
          {Array.from({ length: 100 }, (_, index) => index + 1).map(
            (curr, i) => (
              <div
                key={i}
                className="flex items-center justify-center bg-primaryColor p-[10px] text-center text-sm font-bold text-white"
              >
                {i + 1}
              </div>
            ),
          )}
        </div>
        <div className="bg-[#181818] px-4 py-3">
          <div className="mb-6 flex items-center justify-between bg-primaryColor p-2 text-white">
            <button className="rounded-full px-[21px] py-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-[#333]">
              Number Draws
            </button>
            <button className="rounded-full px-[21px] py-3 transition-all duration-300 ease-in-out hover:bg-white hover:text-[#333]">
              Rules
            </button>
          </div>
          <div className="flex flex-col gap-y-[30px] text-sm font-bold text-white">
            <div className="flex items-center justify-between">
              <h2>Current Pool</h2>
              <div className="relative">
                <input
                  type="number"
                  defaultValue={104580}
                  className="h-[52px] w-[163px] rounded-[5px] border-[1px] border-solid border-[#c4c4c4] bg-white py-[15px] pl-4 pr-6 text-base font-bold text-[#333] outline-none"
                  disabled={true}
                />
                <img
                  src={usdt}
                  alt=""
                  className="absolute right-[18.5px] top-[16px] z-[300]"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h2>Total Stake</h2>
              <div className="relative">
                <input
                  type="number"
                  defaultValue={10}
                  max={10000}
                  min={10}
                  className="h-[52px] w-[163px] rounded-[5px] border-[1px] border-solid border-[#c4c4c4]  py-[15px] pl-4 pr-6 text-base font-bold text-[#333] outline-none"
                />
                <img
                  src={usdt}
                  alt=""
                  className="absolute right-2 top-[16px] z-[300]"
                />
              </div>
            </div>
          </div>
          <div className="mt-[43px] flex flex-col gap-y-4 px-[46px]">
            <button className="rounded-[5px] border-[1px] border-solid border-primaryColor bg-white p-[10px] text-center text-base font-bold text-primaryColor">
              Auto Select
            </button>
            <button className="rounded-[5px] border-[1px] border-solid border-primaryColor bg-white p-[10px] text-center text-base font-bold text-primaryColor">
              Clear Table
            </button>
            <button className="rounded-[5px] border-[1px] border-solid border-primaryColor bg-primaryColor p-[10px] text-center text-base font-bold text-white">
              Place Bet
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-y-[22px]">
        <MyBets />
        <TopStakePool />
      </div>
    </div>
  );
}

export default CasinoGamePage;
