import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import DetailPage from "./DetailPage";

const MyBody = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<LandingPage />} path="/" />
          <Route element={<DetailPage />} path="/:city" />
        </Route>
      </Routes>
      ;
    </BrowserRouter>
  );
};
export default MyBody;
