import CasinoGames from "../ui/CasinoGames";
import MyBets from "../ui/MyBets";
import TopStakePool from "../ui/TopStakePool";
import ballons from "../assets/numberBallons.png";

function CasinoPage() {
  return (
    <div className="grid grid-cols-[990px_auto] gap-x-6">
      {/* {showModal && <StakePoolModal setShowModal={setShowModal} />} */}
      <div className="w-full">
        <CasinoGames />
        <img src={ballons} alt="" className="mt-6 w-full" />
      </div>
      <div className="flex w-full flex-col gap-y-[22px]">
        <MyBets />
        <TopStakePool />
      </div>
    </div>
  );
}

export default CasinoPage;
