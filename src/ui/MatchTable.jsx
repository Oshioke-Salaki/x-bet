/* eslint-disable react/prop-types */
import glove from "../assets/glove.svg";
import MatchRow from "./MatchRow";

function MatchTable({ setShowModal }) {
  return (
    <div>
      <div className="flex items-center gap-x-4 rounded-[5px_5px_0px_0px]  bg-secondaryColor px-4 py-2">
        <img src={glove} alt="" />
        <h2 className="text-sm font-bold text-white">
          World Boxing Organisation
        </h2>
      </div>
      <div className="flex flex-col gap-y-[1px] ">
        <MatchRow setShowModal={setShowModal} />
        <MatchRow setShowModal={setShowModal} />
        <MatchRow setShowModal={setShowModal} />
      </div>
    </div>
  );
}

export default MatchTable;
