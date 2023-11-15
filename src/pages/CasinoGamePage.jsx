import MyBets from "../ui/MyBets";
import TopStakePool from "../ui/TopStakePool";

function CasinoGamePage() {
  return (
    <div className="grid grid-cols-[990px_auto] gap-x-6">
      <div className="grid w-full grid-cols-[653px_auto] rounded-[5px] bg-white p-6 ">
        <div className="grid grid-cols-[9] gap-x-2 gap-y-4 bg-ash30 p-6">
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
      </div>
      <div className="flex w-full flex-col gap-y-[22px]">
        <MyBets />
        <TopStakePool />
      </div>
    </div>
  );
}

export default CasinoGamePage;
