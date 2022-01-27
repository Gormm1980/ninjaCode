import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import injectContext from "./store/appContext.js";

import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";

function Layout() {
	return (
		<Router>
			<Navbar />

			<div className="page">
				<Routes>
					<Route exact path="/" element={<Home />}>
					</Route>

					<Route path="/contact" element={<Contact/>}>
					
					</Route>

				</Routes>
			</div>

			<Footer />
		</Router>
	);
}
export default injectContext(Layout);
