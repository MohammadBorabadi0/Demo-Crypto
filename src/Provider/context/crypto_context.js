import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { COINS_ERROR, COINS_LOADING, COINS_SUCCESS } from "../../actions";
import crypto_reducer from "../reducers/crypto_reducer";

const initialState = {
  coins: [],
  coins_loading: false,
  coins_error: false,
  errorMsg: null,
};

const CryptoContext = createContext();

const CryptoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(crypto_reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: COINS_LOADING });
    try {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      );
      dispatch({ type: COINS_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: COINS_ERROR, payload: err.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CryptoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoProvider;

export const useCrypto = () => useContext(CryptoContext);
