import './styles/App.css'
import React, { useContext } from 'react'
import injectContext from './store/appContext'
import { Navbar } from './components/Navbar'
import { Section } from './components/Section'
import { DevFooter } from './components/DevFooter'
import { Route, Routes } from 'react-router-dom'
import { MoreInfo } from './components/MoreInfo'
import { RoutesContext } from './store/routes'

const Layout = () => {
	const { route } = useContext(RoutesContext)

	return (
		<div className='bg-dark'>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={
						<div className='container-fluid'>
							<Section category='character' />
							<Section category='film' />
							<Section category='planet' />
						</div>
					}
				/>
				<Route
					path='/character/:route'
					element={<MoreInfo category='people' routeId={route} />}
				/>
				<Route path='/planet/:route' element={<MoreInfo category='planets' routeId={route} />} />
				<Route path='/film/:route' element={<MoreInfo category='films' routeId={route} />} />
			</Routes>
			<DevFooter />
		</div>
	)
}

export default injectContext(Layout)
