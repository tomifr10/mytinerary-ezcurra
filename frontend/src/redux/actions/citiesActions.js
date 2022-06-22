import axios from 'axios';

const citiesActions = {
    mostrarCities: () => {
        return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/cities/')
            dispatch({type:'allCities', payload:res.data.response.cities})
        }
    },

    mostrarOneCity: (id) => {
        return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/cities/' + id);
            dispatch({type:'oneCity', payload:res.data.response});
            // return res
        }
    },

    filtroCity: (input) => {
        return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/cities/')
            dispatch({type:'filtro', payload:res.data.response.cities})
            
        }
    }
}
export default citiesActions