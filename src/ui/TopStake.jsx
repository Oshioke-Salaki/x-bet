import stat from "../assets/stat.svg";
function TopStake() {
  return (
    <div className="bg-ash30 flex items-center gap-x-[13px] px-[8px] py-[12px]">
      <div className="flex flex-col gap-y-[3px]">
        <h6 className="text-[10px] font-bold text-black">1001</h6>
        <img src={stat} alt="" className="h-[16px] w-[16px]" />
      </div>
      <div className="flex flex-col gap-y-[6px] text-black">
        <h1 className="text-xs font-medium ">Anthony Joshua - Tyson Fury</h1>
        <h2 className="text-[8px] font-bold">14/05/2023</h2>
      </div>
    </div>
  );
}

export default TopStake;
