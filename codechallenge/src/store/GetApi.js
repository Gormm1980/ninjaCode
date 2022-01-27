function getState({ getStore, setStore }) {
	return {
		store: {
			loading: true,
			users: [],
		
	
		},
		actions: {
			
            getUser() {
                const store = getStore();
                const endpoint = "https://my-user-manager.herokuapp.com/users/";
                const config = {
                    method: "GET"
                };
                if (store.users === 0) {
                    fetch(endpoint, config)
                    console.log(store.users)
                        .then(response => {
                            return response.json();
                        })
                        .then(json => {
                            setStore({ users: json.results });
                        });
                        
                }
            },
            setLoading(status) {
				setStore({ loading: status });
			},

			toggleLoader() {
				const store = getStore();
				setStore({ loading: !store.loading });
			}
  
        }
    };
}
        export default getState;