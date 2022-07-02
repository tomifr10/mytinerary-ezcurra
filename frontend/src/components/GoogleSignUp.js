import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions/usersActions'
import toast from 'react-hot-toast';

const GoogleSignUp = () => {
    const dispatch = useDispatch();

    async function handleCallbackResponse(response) {
        let userObject = jwt_decode(response.credential);
        console.log(userObject)
        const res = await dispatch(userActions.signUpUser({
            firstName: userObject.given_name,
            lastName: userObject.family_name,
            photo: userObject.picture,
            email: userObject.email,
            password: userObject.sub,
            country: "arg",
            from: "Google"
        }));
        if (res.data.success === true) {
            toast.success(res.data.message)
        } else {
            toast.error(res.data.message)
        }
        // console.log(res.data.message)
    }

useEffect(()=> {
    /* global google */
    google.accounts.id.initialize({
        client_id: '251044833501-li2sotvrc9l358cqi705m8vscref969a.apps.googleusercontent.com',
        callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
        document.getElementById('buttonDiv'),
        { theme: "outline", size: "medium", locale:'en', shape:"pill",  }
        )
})
// type: "icon"
  return (
    <div>
        <div id='buttonDiv'></div>
    </div>
  )
}

export default GoogleSignUp