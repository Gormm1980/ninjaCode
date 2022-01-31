import React, { useContext, useEffect } from "react";
import  Card  from "../../components/Card.jsx";
import { Context } from "../../store/appContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faUser } from "@fortawesome/free-solid-svg-icons";
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
						<h5 className="card-title"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> {user.name}</h5>
						<p className="card-text"><FontAwesomeIcon icon={faEnvelopeOpenText}></FontAwesomeIcon> {user.email}</p>
						
					</Card>
				))} 
			</div>
			
			
		</div>
	);
}
export default Users;
