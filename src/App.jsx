import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Homepage/Navbar.jsx";
import Landingpage from "./components/Homepage/Landingpage.jsx";
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
