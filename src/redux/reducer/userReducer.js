const initialState = {
    name: "Marion",
    email: "nanofromage@yopmail.com",
  };

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "SUBMITUSER":
            console.log(action.payload)
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            }
        default: 
            return {...state}
    }
}

export default userReducer;