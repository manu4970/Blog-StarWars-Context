//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'
import ReactDOM from 'react-dom/client'


//import your own components
import Layout from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { FavProvider } from './store/favContext.jsx'
import { RoutesProvider } from './store/routes.jsx'

//
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <FavProvider>
    <RoutesProvider>
      <Layout/>
    </RoutesProvider>
  </FavProvider>
  </BrowserRouter>
)