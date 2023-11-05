import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";

const MyBody = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<LandingPage />} path="/" />
          {/* DetailPage to be Added */}
        </Route>
      </Routes>
      ;
    </BrowserRouter>
  );
};
export default MyBody;
