import CasinoGameCard from "./CasinoGameCard";

function CasinoGames() {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr] gap-x-4 rounded-[5px_5px_0px_0px] border-[0.5px] border-solid border-white bg-[#333] px-6 py-4">
      <CasinoGameCard />
      <CasinoGameCard />
      <CasinoGameCard />
    </div>
  );
}

export default CasinoGames;
