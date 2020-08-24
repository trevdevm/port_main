import React, { createContext, useContext } from "react";
import useThunk from "./useThunk";

const StoreContext = createContext();

//you dont want to have only one provider but separate on routes
export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useThunk(reducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext);