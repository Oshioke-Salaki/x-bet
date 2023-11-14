import glove from "../assets/glove.svg";
import TopStake from "./TopStake";

function TopStakePool() {
  return (
    <div className="mt-[5px] rounded-[5px]">
      <div className="bg-secondaryColor flex items-center  justify-between   rounded-[5px_5px_0px_0px] px-4 py-2">
        <div className="flex items-center gap-x-4">
          <img src={glove} alt="" />
          <h2 className="text-sm font-bold text-white">Top stakes pool</h2>
        </div>
        <div className="bg-primaryColor h-[10px] w-[10px] rounded-full"></div>
      </div>
      <div className="rounded-[0_0_5px_5px] bg-white px-[14px] pb-[14px] pt-2">
        <TopStake />
        <TopStake />
        <TopStake />
        <TopStake />
        <TopStake />
      </div>
    </div>
  );
}

export default TopStakePool;
