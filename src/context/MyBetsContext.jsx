/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const MyBetsContext = createContext();

const initialState = {
  myBets: [],
  tab: "myBets",
  selectedBet: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "newBet":
      return {
        ...state,
        tab: "betSlip",
        selectedBet: action.payload,
      };
    case "tabSwitch":
      return {
        ...state,
        tab: action.payload,
      };
    case "clearSlip":
      return {
        ...state,
        selectedBet: null,
      };
    default:
      throw new Error("Action Unknown");
  }
}

const MyBetsProvider = ({ children }) => {
  const [{ myBets, tab, selectedBet }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <MyBetsContext.Provider
      value={{
        myBets,
        tab,
        selectedBet,
        dispatch,
      }}
    >
      {children}
    </MyBetsContext.Provider>
  );
};

function useMyBets() {
  const context = useContext(MyBetsContext);
  if (context === undefined)
    throw new Error("Context was read outside the provider scoope");

  return context;
}

export { MyBetsProvider, useMyBets };

// dispatch({ type: 'dataReceived', payload: { question: data } })
