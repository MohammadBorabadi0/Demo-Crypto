import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  LOAD_COINS,
  UPDATE_FILTER,
  UPDATE_SORT,
  SORT_COINS,
  FILTER_COINS,
} from "../../actions";
import filter_reducer from "../reducers/filter_reducer";
import { useCrypto } from "./crypto_context";

const initialState = {
  all_coins: [],
  filtered_coins: [],
  filters: {
    search: "",
  },
  sort: "default",
};

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, initialState);
  const { coins } = useCrypto();

  useEffect(() => {
    dispatch({ type: LOAD_COINS, payload: coins });
  }, [coins]);

  useEffect(() => {
    dispatch({ type: FILTER_COINS });
    dispatch({ type: SORT_COINS });
  }, [coins, state.filters, state.sort]);

  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: UPDATE_FILTER, payload: { name, value } });
  };

  const updateSort = (e) => {
    let value = e.target.value || e.target.textContent.toLowerCase();
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, dispatch, updateSort, updateFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;

export const useFilter = () => useContext(FilterContext);
