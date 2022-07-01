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
                //localStorage.setItem("token", res.data.response.token);
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
};

export default usersActions; 