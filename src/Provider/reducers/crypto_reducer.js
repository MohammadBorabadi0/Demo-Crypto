import React from "react";
import { COINS_ERROR, COINS_LOADING, COINS_SUCCESS } from "../../actions";

const crypto_reducer = (state, action) => {
  switch (action.type) {
    case COINS_LOADING: {
      return { ...state, coins_loading: true };
    }
    case COINS_SUCCESS: {
      return {
        ...state,
        coins_loading: false,
        coins_error: false,
        coins: [...action.payload],
      };
    }
    case COINS_ERROR: {
      return { ...state, coins_loading: false, coins_error: true, coins: [] };
    }
    default: {
      return state;
    }
  }
};

export default crypto_reducer;
