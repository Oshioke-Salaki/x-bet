/* eslint-disable react/prop-types */
import MatchTable from "./MatchTable";
import SportOptions from "./SportOptions";
import StakeCategories from "./StakeCategories";

function StakeTable({ setShowModal }) {
  return (
    <div>
      <StakeCategories />
      <div className="bg-white px-[17px] py-[11px]">
        <SportOptions />
        <div className=" mt-[11px] flex flex-col gap-y-6">
          <div>
            <h4 className="mb-2 text-sm font-bold text-[#FA2626]">
              Live Games
            </h4>
            <MatchTable setShowModal={setShowModal} />
          </div>
          <div>
            <h4 className="mb-2 text-sm font-bold text-[#240A24]">Upcoming</h4>
            <MatchTable setShowModal={setShowModal} />
          </div>
          <div>
            <h4 className="mb-2 text-sm font-bold text-[#240A24]">Tommorow</h4>
            <MatchTable setShowModal={setShowModal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StakeTable;
