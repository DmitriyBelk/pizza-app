import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.sass";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFount from "./pages/NotFount";

export const AppContext = React.createContext();

function App() {
  //Хук для данных поисковой строки
  const [searchValue, setSearchValue] = React.useState("");

  // Функция записи данных в поисковую строку
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="container">
      <AppContext.Provider
        value={{ searchValue, setSearchValue, onChangeSearchInput }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFount />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
