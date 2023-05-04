import { useContext } from "react";
import { FavContext } from "../store/favContext";

export const useFavs = () => {
  const favContext = useContext(FavContext);

  if (favContext === undefined) {
    throw new Error("useFav must be used within a FavProvider");
  }

  return favContext;
}