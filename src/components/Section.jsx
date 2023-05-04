import { useContext, useId } from 'react';
import { Card } from './Card'
import { Context } from "../store/appContext";


export function Section(props) {

  const { store } = useContext(Context)

  const cat = props.category[0].toUpperCase() + props.category.slice(1)
 
	return (
		<div className='row'>
			<div className='col'></div>
			<div className='col-10 p-5'>
				<div className='subTit fs-3 mb-3'>{cat}</div>
				<div className='overflow-x-scroll d-flex gap-4'>
          {props.category === "character"? 
            store.Characters.map((character,index)=>{
              return(
                <Card 
                key={index}
                id={index}
                cid={"c"+index}
                category={props.category}
                />
              )
            })
            : null
          }
          {props.category === "film"? 
            store.Films.map((film,index)=>{
              return(
                <Card 
                key={index}
                category={props.category}
                id={index}
                fid={"f"+index}
                />
              )
            })
            : null
          }
          {props.category === "planet"? 
            store.Planets.map((planet,index)=>{
              return(
                <Card 
                key={index}
                category={props.category}
                id={index}
                pid={"p"+index}
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