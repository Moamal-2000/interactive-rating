import { createContext, useContext } from "react";

export const RateContext = createContext();

export const useRateContext = () => useContext(RateContext);
