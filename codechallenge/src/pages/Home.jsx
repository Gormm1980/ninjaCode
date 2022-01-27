import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import Users from "../components/Users.jsx";

function Home() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getUser();
		
	}, [actions]);

	return (
		<div className="container mt-5">
			<h1 className="title">Users List</h1>
			<div className="card-container">
				{store.users.map((handleUser, index) => (
					<Users key={index} resource="users" id={index}>
						<h5 className="card-title">{handleUser.name}</h5>
						<p className="card-text">Email: {handleUser.email}</p>
						
					</Users>
				))}
			</div>
			
			
		</div>
	);
}
export default Home;
