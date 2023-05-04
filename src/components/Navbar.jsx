export function Navbar(props) {

	return (
		<>
			<nav className='navbar bg-body-tertiary'>
				<div className='container-fluid'>
					<a to='/' className='navbar-brand fs-2 fw-bold'>
						StarWars
					</a>
					<div className='btn-group'>
						<button
							type='button'
							className='btn btn-primary dropdown-toggle'
							data-bs-toggle='dropdown'
							aria-expanded='false'>
							Favoritos
						</button>
						<ul className='dropdown-menu dropdown-menu-end'>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}