import { Route, Routes } from "react-router-dom";
import "./App.sass";

import Header from "./components/Header/Header";
import Home from "./pages/Home"
import Cart from "./pages/Cart";
import NotFount from "./pages/NotFount";


function App() {

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
    </div>
  );
}

export default App;
