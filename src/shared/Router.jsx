import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeP from "../pages/HomeP";
import Sign from "../pages/Sign";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/HomeP" element={<HomeP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
