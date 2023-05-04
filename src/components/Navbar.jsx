import { useFavs } from '../hooks/useFavs'
import { Link } from 'react-router-dom'

export function Navbar() {
	const { favs, removeFav } = useFavs()

	console.log(favs[0])
	return (
		<>
			<nav className='navbar bg-body-tertiary'>
				<div className='container-fluid'>
					<Link to='/' className='navbar-brand fs-2 fw-bold'>
						StarWars
					</Link>
					<div className='btn-group'>
						<button
							type='button'
							className='btn btn-primary dropdown-toggle'
							data-bs-toggle='dropdown'
							aria-expanded='false'>
							Favorites <span className='badge text-bg-secondary'>{favs.length}</span>
						</button>
						<ul className='dropdown-menu dropdown-menu-end'>
							{favs.map((fav, index) => {
								return (
									<div key={index} className='liContainer'>
										<li className='dropdown-item d-flex align-items-center' key={index}>
											<Link
												to={"/"+fav[2]+"/"+(fav[3]+1)}
												className='dropdown-item'
												href='#'>
												{fav[0]}
											</Link>
										</li>
										<i
											className='x ms-auto fa-solid fa-trash'
											onClick={() => removeFav(fav, index)}></i>
									</div>
								)
							})}
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}
