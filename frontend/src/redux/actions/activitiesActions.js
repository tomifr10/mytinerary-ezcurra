import axios from 'axios';

const activitiesActions = {
    activitiesFromItinerary: (id) => {
        return async(dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/activities/itineraries/${id}`);
            console.log(res.data.response)
            dispatch({type:'activityFromItinerary', payload:res.data.response});
            return res
        }
    },

    showActivities: () => {
        return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/activities');
            console.log(res.data.response)
            dispatch({type:'allActivities', payload:res.data.response.activities})
        }
    }
}
export default activitiesActions