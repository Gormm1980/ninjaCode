import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function Users() {
	const params = useParams();
	const { store } = useContext(Context);

	let handleUser = store.users[params.index];

	return (
		<div>
			<div className="jumbotron-fluid mx-5 my-5 d-flex flex-row">
				<div className="left-side d-inline-block">
				</div>
				<div className="right-side d-inline-block">
					<h1 className="text-center text-monospace">{handleUser.name}</h1>
				</div>
			</div>
			<div className="divider bg-danger" />
			<div className="row d-flex ml-5">
				<div className="col-2 text-danger">Name: {handleUser.name}</div>
				<div className="col-2 text-danger">Email: {handleUser.email}</div>
				
			</div>
		</div>
	);
}
export default Users;
