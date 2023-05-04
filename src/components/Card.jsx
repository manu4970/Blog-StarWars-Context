import { useContext } from 'react'
import { Context } from '../store/appContext'
import { useFavs } from '../hooks/useFavs'
import { RoutesContext } from '../store/routes'
import { Link } from 'react-router-dom'

export function Card(props) {
	const { category, id, cid, fid, pid } = props
	const { addToFav, IsEleInArr } = useFavs()

	const { store } = useContext(Context)

	const charData = store.Characters
	const filmsData = store.Films
	const planetsData = store.Planets

	const { route, setRoute } = useContext(RoutesContext)

	function tatImg() {
		if (id === 0) {
			return (
				<img
					src='https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg'
					className='tatooine cardImg card-img-top'
					alt='...'
				/>
			)
		} else {
			return (
				<img
					src={'https://starwars-visualguide.com/assets/img/planets/' + (id + 1) + '.jpg'}
					className='card-img-top'
					alt='...'
				/>
			)
		}
	}

	return (
		<>
			{category === 'character' ? (
				<div className='card'>
					<img
						src={'https://starwars-visualguide.com/assets/img/characters/' + (id + 1) + '.jpg'}
						className='card-img-top'
						alt='...'
					/>
					<div className='card-body'>
						<h5 className='card-title mb-3'>{charData[id].name}</h5>
						<p className='card-text m-0'>Gender: {charData[id].gender}</p>
						<p className='card-text m-0'>Hair color: {charData[id].hair_color}</p>
						<p className='card-text m-0 '>Eye color: {charData[id].eye_color}</p>
						<div className='mt-4'>
							<Link
								to={'character/' + (id + 1)}
								className='btn btn-primary'
								onClick={() => {
									setRoute(id)
								}}>
								Learn More!
							</Link>
							<button
								className='like btn btn-outline-danger'
								onClick={
									IsEleInArr(charData[id].name, cid) ? null : () => addToFav(charData[id].name, cid, category, id)
								}>
								{IsEleInArr(charData[id].name, cid) ? (
									<i className='fa-solid fa-heart'></i>
								) : (
									<i className='fa-regular fa-heart'></i>
								)}
							</button>
						</div>
					</div>
				</div>
			) : null}
			{category === 'film' ? (
				<div className='card'>
					<img
						src={'https://starwars-visualguide.com/assets/img/films/' + (id + 1) + '.jpg'}
						className='card-img-top'
						alt='...'
					/>
					<div className='card-body'>
						<h5 className='card-title mb-3'>{filmsData[id].title}</h5>
						<p className='card-text m-0'>Director: {filmsData[id].director} </p>
						<p className='card-text m-0'>Producer: {filmsData[id].producer}</p>
						<p className='card-text m-0 '>Date: {filmsData[id].release_date}</p>
						<div className='mt-4'>
							<Link
								to={'film/' + (id + 1)}
								className='btn btn-primary'
								onClick={() => {
									setRoute(id)
								}}>
								Learn More!
							</Link>
							<button
								className='like btn btn-outline-danger'
								onClick={
									IsEleInArr(filmsData[id].title, fid)
										? null
										: () => addToFav(filmsData[id].title, fid, category, id)
								}>
								{IsEleInArr(filmsData[id].title, fid) ? (
									<i className='fa-solid fa-heart'></i>
								) : (
									<i className='fa-regular fa-heart'></i>
								)}
							</button>
						</div>
					</div>
				</div>
			) : null}
			{category === 'planet' ? (
				<div className='card'>
					{tatImg()}
					<div className='card-body'>
						<h5 className='card-title mb-3'>{planetsData[id].name}</h5>
						<p className='card-text m-0'>Climate: {planetsData[id].climate}</p>
						<p className='card-text m-0'>Terrain: {planetsData[id].terrain} </p>
						<p className='card-text m-0 '>Population: {planetsData[id].population}</p>
						<div className='mt-4'>
							<Link
								to={'planet/' + (id + 1)}
								className='btn btn-primary'
								onClick={() => {
									setRoute(id)
								}}>
								Learn More!
							</Link>
							<button
								className='like btn btn-outline-danger'
								onClick={
									IsEleInArr(planetsData[id].name, pid)
										? null
										: () => addToFav(planetsData[id].name, pid, category, id)
								}>
								{IsEleInArr(planetsData[id].name, pid) ? (
									<i className='fa-solid fa-heart'></i>
								) : (
									<i className='fa-regular fa-heart'></i>
								)}
							</button>
						</div>
					</div>
				</div>
			) : null}
		</>
	)
}
