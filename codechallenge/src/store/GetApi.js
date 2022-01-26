function getState({ getStore, setStore }) {
	return {
		store: {
			loading: true,
			userId: [],
		
	
		},
		actions: {
			
            getUser(id) {
                const store = getStore();
                const endpoint = "https://my-user-manager.herokuapp.com/users/" + id;
                const config = {
                    method: "GET"
                };
                if (store.userId.length === 0) {
                    fetch(endpoint, config)
                        .then(response => {
                            return response.json();
                        })
                        .then(json => {
                            setStore({ userId: json.results });
                        });
                }
            },
  
        }
    };
}
        export default getState;