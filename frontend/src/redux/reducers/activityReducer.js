const initialState = {
    activitiesFrom: [],
    activities: []
}

const activityReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'activityFromItinerary':
            return {
                ...state,
                activitiesFrom: action.payload,
            }
        case 'allActivities':
            return {
                ...state,
                activities: action.payload,
            }
        default:
            return state
    }
}
export default activityReducer
