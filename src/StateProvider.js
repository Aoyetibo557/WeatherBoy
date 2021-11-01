// Setting up data layer, that would allow us to push information into the basket
// To also keep track of the user
// We need this to track the basket

import { createContext, useContext, useReducer } from "react";

// this is the datalayer
export const StateContext = createContext();
   
// Build a provider that way we can wrap our entire app inside this provider and git it access to th datalayer we created up
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);