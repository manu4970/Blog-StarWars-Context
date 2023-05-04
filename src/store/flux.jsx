import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Characters: [
				{}
			],
			Films:[
				{}
			],
			Planets:[
				{}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeopleData: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/people/");
					if (!response.ok) {
					  throw new Error("Network response was not ok");
					}
					const data = await response.json();
					// console.log(data)
					setStore({ Characters: data.results });
				  } catch (error) {
					console.error("There was a problem fetching the data:", error);
				  }
			},
			getFilmsData: async () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				try {
					const response = await fetch("https://swapi.dev/api/films/");
					if (!response.ok) {
					  throw new Error("Network response was not ok");
					}
					const data = await response.json();
					// console.log(data)
					setStore({ Films: data.results });
				  } catch (error) {
					console.error("There was a problem fetching the data:", error);
				  }
			},
			getPlanetsData: async () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				try {
					const response = await fetch("https://swapi.dev/api/planets/");
					if (!response.ok) {
					  throw new Error("Network response was not ok");
					}
					const data = await response.json();
					// console.log(data)
					setStore({ Planets: data.results });
				  } catch (error) {
					console.error("There was a problem fetching the data:", error);
				  }
			},
			addToFav: ()=> {
				
			}

			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// },
			// addToDemo: (title, background, initial) => {
			// 	const store = getStore();
			// 	const demo = store.demo.concat({title: title, background: background, initial: initial});
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;