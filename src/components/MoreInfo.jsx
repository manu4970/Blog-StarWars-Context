import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function MoreInfo(props) {
	const [Data, setData] = useState([])
	const { route } = useParams()
	const { category } = props

	async function getData() {
		const response = await fetch('https://swapi.dev/api/' + category + '/' + route)
		if (response.ok) {
			const data = await response.json()
			setData(data)
		} else {
			console.log('Error al obtener Films detail data')
		}
	}

	useEffect(() => {
		getData()
	}, [Data])

	const data = Data

	return (
		<>
			{category === 'people' ? (
				<div className='container lm'>
					<div className='contDetails d-flex mt-6 mb-5'>
						<div className='charImg'>
							<img
								src={'https://starwars-visualguide.com/assets/img/characters/' + route + '.jpg'}
								className='cardImg card-img-top me-5'
								alt='...'
							/>
						</div>
						<div>
							<h1 className='mb-3'>{data.name}</h1>
							<p className='object-fit-contain'>
								Lorem ipsum dolor sit amet consectetur adipiscing elit, libero quam neque eget mi
								pharetra ultricies, augue sed scelerisque sem enim tortor. Cursus faucibus eleifend
								tristique tellus fames enim augue primis hac velit eros, maecenas suspendisse
								fermentum ligula netus volutpat purus orci consequat interdum lacus, nam risus
								potenti dictum est nostra malesuada bibendum turpis nunc. Fusce etiam dis cubilia
								nam molestie, mattis urna id nostra, vel semper sociosqu curae. Commodo etiam
								sodales cras mauris blandit mattis erat aenean, laoreet senectus habitant placerat
								lectus eget nisl, aptent consequat augue risus ad gravida luctus. Donec dui integer
								aliquam porta class tincidunt, auctor odio hac malesuada egestas. Malesuada bibendum
								pretium cursus tempor primis dictum dignissim nostra, risus lacinia senectus morbi
								tellus venenatis mattis tristique, euismod lectus varius phasellus netus erat
								imperdiet.
							</p>
						</div>
					</div>
					<div className='charDetails d-flex gap-5 text-center justify-content-center'>
            <p>
            Birth Year
            <br />
            {data.birth_year}
            </p>
            <p>
              Eye Color
              <br />
              {data.eye_color}
            </p>
            <p>
              Gender
              <br />
              {data.gender}
            </p>
            <p>
              Hair Color
              <br />
              {data.hair_color}
            </p>
            <p>
              Height
              <br />
              {data.height}
            </p>
            <p>
              Mass
              <br />
              {data.mass}
            </p>
            <p>
              Skin Color
              <br />
              {data.skin_color}
            </p>
					</div>
				</div>
			) : null}
			{category === 'planets' ? (
				<div className='container lm'>
					<div className='contDetails d-flex mt-6 mb-5'>
						<div className='charImg'>
							{(() => {
								if (data.name === 'Tatooine') {
									return (
										<img
											src='https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg'
											className='tatooine cardImg card-img-top me-5'
											alt='...'
										/>
									)
								} else {
									return (
										<img
											src={'https://starwars-visualguide.com/assets/img/planets/' + route + '.jpg'}
											className='cardImgPlanet  card-img-top me-5'
											alt='...'
										/>
									)
								}
							})()}
						</div>
						<div>
							<h1 className='mb-3'>{data.name}</h1>
							<p className='object-fit-contain'>
								Lorem ipsum dolor sit amet consectetur adipiscing elit, libero quam neque eget mi
								pharetra ultricies, augue sed scelerisque sem enim tortor. Cursus faucibus eleifend
								tristique tellus fames enim augue primis hac velit eros, maecenas suspendisse
								fermentum ligula netus volutpat purus orci consequat interdum lacus, nam risus
								potenti dictum est nostra malesuada bibendum turpis nunc. Fusce etiam dis cubilia
								nam molestie, mattis urna id nostra, vel semper sociosqu curae. Commodo etiam
								sodales cras mauris blandit mattis erat aenean, laoreet senectus habitant placerat
								lectus eget nisl, aptent consequat augue risus ad gravida luctus. Donec dui integer
								aliquam porta class tincidunt, auctor odio hac malesuada egestas. Malesuada bibendum
								pretium cursus tempor primis dictum dignissim nostra, risus lacinia senectus morbi
								tellus venenatis mattis tristique, euismod lectus varius phasellus netus erat
								imperdiet.
							</p>
						</div>
					</div>
					<div className='d-flex gap-5 text-center justify-content-center'>
						<p>
							Rotation Period
							<br />
							{data.rotation_period}
						</p>
						<p>
							Orbital Period
							<br />
							{data.orbital_period}
						</p>
						<p>
							Diameter
							<br />
							{data.diameter}
						</p>
						<p>
							Climate
							<br />
							{data.climate}
						</p>
						<p>
							Gravity
							<br />
							{data.gravity}
						</p>
						<p>
							Terrain
							<br />
							{data.terrain}
						</p>
						<p>
							Population
							<br />
							{data.population}
						</p>
					</div>
				</div>
			) : null}
			{category === 'films' ? (
				<div className='container lm'>
					<div className='contDetails d-flex mt-6 mb-5'>
						<div className='charImg'>
							<img
								src={'https://starwars-visualguide.com/assets/img/films/' + route + '.jpg'}
								className='cardImg card-img-top me-5'
								alt='...'
							/>
						</div>
						<div>
							<h1 className='mb-3'>{data.title}</h1>
							<p className='object-fit-contain'>
								Lorem ipsum dolor sit amet consectetur adipiscing elit, libero quam neque eget mi
								pharetra ultricies, augue sed scelerisque sem enim tortor. Cursus faucibus eleifend
								tristique tellus fames enim augue primis hac velit eros, maecenas suspendisse
								fermentum ligula netus volutpat purus orci consequat interdum lacus, nam risus
								potenti dictum est nostra malesuada bibendum turpis nunc. Fusce etiam dis cubilia
								nam molestie, mattis urna id nostra, vel semper sociosqu curae. Commodo etiam
								sodales cras mauris blandit mattis erat aenean, laoreet senectus habitant placerat
								lectus eget nisl, aptent consequat augue risus ad gravida luctus. Donec dui integer
								aliquam porta class tincidunt, auctor odio hac malesuada egestas. Malesuada bibendum
								pretium cursus tempor primis dictum dignissim nostra, risus lacinia senectus morbi
								tellus venenatis mattis tristique, euismod lectus varius phasellus netus erat
								imperdiet.
							</p>
						</div>
					</div>
					<div className='charDetails d-flex gap-5 text-center justify-content-center'>
						<p>
							Director
							<br />
							{data.director}
						</p>
						<p>
							Producer Period
							<br />
							{data.producer}
						</p>
						<p>
							Release Date
							<br />
							{data.release_date}
						</p>
						<p>
							Episode ID
							<br />
							{data.episode_id}
						</p>
					</div>
				</div>
			) : null}
		</>
	)
}
