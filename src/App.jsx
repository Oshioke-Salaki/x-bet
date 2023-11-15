import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AppLayout from "./ui/AppLayout";
import Sports from "./pages/Sports";
import CasinoPage from "./pages/CasinoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="sports" />} />
          <Route path="sports" element={<Sports />} />
          <Route path="casino" element={<CasinoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
