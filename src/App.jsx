import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/landingpage/Navbar";
import Landingpage from "./components/landingpage/Landingpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Landingpage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
