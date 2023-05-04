import { useFavs } from "../hooks/useFavs"

export function DevFooter (){

  const { favs } = useFavs()

  return (
    <footer className='footer'>
      <p>favs = {favs}</p>
  </footer>
  )
}