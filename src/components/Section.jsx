import { useContext, useState } from 'react';
import { Card } from './Card'
import { Context } from "../store/appContext";


export function Section(props) {

  const { store , actions } = useContext(Context)

	return (
		<div className='row'>
			<div className='col'></div>
			<div className='col-10 p-5'>
				<div className='fs-3 mb-3'>{props.category}</div>
				<div className='overflow-x-scroll d-flex gap-4'>
          {props.category === "Characters"? 
            store.Characters.map((character,index)=>{
              return(
                <Card key={index}
                id={index}
                category={props.category}
                name={character.name}
                gender={character.gender}
                eyeColor={character.eye_color}
                />
              )
            })
            : null
          }
          {props.category === "Films"? 
            store.Films.map((film,index)=>{
              return(
                <Card key={index}
                category={props.category}
                id={index}
                />
              )
            })
            : null
          }
          {props.category === "Planets"? 
            store.Planets.map((planet,index)=>{
              return(
                <Card key={index}
                category={props.category}
                id={index}
                />
              )
            })
            : null
          }
				</div>
			</div>
			<div className='col'></div>
		</div>
	)
}