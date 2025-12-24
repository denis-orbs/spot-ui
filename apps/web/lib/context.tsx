import { createContext, useEffect } from "react";
import { useConnection } from "wagmi";
import { useSwapParams } from "./hooks/use-swap-params";
import { setApiMode } from "@orbs-network/spot-react";
import { useHydrateStores } from "./hooks/store";

const Context = createContext({});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { chainId } = useConnection();
  const { setCurrencies } = useSwapParams();

  // Hydrate persisted Zustand stores on client
  useHydrateStores();

  // Set API mode on client side only
  useEffect(() => {
    const mode = process.env.NEXT_PUBLIC_MODE;
    if (mode) {
      setApiMode(mode as "prod" | "dev");
    }
  }, []);

  // Reset currencies when chain changes
  useEffect(() => {
    setCurrencies({ inputCurrency: undefined, outputCurrency: undefined });
  }, [chainId, setCurrencies]);

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};