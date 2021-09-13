
import React, { createContext, useReducer, useState, useEffect, useContext } from 'react';
import { reducer, initialState } from './reducers'

const AppContext = createContext({});


const useAppContext = () => {
    return useContext(AppContext)
}

const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider
            value={{stepper: state, dispatch}}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export { AppProvider, useAppContext, AppContext, reducer};