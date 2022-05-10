import React from "react";
import {
  LOAD_COINS,
  SORT_COINS,
  UPDATE_FILTER,
  UPDATE_SORT,
  FILTER_COINS,
} from "../../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_COINS: {
      return {
        ...state,
        filtered_coins: [...action.payload],
        all_coins: [...action.payload],
      };
    }
    case UPDATE_SORT: {
      return { ...state, sort: action.payload };
    }
    case UPDATE_FILTER: {
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    }
    case SORT_COINS: {
      const { sort, filtered_coins } = state;
      let tempCoins = [...filtered_coins];
      if (sort === "highest") {
        tempCoins = tempCoins.sort((a, b) => b.current_price - a.current_price);
      }
      if (sort === "lowest") {
        tempCoins = tempCoins.sort((a, b) => a.current_price - b.current_price);
      }
      if (sort === "min-change") {
        tempCoins = tempCoins.sort(
          (a, b) =>
            a.price_change_percentage_24h - b.price_change_percentage_24h
        );
      }
      if (sort === "max-change") {
        tempCoins = tempCoins.sort(
          (a, b) =>
            b.price_change_percentage_24h - a.price_change_percentage_24h
        );
      }
      return { ...state, filtered_coins: tempCoins };
    }
    case FILTER_COINS: {
      const { all_coins, filters } = state;
      const { search } = filters;
      let tempCoins = [...all_coins];
      if (search) {
        tempCoins = tempCoins.filter((i) => {
          return (
            i.name.toLowerCase().includes(search.toLowerCase()) ||
            i.symbol.toLowerCase().includes(search.toLowerCase())
          );
        });
      }
      return { ...state, filtered_coins: tempCoins };
    }
    default: {
      return state;
    }
  }
};

export default filter_reducer;
