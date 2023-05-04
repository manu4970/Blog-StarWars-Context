import React, { useState, useEffect } from "react";
import getState from "./flux.jsx";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    //this will be passed as the contenxt value
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );

    useEffect(() => {
      state.actions.getPeopleData();
      state.actions.getFilmsData();
      state.actions.getPlanetsData();
    }, []);


    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;


// export function DataProvider ( {children} ) {

//   const [people,setPeople] = useState([])
//   const [films, setFilms] = useState([])
// 	const [planets, setPlanets] = useState([])

//   const peopleUrl = 'https://swapi.dev/api/people/'
// 	const filmsUrl = 'https://swapi.dev/api/films/'
// 	const planetsUrl = 'https://swapi.dev/api/planets/'

// 	async function getPeopleData() {
// 		const response = await fetch(peopleUrl)
// 		if (response.ok) {
// 			const data = await response.json()
// 			setPeople(data.results)
// 		} else {
// 			console.log('Error al obtener people data')
// 		}
// 	}

//   async function getFilmsData() {
// 		const response = await fetch(filmsUrl)
// 		if (response.ok) {
// 			const data = await response.json()
// 			setFilms(data.results)
// 		} else {
// 			console.log('Error al obtener films data')
// 		}
// 	}

// 	async function getPlanetsData() {
// 		const response = await fetch(planetsUrl)
// 		if (response.ok) {
// 			const data = await response.json()
// 			setPlanets(data.results)
// 		} else {
// 			console.log('Error al obtener planets data')
// 		}
// 	}

//   useEffect(()=>{
//     getPeopleData()
//     getFilmsData()
//     getPlanetsData()
//   },[])
