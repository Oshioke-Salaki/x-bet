import Navbar from "../ui/Navbar";
import sports from "../assets/sports.png";
import { ConnectButton } from '@rainbow-me/rainbowkit';

function LandingPage() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Navbar />
      <div
        className="flex h-full w-full flex-col items-center pt-[110px] text-center text-white"
        style={{
          background: "linear-gradient(117deg, #100F10 0%, #181818 100%)",
        }}
      >
        <div className="relative mb-[54px] w-fit items-center">
          <div className="absolute left-[3px] top-[-10px] z-[2] h-[90px] w-[180px] rotate-[6.062deg] rounded-full bg-primaryColor"></div>
          <h1 className="relative z-[400] text-[50px] font-bold">
            <span className="z-[300]">Where</span> Sports and Blockchain Collide
          </h1>
          <h2 className="text-[32px] font-semibold">
            Stake, Win, and Dominate the Future of Athletic Investments
          </h2>
        </div>
        <ConnectButton/>
        {/* <button className="cursor-pointer rounded-[5px] bg-primaryColor px-[58px] py-4 text-base font-bold">
          Connect wallet
        </button> */}
        <img src={sports} alt="" className="mt-[-150px] h-[437px] w-[1240px]" />
      </div>
    </div>
  );
}

export default LandingPage;
