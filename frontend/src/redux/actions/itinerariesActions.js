import axios from 'axios';

const itinerariesActions = {

    findOneItinerary: (id) => {
        //console.log(id)
        return async() => {
            try {
                const res = await axios.get(`http://localhost:4000/api/itineraries/${id}`)
                return res
            }catch (err) {
                console.log(err)
            }
        }
    },

    itinerariesFromCity: (id) => {
        return async(dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/itineraries/cities/${id}`);
            console.log(res.data.response)
            dispatch({type:'itineraryFromCity', payload:res.data.response});
        }
    },

    likeDislike: (id) => {
        const token = localStorage.getItem('token')
        return async() => {
            try {
                const res = await axios.put(`http://localhost:4000/api/itineraries/likeDislike/${id}`,{},
                    {headers: {'Authorization': "Bearer " + token}}
                )
                console.log(res.data.response)
                return res
            }catch (err) {
                console.log(err)
            }
        }
    },

    addComment: (commentaries) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post(`http://localhost:4000/api/comment`, commentaries,
                {headers: {'Authorization': "Bearer " + token}}
            )
            console.log(res)
            console.log(commentaries)

            dispatch({type: 'message', payload: {view: true, message: res.data.message, success: res.data.success}
            })
            return res
        }
    },

    modifyComment: (comment) => {
        const token = localStorage.getItem('token');
        console.log(comment)
        return async (dispatch, getState) => {
            const res = await axios.put(`http://localhost:4000/api/comment`, comment ,
            {headers: {'Authorization': "Bearer " + token}}
        )
        dispatch({type: 'message', payload: {view: true, message: res.data.message, success: res.data.success}
        })
        return res
        }
    },

    deleteComment: (id) => {
        const token = localStorage.getItem('token')
            return async (dispatch, getState) => {
                const res = await axios.post(`http://localhost:4000/api/comment/${id}`,{},
                {headers: {'Authorization': "Bearer " + token}}
            )
            dispatch({type: 'message', payload: {view: true, message: res.data.message, success: res.data.success}
            })
            return res
        }
    }
}
export default itinerariesActions