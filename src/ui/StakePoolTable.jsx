import BidItem from "./BidItem";

function StakePoolTable() {
  return (
    <div className=" text-white">
      <div className="border-b-solid grid grid-cols-[1fr_1fr] border-b-[2px] border-b-white pb-3">
        <div className="flex w-full items-center justify-center gap-x-10">
          <h1 className="text-2xl font-bold">Anthony joshua</h1>
          <h1 className=" text-2xl font-bold">$457,758</h1>
        </div>
        <div className="flex w-full items-center justify-center gap-x-10">
          <h1 className="text-2xl font-bold">Tyson Fury</h1>
          <h1 className="text-2xl font-bold">$243,500</h1>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-x-[1px] bg-white">
        <div className="flex flex-col gap-y-[24px] bg-black pl-[90px] pt-[23px]">
          <BidItem />
          <BidItem />
          <BidItem />
          <BidItem />
          <BidItem />
          <BidItem />
          <BidItem />
          <BidItem />
          <BidItem />
          <BidItem />
          <BidItem />
          <BidItem />
        </div>
        <div className="flex flex-col gap-y-[24px] bg-black pl-[110px] pt-[23px]">
          <BidItem />
          <BidItem />
          <BidItem />
          <BidItem />
        </div>
      </div>
    </div>
  );
}

export default StakePoolTable;
