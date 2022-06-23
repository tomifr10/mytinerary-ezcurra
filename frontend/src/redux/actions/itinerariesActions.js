import axios from 'axios';

const itinerariesActions = {
    itinerariesFromCity: (id) => {
        return async(dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/itineraries/cities/${id}`);
            console.log(res.data.response)
            dispatch({type:'itineraryFromCity', payload:res.data.response});
        }
    }
}
export default itinerariesActions