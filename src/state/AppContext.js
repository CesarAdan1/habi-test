import React, { createContext, useReducer, useState, useEffect, useContext } from 'react';

export const AppContext = createContext([]);

const initialState = {
    completeName: "",
    email: "",
    address: "",
    floor: "",
    services: {
        bbq: false,
        salonC: false,
        juegos: false,
    },
    park: false,
    price: "",
    photo: "",
    elevator: false
}

export const reducer = (state, action) => {
    switch (action.type) {
      case "SAVE_NAME":
        return {
          ...state,
          completeName: action.completeName
        };
      case "SAVE_EMAIL":
        return {
          ...state,
          email: action.email
        };
        case "SAVE_ADDRESS":
            return {
              ...state,
              email: action.email
            };
            case "SAVE_FLOOR":
        return {
          ...state,
          floor: action.floor
        };
        case "SAVE_SERVICES":
        return {
          ...state,
          services: action.services
        };
        case "SAVE_PARK":
        return {
          ...state,
          park: action.park
        };
        case "SAVE_PRICE":
        return {
          ...state,
          price: action.price
        };
        case "SAVE_PHOTO":
        return {
          ...state,
          photo: action.photo
        };
        case "SAVE_ELEVATOR":
        return {
          ...state,
          elevator: action.elevator
        };
      default:
        return {
          ...state
        };
    }
  };

const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider
        value={[state, dispatch]}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider;