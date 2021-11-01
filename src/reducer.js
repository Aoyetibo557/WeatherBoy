export const initalState = {
   cities: [],
   tempCities: [],
   user: null,
   query: null,
};

export const actionTypes = {
    SET_USER: 'SET_USER',
    ADD_CITY: 'ADD_CITY',
    SEE_TEMP_CITY: 'SEE_TEMP_CITY',
    SET_QUERY: 'SET_QUERY',
    REMOVE_CITY: 'REMOVE_CITY',
};


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {

        case actionTypes.SET_USER:
            return{
                ...state,
                user: action.user
            }
        
        case actionTypes.ADD_CITY:
            
            return{
                ...state,
                cities: [...state.cities, action.city]
            }


        case actionTypes.SEE_TEMP_CITY:
            return{
                ...state,
                ...state.tempCities = [],
                tempCities: [...state.tempCities, action.city]
            }


            //used to set the query name for fething forecast details in details componenet 
        case actionTypes.SET_QUERY:
            
            return{
                ...state,
                ...state.query = "",
                query: action.query,
            }

        case actionTypes.REMOVE_CITY:
            let newCities = [...state.cities];
            const index = state.cities.findIndex((city) => city.name === action.name);

            console.log("Index", index)
            if(index >= 0) {
                newCities.splice(index, 1);
            }
            else{
                console.warn(`Can't remove city from list, its not in the cart. ${action.name}`)
            }
            return{
                ...state,
                cities: newCities
            }
        default:
            return state;
    }
}

export default reducer;