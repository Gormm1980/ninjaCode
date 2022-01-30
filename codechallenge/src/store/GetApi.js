function getState({ getStore, setStore }) {
	return {
		store: {
			loading: true,
			users: [],
            userOne:{id:"",name:"",email:""},
            userTwo:{id:"",name:"",email:""},
            userThree:{id:"",name:"",email:""},
		
	
		},
		actions: {
			
            getUser:() => {
                const endpoint = "https://my-user-manager.herokuapp.com/users/";
                const config = {
                    method: "GET"
                };
                console.log("getUser");
                
                    fetch(endpoint, config)
                        .then(response => {
                            return response.json();
                        })
                        .then(json => {
                            setStore({ users: json });
                            console.log(json);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                        
                },
                getUserOne:()=>{ 
                    fetch("https://my-user-manager.herokuapp.com/users/1")
                    .then(resp => resp.json())
                    .then(json => {
                        console.log(json);
                        setStore({userOne:json});
                    }
                    )
                    .catch(error => console.log(error));
                },
                getUserTwo:()=>{
                    fetch("https://my-user-manager.herokuapp.com/users/2")
                    .then(resp => resp.json())
                    .then(json => {
                        console.log(json);
                        setStore({userTwo:json});     
                    }
                    )
                    .catch(error => console.log(error));
                },
                getUserThree:()=>{
                    fetch("https://my-user-manager.herokuapp.com/users/3")
                    .then(resp => resp.json())
                    .then(json => {
                        console.log(json);
                        setStore({userThree:json});
                    }
                    )
                    .catch(error => console.log(error));
                },
    
    
                setLoading(status) {
                    const store = getStore();
                    setStore({...store, loading: status });
                },
    
                toggleLoader() {
                    const store = getStore();
                    setStore({ loading: !store.loading });
                }
            },
            
  
        }
    };

        export default getState;