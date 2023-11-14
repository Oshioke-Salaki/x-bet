import glove from "../assets/glove.svg";
import { useMyBets } from "../context/MyBetsContext";
import BetSlip from "./BetSlip";
import MyBetsList from "./MyBetsList";

function MyBets() {
  const { myBets, tab, selectedBet, dispatch } = useMyBets();

  function changeTab(tabName) {
    dispatch({ type: "tabSwitch", payload: tabName });
  }
  return (
    <div className="rounded-[5px]">
      <div className="grid grid-cols-[1fr_1fr] rounded-[5px] border-solid border-[0.5px_0.5px_0px_0.5px] border-white text-white">
        <button
          onClick={() => changeTab("betSlip")}
          className={`flex w-full items-center justify-center rounded-[5px_0px_0_0] ${
            tab === `betSlip` ? "bg-ash" : "bg-secondaryColor"
          } py-2`}
        >
          <img src={glove} className="mr-4" alt="" /> Betslip
        </button>
        <button
          onClick={() => changeTab("myBets")}
          className={`flex w-full items-center justify-center rounded-[0px_5px_0_0] ${
            tab === "myBets" ? "bg-ash" : "bg-secondaryColor"
          } bg-secondaryColor py-2`}
        >
          <img src={glove} className="mr-4" alt="" /> My Bets
        </button>
      </div>
      <div className="rounded-[0_0_5px_5px] bg-white px-[14px] pb-[14px] pt-2">
        {tab === "myBets" ? <MyBetsList /> : <BetSlip />}
      </div>
    </div>
  );
}

export default MyBets;
