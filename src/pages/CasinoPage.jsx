import CasinoGames from "../ui/CasinoGames";
import MyBets from "../ui/MyBets";
import TopStakePool from "../ui/TopStakePool";

function CasinoPage() {
  return (
    <div className="grid grid-cols-[990px_auto] gap-x-6">
      {/* {showModal && <StakePoolModal setShowModal={setShowModal} />} */}
      <div className="w-full">
        {/* <img src={banner} alt="" className="mb-[23.2px] h-[186.67px] w-full" />
        <StakeTable setShowModal={setShowModal} /> */}
        <CasinoGames />
      </div>
      <div className="flex w-full flex-col gap-y-[22px]">
        <MyBets />
        <TopStakePool />
      </div>
    </div>
  );
}

export default CasinoPage;
