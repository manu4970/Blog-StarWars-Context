import { createContext, useState } from "react";

export const FavContext = createContext()

export function FavProvider( {children} ) {
  const [favs, setFavs] = useState([])

  const IsEleInArr = (fav,id) =>{
    return favs.some(item => item[1] === id)
  }

  const addToFav = (fav, id, category, nid) => {
    const newFav = [fav,id, category, nid]
    setFavs([...favs, newFav])
  }

  const removeFav = (fav,id) => {
    const newList = favs.filter((f,currentid) => currentid!== id)
    setFavs(newList)
  }


  return (
    <FavContext.Provider value={{favs, setFavs,addToFav,removeFav,IsEleInArr}}>
      {children}
    </FavContext.Provider>
  )
}