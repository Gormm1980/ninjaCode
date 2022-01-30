import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import injectContext from "./store/appContext.js";

import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Users from "./pages/Users/Users.jsx";

function Layout() {
	return (
		<Router>
			<Navbar />

			<div className="page">
				<Routes>
					<Route exact path="/" element={<Home />}>
					</Route>
					
					<Route exact path="/Users" element={<Users />}>
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
