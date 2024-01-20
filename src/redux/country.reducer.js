const initialState = {
    countries: []
}

export const CountryReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_COUNTRY":
            return {
                ...state,
                countries: [...action.payload]
            }
    
        default:
            return state;
    }
}