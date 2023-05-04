//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'
import ReactDOM from 'react-dom/client'

//import your own components
import Layout from './App.jsx'

//
ReactDOM.createRoot(document.getElementById('root')).render(
  <Layout/>
)