import { createContext, useContext } from "react";

  /* rcontext */
export const Context = createContext(null);

export const AppContext = () => useContext(Context);
