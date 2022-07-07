import axios from 'axios';

const usersActions = {
    signUpUser: (userData) => {
        //console.log(userData)
        return async (dispatch, getState) => {
            const res = await axios.post(
                "http://localhost:4000/api/auth/signup",
                { userData }
            );
            console.log(res)
            dispatch({
                type: "message",
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success,
                },
            });
            return res
        };
    },
    signInUser: (logedUser) => {
        console.log(logedUser);
        return async (dispatch, getState) => {
            const res = await axios.post(
                "http://localhost:4000/api/auth/signin",
                { logedUser }
            );
            console.log(res)
            if (res.data.success) {
                localStorage.setItem("token", res.data.response.token);
                dispatch({
                    type: "user",
                    payload: res.data.response.userData,
                });
            } else {
                dispatch({
                    type: "message",
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success,
                    },
                });
            }
            return res
        };
    },

    tokenVerification: (token) => {
        return async (dispatch, getState) => {
            await axios.get('http://localhost:4000/api/auth/signInToken', {
                headers: {'Authorization': 'Bearer ' + token}})
                .then(user => {if(user.data.success) {
                    dispatch({ type: 'user', payload: user.data.response });
                    dispatch({ type: 'message',
                                payload: {
                                    view: true,
                                    message: user.data.message,
                                    success: user.data.success
                                }});
                                // console.log(user)
                } else {localStorage.removeItem('token')}}
                ).catch(err => {
                    if(err.response.status === 401) {
                        dispatch({type: 'message', payload: {
                            view: true,
                            message: 'Please make the Sign-In again',
                            success: false
                        }});
                        {localStorage.removeItem('token')}
                    } else {localStorage.removeItem('token')}
                })
        }
    },

    signOutUser: () => {
        return async (dispatch, getState) => {
            // const user = axios.post('http://localhost:4000/api/auth/sigOut', { closeData });
            localStorage.removeItem('token');
            dispatch({ type: 'user', payload: null })
        }
    }
};

export default usersActions; 