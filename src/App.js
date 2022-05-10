import React from "react";
import CryptoApp from "./components/CryptoApp";
import Search from "./components/Search";
import Sort from "./components/Sort";

const App = () => {
  return (
    <div className="h-screen max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row py-4 md:py-0 gap-4 items-center justify-between mt-8 mb-4 mx-2 xl:mx-0">
        <Search />
        <Sort />
      </header>
      <CryptoApp />
    </div>
  );
};

export default App;
