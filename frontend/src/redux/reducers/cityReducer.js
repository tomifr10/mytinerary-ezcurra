const initialState = {
    cities: [],
    city: [],
    filtro: []
    // aux: []
}

const cityReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'allCities':
            return {
                ...state,
                cities: action.payload,
                filtro: action.payload
                // aux: action.payload
            }
        case 'oneCity':
            return {
                ...state,
                city: action.payload
            }
        case 'filtro':
            let ciudadFiltrada = state.cities.filter(ciudad => ciudad.name.toLowerCase().startsWith(action.payload.trim().toLowerCase()));
            return {
                ...state,
                filtro: ciudadFiltrada
            }
        default:
            return state
    }
}
export default cityReducer