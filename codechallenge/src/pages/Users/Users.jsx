import React, { useContext, useEffect } from "react";
import  Card  from "../../components/Card.jsx";
import { Context } from "../../store/appContext.js";
 import "./users.css";


function Users() {
	const { store, actions } = useContext(Context);
	console.log("store", store);
	console.log("actions", actions);

	useEffect(() => {
		actions.getUser();
		
	}, []);

	return (

		
		<div className="container mt-5">
			<h1 className="title">Users List</h1>
			<div className="user-container">

				 {store.users.map((user, index) => (
					<Card key={index} resource="users" id={index}>
						<h5 className="card-title">{user.name}</h5>
						<p className="card-text">Email: {user.email}</p>
						
					</Card>
				))} 
			</div>
			
			
		</div>
	);
}
export default Users;
