import { createContext, useState } from "react";

export const RoutesContext = createContext()

export function RoutesProvider( {children} ) {

  const [route, setRoute] = useState("/")


  return (
    <RoutesContext.Provider value={{route, setRoute}}>
      {children}
    </RoutesContext.Provider>
  )
}