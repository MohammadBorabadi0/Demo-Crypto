import React from "react";

// Context
import { useCrypto } from "../Provider/context/crypto_context";
import { useFilter } from "../Provider/context/filter_context";

const header = [
  { name: "Coin" },
  { name: "Symbol" },
  { name: "Price" },
  { name: "24h" },
  { name: "MarketCap" },
];

const CryptoApp = () => {
  const { filtered_coins, all_coins } = useFilter();
  const { coins_loading, coins_error, errorMsg } = useCrypto();

  if (coins_loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <img src="./assets/images/Spinner.gif" alt="Loading" />
      </div>
    );
  }

  return (
    <div className="mx-2 xl:mx-0 bg-gray-200 rounded-lg overflow-hidden">
      <header className="hidden md:grid grid-cols-5 p-4 items-center bg-gray-400">
        {filtered_coins
          ? header.map((item, index) => (
              <h4 key={index} className="text-md md:text-lg font-bold">
                {item.name}
              </h4>
            ))
          : null}
      </header>
      {filtered_coins.map((coin) => (
        <div
          className="flex flex-col md:grid md:grid-cols-5 px-4 justify-center items-center gap-3 md:gap-0 font-semibold border border-slate-400 py-4 text-sm lg:text-base"
          key={coin.id}
        >
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <img
              src={coin.image}
              alt={coin.name}
              className="w-20 md:w-10 object-center object-contain"
            />
            <h4 className="text-base font-bold lg:font-semibold lg:text-lg">
              {coin.name}
            </h4>
          </div>
          <span>{coin.symbol.toUpperCase()}</span>
          <span>${coin.current_price.toLocaleString()}</span>
          <span
            className={`${
              coin.price_change_percentage_24h > 0
                ? "text-green-700"
                : "text-red-700"
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </span>
          <span>${coin.market_cap.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

export default CryptoApp;
