/* eslint-disable react/prop-types */
import StakePoolTable from "./StakePoolTable";
import close from "../assets/close.svg";

function StakePoolModal({ setShowModal }) {
  return (
    <div className="absolute inset-0 z-[400] flex h-fit justify-center bg-overlay80 px-[70px] pb-16 pt-[78px] text-white">
      <div className="relative w-full rounded-[10px] border-[3px] border-solid border-white bg-black px-[42px] pb-[67px] pt-6">
        <button
          className="absolute right-[18px] top-[14px]"
          onClick={() => setShowModal(false)}
        >
          <img src={close} alt="" />
        </button>
        <div className="flex justify-center gap-x-[68px]">
          <div className="flex flex-col items-center gap-y-[23px]">
            <h1 className="text-[28px] font-bold">Anthony joshua</h1>
            <button className="rounded-sm bg-primaryColor px-[41px] py-[10px] text-xs font-bold">
              WIN
            </button>
          </div>
          <h1 className="text-[28px] font-bold ">VS</h1>
          <div className="flex flex-col items-center gap-y-[23px]">
            <h1 className="text-[28px] font-bold ">Tyson fury</h1>
            <button className="rounded-sm bg-primaryColor px-[41px] py-[10px] text-xs font-bold">
              WIN
            </button>
          </div>
        </div>
        <h3 className="mb-4 mt-[29px] text-center text-[24px] font-bold text-white">
          Total pool amount: $679,085
        </h3>
        <StakePoolTable />
      </div>
    </div>
  );
}

export default StakePoolModal;
