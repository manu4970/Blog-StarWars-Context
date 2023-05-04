import React, { useContext } from "react";
import './styles/App.css'
import injectContext from "./store/appContext";
import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";

const Layout = () => {

	return (
		<div>
      <Navbar/>
      <Section category="Characters"/>
      <Section category="Films"/>
      <Section category="Planets"/>
		</div>
	);
};

export default injectContext(Layout);