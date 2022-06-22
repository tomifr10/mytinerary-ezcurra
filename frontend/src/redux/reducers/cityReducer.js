const initialState = {
    cities: [],
    city: [],
    // aux: []
}

const cityReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'allCities':
            return {
                ...state,
                cities: action.payload,
                // aux: action.payload
            }
        case 'oneCity':
            return {
                ...state,
                city: action.payload
            }    
        default:
            return state
    }
}
export default cityReducer