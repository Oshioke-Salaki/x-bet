import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AppLayout from "./ui/AppLayout";
import Sports from "./pages/Sports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="sports" />} />
          <Route path="sports" element={<Sports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
