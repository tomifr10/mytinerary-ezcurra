import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions/usersActions'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

const GoogleSignUp = (prop) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleCallbackResponse(response) {
        let userObject = jwt_decode(response.credential);
        console.log(userObject)
        const userData = {
            firstName: userObject.given_name,
            lastName: userObject.family_name,
            photo: userObject.picture,
            email: userObject.email,
            password: userObject.sub,
            country: prop.Country,
            from: "Google"
        }; 
        console.log(userData)
        const res = await dispatch(userActions.signUpUser(userData));
        if (res.data.success === true) {
            toast.success(res.data.message);
            navigate("/signIn")
        } else {
            toast.error(res.data.message)
        }
        console.log(res)
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