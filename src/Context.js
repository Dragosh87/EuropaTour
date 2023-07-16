import React, { createContext } from "react";

export const LocalContext = createContext();

export const LocalProvider = ({ children }) => {
  const setItem = (item) => {
    if (item === null) {
      window.localStorage.removeItem("local")
    } else {
      window.localStorage.setItem("local", JSON.stringify(item));
    }
  };
  const getItem = (item) => {
    return JSON.parse(window.localStorage.getItem("local")) || [];
  };

  return (
    <LocalContext.Provider value={[setItem, getItem]}>
      {children}
    </LocalContext.Provider>
  );
};
