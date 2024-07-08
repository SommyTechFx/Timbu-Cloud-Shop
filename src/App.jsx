import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Homepage/Navbar.jsx";
import Landingpage from "./pages/Landingpage.jsx";
import Footter from "./components/Homepage/Footter.jsx";
import Productdetails from "./pages/Productdetails.jsx";
import Shoppincart from "./pages/Shoppincart.jsx";
import Checkout from "./pages/Checkout.jsx/";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Landingpage />}></Route>
          <Route path="/product-checkout" element={<Productdetails />}></Route>
          <Route path="/shopping-cart" element={<Shoppincart />}></Route>
          <Route path="/form-details" element={<Checkout />}></Route>
        </Routes>
        <Footter />
      </BrowserRouter>
    </div>
  );
}

export default App;
