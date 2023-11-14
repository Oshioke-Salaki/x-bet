import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <div
        className="px-6 py-[17px]"
        style={{
          background: "linear-gradient(117deg, #100F10 0%, #181818 100%)",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
