import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Men from "./assets/pages/Men";
import Navbar from "./assets/components/Navbar";
import TopStrip from "./assets/components/TopStrip";
import EmailSubscription from "./assets/components/EmailSubscription";
import Footer from "./assets/components/Footer";
import Cart from "./assets/pages/Cart";
import Kids from "./assets/pages/Kids";
import Women from "./assets/pages/Women";

function App() {
  return (
    <div>
      <TopStrip />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/kids" element={<Kids />} />
        <Route path="/women" element={<Women />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <EmailSubscription />
      <Footer />
    </div>
  );
}

export default App;
